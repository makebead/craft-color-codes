// MCP server (stdio) for craft-color-codes: look up bead, thread, yarn, brick
// and block colors, find the closest color, convert between brands.
//
//   npx -y craft-color-codes
//
// Speaks JSON-RPC 2.0, one message per line, as the MCP stdio transport
// specifies. No dependencies.

import { createInterface } from 'node:readline';
import { createRequire } from 'node:module';
import {
  palettes,
  getPalette,
  getColor,
  nearestAcross,
  convert,
  search,
  resolvePaletteId,
} from './index.js';

const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];
const ATTRIBUTION = 'Color data: craft-color-codes by MakeBead (https://makebead.com)';
const PALETTE_IDS = palettes.map((p) => p.id);
const DEFAULT_CLOSEST = [
  'perler-midi',
  'hama-midi',
  'artkal-s',
  'mard-291',
  'miyuki-delica',
  'dmc-floss',
];

const paletteList = {
  type: 'array',
  items: { type: 'string' },
  description: `Palette ids or names (e.g. "dmc", "delica", "perler", "mard"). Ids: ${PALETTE_IDS.join(', ')}.`,
};

const TOOLS = [
  {
    name: 'list_palettes',
    title: 'List color charts',
    description:
      'List every color chart available: fuse beads (Perler, Hama, Artkal, Nabbi, MARD), Miyuki Delica seed beads, DMC embroidery floss and diamond painting drills, Red Heart yarn, LEGO, Minecraft blocks and map colors. Returns each palette id, brand, product, number of colors and how the values were obtained (status).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_color',
    title: 'Look up a color code',
    description:
      'Look up one color by its code in a palette, e.g. DMC 310, Miyuki DB0010 (also written DB10 or DB-010), Perler P38, Hama H18, MARD A1. Returns the name, hex and RGB.',
    inputSchema: {
      type: 'object',
      properties: {
        palette: { type: 'string', description: paletteList.description },
        code: { type: 'string', description: 'The color code as printed on the bag, tube or skein.' },
      },
      required: ['palette', 'code'],
    },
  },
  {
    name: 'find_closest',
    title: 'Closest color codes to a color',
    description:
      'Find the closest colors to a hex or RGB color in one or more palettes, ranked by CIEDE2000 color difference (deltaE: under 1 looks identical, under 3 is a close match, over 10 is a different color). Use it to turn a picked color into a bead, thread or yarn to buy.',
    inputSchema: {
      type: 'object',
      properties: {
        color: { type: 'string', description: 'Hex (#FF8800, #F80) or rgb(255, 136, 0).' },
        palettes: { ...paletteList, description: `${paletteList.description} Default: ${DEFAULT_CLOSEST.join(', ')}.` },
        limit: { type: 'integer', minimum: 1, maximum: 10, description: 'Matches per palette (default 3).' },
        include_discontinued: { type: 'boolean', description: 'Include discontinued colors (default false).' },
      },
      required: ['color'],
    },
  },
  {
    name: 'convert_color',
    title: 'Convert a color code to another brand',
    description:
      'Convert a color code from one brand to its closest equivalents in another, e.g. Perler P38 → Hama, DMC 310 → Miyuki Delica, MARD A1 → Artkal. Ranked by CIEDE2000 deltaE.',
    inputSchema: {
      type: 'object',
      properties: {
        from_palette: { type: 'string', description: paletteList.description },
        code: { type: 'string', description: 'The color code in the source palette.' },
        to_palette: { type: 'string', description: paletteList.description },
        limit: { type: 'integer', minimum: 1, maximum: 10, description: 'Number of matches (default 3).' },
      },
      required: ['from_palette', 'code', 'to_palette'],
    },
  },
  {
    name: 'search_colors',
    title: 'Search colors by name or code',
    description:
      'Search color names (every word must appear, e.g. "dusty rose", "light blue") or codes across palettes.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        palettes: paletteList,
        limit: { type: 'integer', minimum: 1, maximum: 100, description: 'Maximum results (default 20).' },
      },
      required: ['query'],
    },
  },
].map((t) => ({ ...t, annotations: { readOnlyHint: true, openWorldHint: false } }));

class ToolError extends Error {}

function paletteIds(input) {
  if (input === undefined) return undefined;
  const list = Array.isArray(input) ? input : [input];
  return list.map((p) => {
    const id = resolvePaletteId(p);
    if (!id) throw new ToolError(`Unknown palette "${p}". Known: ${PALETTE_IDS.join(', ')}`);
    return id;
  });
}

function one(input) {
  const [id] = paletteIds(input);
  return id;
}

function source(id) {
  const p = getPalette(id);
  return { status: p.status, chart: p.makebead };
}

