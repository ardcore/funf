# funf!

Minimal, hand-picked and well-tested utilities needed to unlock functional programming. Zero dependencies. Provided as CJS, UMD and ESM modules.

## Utilities

- `pipe`: _(a -> b) -> (b -> c) -> a -> c_
- `compose`: _(b -> c) -> (a -> b) -> a -> c_
- `pick`: _({a}) -> ([a]) -> {a}_
- `omit`: _({a}) -> ([a]) -> {a}_
- `head`: _([a]) -> a_
- `tail`: _([a]) -> [a]_
- `curry`: _((a, b) -> c) -> a -> b -> c_
- `zip`: - _([a], [b]) -> [[a, b]]_
- `prop`: - _(a) -> ({a}) -> a_

I may be adding more, but the intention is to find the perfect set of _core_ FP utilities and keep it as minimal as possible.

## Installation

`npm install funf --save` or `yarn add funf`

## Testing

`npm run test`

## License

MIT
