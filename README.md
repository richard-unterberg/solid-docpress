# nivel

early alpha - vike-based documentation site builder

monorepo structure:

- `packages/engine`: the reusable `@unterberg/nivel` package
- `packages/consumer-test`: the reference consumer used to exercise the engine against real docs content, currently based on the [Telefunc docs](https://telefunc.com)

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
pnpm format
pnpm knip
```
