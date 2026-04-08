# npm consumer fixture

Thin local e2e consumer for manually testing `@unterberg/nivel` as a standalone install.

This fixture is intentionally outside the pnpm workspace package globs, so it exercises the consumer contract without workspace linking. In this repo it points at `file:../../packages/engine` so current branch changes can be validated before publish.

## Usage

```bash
cd tests/npm-consumer
npm install
npx nivel init
npm run dev
```

The fixture keeps the consumer shell files visible in `pages/`, but uses the recommended helper APIs:

- `defineDocsConfig()` and `defineDocsGraph()` from `@unterberg/nivel/config` for authored config
- `createNivelVikeConfig()` for `pages/+config.ts`
- `nivel prepare` for generated docs routes

Tailwind and CSS remain hand-authored in the consumer.

Build and typecheck:

```bash
npm run build
npm run typecheck
```
