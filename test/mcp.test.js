import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { handle } from '../src/mcp.js';

const call = (name, args, id = 1) =>
  handle({ jsonrpc: '2.0', id, method: 'tools/call', params: { name, arguments: args } });

test('initialize echoes a protocol version it knows and falls back to its newest', () => {
  const r = handle({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } });
  assert.equal(r.result.protocolVersion, '2025-06-18');
  assert.deepEqual(r.result.capabilities, { tools: {} });
  assert.equal(r.result.serverInfo.name, 'craft-color-codes');
  const future = handle({ jsonrpc: '2.0', id: 2, method: 'initialize', params: { protocolVersion: '2099-01-01' } });
  assert.equal(future.result.protocolVersion, '2025-11-25');
});

test('notifications get no reply; unknown methods and tools are JSON-RPC errors', () => {
  assert.equal(handle({ jsonrpc: '2.0', method: 'notifications/initialized' }), null);
  assert.equal(handle({ jsonrpc: '2.0', id: 3, method: 'nope' }).error.code, -32601);
  assert.equal(call('nope', {}).error.code, -32602);
  assert.deepEqual(handle({ jsonrpc: '2.0', id: 4, method: 'ping' }).result, {});
});

test('tools/list describes five read-only tools with input schemas', () => {
  const { tools } = handle({ jsonrpc: '2.0', id: 1, method: 'tools/list' }).result;
  assert.deepEqual(
    tools.map((t) => t.name),
    ['list_palettes', 'get_color', 'find_closest', 'convert_color', 'search_colors'],
  );
  for (const t of tools) {
    assert.equal(t.inputSchema.type, 'object');
    assert.ok(t.description.length > 40);
    assert.equal(t.annotations.readOnlyHint, true);
  }
});

test('tool calls answer with text and structured content, and name the source', () => {
  const r = call('get_color', { palette: 'delica', code: 'DB10' }).result;
  assert.equal(r.structuredContent.code, 'DB0010');
  assert.match(r.structuredContent.chart, /^https:\/\/makebead\.com\//);
  assert.match(r.structuredContent.attribution, /makebead\.com/);
  assert.deepEqual(JSON.parse(r.content[0].text), r.structuredContent);

  const closest = call('find_closest', { color: '#C12041', palettes: ['dmc'], limit: 1 }).result;
  assert.equal(closest.structuredContent.results[0].matches[0].code, '309');

  const conv = call('convert_color', { from_palette: 'perler', code: 'P05', to_palette: 'hama' }).result;
  assert.equal(conv.structuredContent.matches.length, 3);

  const list = call('list_palettes', {}).result;
  assert.equal(list.structuredContent.palettes.length, 15);

  const found = call('search_colors', { query: 'rose dark', palettes: ['dmc'] }).result;
  assert.ok(found.structuredContent.results.length > 0);
});

test('a bad palette, code or color is a tool error the model can read, not a crash', () => {
  for (const [name, args] of [
    ['get_color', { palette: 'nope', code: '1' }],
    ['get_color', { palette: 'dmc', code: 'nope' }],
    ['find_closest', { color: 'not a color' }],
    ['convert_color', { from_palette: 'dmc', code: 'nope', to_palette: 'hama' }],
  ]) {
    const r = call(name, args).result;
    assert.equal(r.isError, true, name);
    assert.ok(r.content[0].text.length > 0);
  }
});

test('the bin speaks newline-delimited JSON-RPC over stdio', async () => {
  const bin = fileURLToPath(new URL('../bin/craft-color-codes.js', import.meta.url));
  const child = spawn(process.execPath, [bin], { stdio: ['pipe', 'pipe', 'pipe'] });
  const lines = [];
  let buf = '';
  const done = new Promise((resolve) => {
    child.stdout.on('data', (d) => {
      buf += d;
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        lines.push(JSON.parse(buf.slice(0, i)));
        buf = buf.slice(i + 1);
        if (lines.length === 3) resolve();
      }
    });
  });
  const send = (m) => child.stdin.write(JSON.stringify(m) + '\n');
  send({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 't', version: '0' } } });
  send({ jsonrpc: '2.0', method: 'notifications/initialized' });
  child.stdin.write('{not json\n');
  send({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'get_color', arguments: { palette: 'dmc', code: '310' } } });
  await done;
  child.kill();
  assert.equal(lines[0].id, 1);
  assert.equal(lines[1].error.code, -32700);
  assert.equal(lines[2].result.structuredContent.name, 'Black');
});
