// (a -> b) -> (b -> c) -> a -> c
const pipe = (fn, ...fns) => (...args) => fns.reduce((acc, f) => f(acc), fn(...args));

// (b -> c) -> (a -> b) -> a -> c
const compose = (...fns) => pipe(...fns.reverse());

// ((a, b) -> c) -> a -> b -> c
const curry = (f, ...args) => (f.length <= args.length)
  ? f(...args)
  : (...more) => curry(f, ...args, ...more);

// ([a]) -> a
const head = (arr) => arr[0];

// ([a]) -> [a]
const tail = (arr) => arr.slice(1);

// ({a}) -> ([a]) -> {a}
const pick = (keys, obj) => keys.reduce((acc, curr) => ({ ...acc, [curr]: obj[curr] }), {});

// ({a}) -> ([a]) -> {a}
const omit = (keys, obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    return keys.includes(curr)
      ? { ...acc }
      : { ...acc, [curr]: obj[curr] };
  }, {});
}

// ([a], [b]) -> [[a, b]]
const zip = (arr, ...arrs) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

// (a) -> ({a}) -> a
const prop = (p, obj) => obj[p];

module.exports.pipe = pipe;
module.exports.compose = compose;
module.exports.curry = curry;
module.exports.head = head;
module.exports.tail = tail;
module.exports.pick = curry(pick);
module.exports.omit = curry(omit);
module.exports.zip = zip;
module.exports.prop = curry(prop);
