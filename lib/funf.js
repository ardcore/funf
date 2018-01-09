// ((a), (b)', ..., (n)'') -> (a) -> (b)' -> ... -> (n)''
const pipe = (fn, ...fns) => (...args) => fns.reduce((acc, f) => f(acc), fn(...args));

// ((a), (b)', ..., (n)'') -> (n)'' -> ... -> (b) -> (a)'
const compose = (...fns) => pipe(...fns.reverse());

// ((a, b, ..., n)) -> (a) -> (b) -> (...) -> (n)
const curry = (f, ...args) => (f.length <= args.length)
  ? f(...args)
  : (...more) => curry(f, ...args, ...more);

// ([a, b ,...]) -> a
const head = (arr) => arr[0];

// ([a, b ,...]) -> [b, ...]
const tail = (arr) => arr.slice(1);

// ({a, b, ...}) -> ([a]) -> {a}
const pick = (keys, obj) => keys.reduce((acc, curr) => ({ ...acc, [curr]: obj[curr] }), {});

// ({a, b, ...}) -> ([a]) -> {b, ...}
const omit = (keys, obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    return keys.includes(curr)
      ? { ...acc }
      : { ...acc, [curr]: obj[curr] };
  }, {});
}

module.exports.pipe = pipe;
module.exports.compose = compose;
module.exports.curry = curry;
module.exports.head = head;
module.exports.tail = tail;
module.exports.pick = curry(pick);
module.exports.omit = curry(omit);
