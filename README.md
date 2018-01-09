# funf!

Minimal, hand-picked and well-tested utilities needed to unlock functional programming. Zero dependencies. Provided as CJS, UMD and ESM modules.

## Utilities

- `pipe`: _((a), (b)', ..., (n)'') -> (a) -> (b)' -> ... -> (n)''_
- `compose`: _((a), (b)', ..., (n)'') -> (n)'' -> ... -> (b) -> (a)'_
- `pick`: _({a, b, ...}) -> ([a]) -> {a}_
- `omit`: _({a, b, ...}) -> ([a]) -> {b, ...}_
- `head`: _([a, b ,...]) -> a_
- `tail`: _([a, b ,...]) -> [b, ...]_
- `curry`: _((a, b, ..., n)) -> (a) -> (b) -> (...) -> (n)_

I may be adding more, but the intention is to find the perfect set of _core_ FP utilities and keep it as minimal as possible.

## Installation

`npm install funf --save` or `yarn add funf`

## Testing

`npm run test`

## License

MIT