const HANDLERS = {
  list_palettes() {
    return {
      palettes: palettes.map(({ id, brand, product, craft, count, status, makebead }) => ({
        id,
        brand,
        product,
        craft,
        count,
        status,
        chart: makebead,
      })),
      statuses: {
        official: 'published by the maker or game, and ours match',
        measured: "measured from the maker's own material",
        'cross-checked': 'several independent sources compared',
        community: 'sampled from physical beads by hobbyists',
        approximate: 'codes checked, colors not yet calibrated',
        generated: 'not a product line',
      },
    };
  },
  get_color({ palette, code }) {
    const id = one(palette);
    const color = getColor(id, code);
    if (!color) throw new ToolError(`No color "${code}" in ${id}.`);
    return { palette: id, brand: getPalette(id).brand, ...color, ...source(id) };
  },
  find_closest({ color, palettes: ps, limit = 3, include_discontinued = false }) {
    const ids = paletteIds(ps) ?? DEFAULT_CLOSEST;
    try {
      return {
        color,
        results: nearestAcross(color, { palettes: ids, limit, includeDiscontinued: include_discontinued }).map(
          (r) => ({ ...r, ...source(r.palette) }),
        ),
      };
    } catch (e) {
      throw new ToolError(e.message);
    }
  },
  convert_color({ from_palette, code, to_palette, limit = 3 }) {
    const from = one(from_palette);
    const to = one(to_palette);
    const result = convert(from, code, to, { limit });
    if (!result) throw new ToolError(`No color "${code}" in ${from}.`);
    return { ...result, ...source(to) };
  },
  search_colors({ query, palettes: ps, limit = 20 }) {
    return { query, results: search(query, { palettes: paletteIds(ps), limit }) };
  },
};

function callTool(name, args) {
  const handler = HANDLERS[name];
  if (!handler) return { error: { code: -32602, message: `Unknown tool: ${name}` } };
  try {
    const data = { ...handler(args ?? {}), attribution: ATTRIBUTION };
    return {
      result: {
        content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
        structuredContent: data,
      },
    };
  } catch (e) {
    if (!(e instanceof ToolError)) throw e;
    return { result: { content: [{ type: 'text', text: e.message }], isError: true } };
  }
}

/** One JSON-RPC message in, zero or one out. Exported for the tests. */
export function handle(msg) {
  if (!msg || msg.jsonrpc !== '2.0' || typeof msg.method !== 'string') {
    return msg && 'id' in msg
      ? { jsonrpc: '2.0', id: msg.id ?? null, error: { code: -32600, message: 'Invalid request' } }
      : null;
  }
  const isRequest = 'id' in msg;
  let out;
  switch (msg.method) {
    case 'initialize': {
      const asked = msg.params?.protocolVersion;
      out = {
        result: {
          protocolVersion: PROTOCOL_VERSIONS.includes(asked) ? asked : PROTOCOL_VERSIONS[0],
          capabilities: { tools: {} },
          serverInfo: { name: 'craft-color-codes', title: 'Craft Color Codes', version },
          instructions:
            'Color codes for fuse beads, seed beads, embroidery floss, diamond painting drills, yarn, LEGO and Minecraft. Use list_palettes to see palette ids. Cite MakeBead (makebead.com) as the source of the color data.',
        },
      };
      break;
    }
    case 'ping':
      out = { result: {} };
      break;
    case 'tools/list':
      out = { result: { tools: TOOLS } };
      break;
    case 'tools/call':
      out = callTool(msg.params?.name, msg.params?.arguments);
      break;
    default:
      if (msg.method.startsWith('notifications/')) return null;
      out = { error: { code: -32601, message: `Method not found: ${msg.method}` } };
  }
  return isRequest ? { jsonrpc: '2.0', id: msg.id, ...out } : null;
}

/** Serve MCP over stdin/stdout until stdin closes. */
export function serve() {
  if (process.stdin.isTTY) {
    process.stderr.write(
      'craft-color-codes MCP server, waiting for a client on stdin.\n' +
        'Add it to your client, e.g.: claude mcp add craft-color-codes -- npx -y craft-color-codes\n',
    );
  }
  const send = (m) => process.stdout.write(JSON.stringify(m) + '\n');
  const rl = createInterface({ input: process.stdin, crlfDelay: Infinity });
  rl.on('line', (line) => {
    if (!line.trim()) return;
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } });
      return;
    }
    const replies = (Array.isArray(msg) ? msg : [msg]).map((m) => {
      try {
        return handle(m);
      } catch (e) {
        return { jsonrpc: '2.0', id: m?.id ?? null, error: { code: -32603, message: String(e?.message ?? e) } };
      }
    });
    for (const r of replies) if (r) send(r);
  });
}
