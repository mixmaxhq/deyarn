# deyarn — repo card

> A map, not a manual. Keep it ~1 screen; point to detail, don't inline it.

## What it is
A published npm CLI (`deyarn`) that converts a project from Yarn to npm: deletes `yarn.lock` and `node_modules`, runs `npm i` to generate `package-lock.json`, and pins `engines` in `package.json` to steer future installs away from Yarn.

## serves
role: One-shot developer CLI for migrating a repo from Yarn to npm; run by humans, not imported as a library.
referenced-by: []

## Code map
- CLI entrypoint (shebang) -> bin/deyarn.js
- All logic (single exported function) -> src/index.js

## Conventions
- Package manager: npm (package-lock.json committed; no yarn.lock).
- Test framework: none (`npm test` is a stub that exits 1).
- Lint: ESLint with eslint-config-mixmax (.eslintrc.json).
- Build: none (plain Node.js, no transpile).
- CI: none (no .github/workflows, no Jenkinsfile).
- Publish: manual `npm publish` to the public registry (MIT, not private).

## Run / test
- Install globally: `npm i -g deyarn`, then run `deyarn` from a target repo's root.
- Or from source: `node bin/deyarn.js`.
- No test suite.

## Load the matching domain card
- Cross-cutting library — load the consuming capability's card, not a domain-* for this repo.
