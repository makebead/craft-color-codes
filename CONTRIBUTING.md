# Contributing

## Report a wrong or missing color

Use the issue forms — [wrong color](https://github.com/makebead/craft-color-codes/issues/new?template=wrong-color.yml)
or [missing color or palette](https://github.com/makebead/craft-color-codes/issues/new?template=missing-color.yml).
What makes a report actionable:

- the palette and the code, exactly as printed on the bag, tube or skein;
- what is wrong — the shade, the name, a code that does not exist or is missing;
- a daylight photo of the item next to white paper, or a source (a maker's
  chart, a product page) for the value you propose.

## How data gets here

The palettes are maintained in [MakeBead](https://makebead.com/), where they
are used, and copied here by `npm run sync`. A pull request that edits
`data/` directly is welcome as a report: the change is made in MakeBead, checked
in its tools, and then synced — so please do not be surprised when your PR is
closed in favour of the sync commit that carries it.

`status` only goes up with evidence: a palette becomes `cross-checked` when
independent sources have been compared and the rule that settled their
conflicts is written in its `notes`.

## Development

```sh
npm test            # data integrity, CIEDE2000 reference pairs, API, MCP server
npm run sync        # rebuild data/ from ../makebead (maintainers)
npm run readme      # rebuild README.md, i18n/README.*.md and SOURCES.md
```

Node 18 or newer, no dependencies.

## Releasing

Bump `version` in `package.json` and both `version` fields in `server.json`,
commit, then push a tag: `git tag v1.0.1 && git push --tags`. The `publish`
workflow tests, then publishes to npm (trusted publishing, with provenance)
and to the MCP registry. Nobody needs an npm token.
