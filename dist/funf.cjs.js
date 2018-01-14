'use strict';

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// (a -> b) -> (b -> c) -> a -> c
var pipe = function pipe(fn) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  return function () {
    return fns.reduce(function (acc, f) {
      return f(acc);
    }, fn.apply(undefined, arguments));
  };
};

// (b -> c) -> (a -> b) -> a -> c
var compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return pipe.apply(undefined, toConsumableArray(fns.reverse()));
};

// ((a, b) -> c) -> a -> b -> c
var curry = function curry(f) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return f.length <= args.length ? f.apply(undefined, args) : function () {
    for (var _len4 = arguments.length, more = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      more[_key4] = arguments[_key4];
    }

    return curry.apply(undefined, [f].concat(args, more));
  };
};

// ([a]) -> a
var head = function head(arr) {
  return arr[0];
};

// ([a]) -> [a]
var tail = function tail(arr) {
  return arr.slice(1);
};

// ({a}) -> ([a]) -> {a}
var pick = function pick(keys, obj) {
  return keys.reduce(function (acc, curr) {
    return _extends({}, acc, defineProperty({}, curr, obj[curr]));
  }, {});
};

// ({a}) -> ([a]) -> {a}
var omit = function omit(keys, obj) {
  return Object.keys(obj).reduce(function (acc, curr) {
    return keys.includes(curr) ? _extends({}, acc) : _extends({}, acc, defineProperty({}, curr, obj[curr]));
  }, {});
};

// [a] -> [b] -> [(a, b)]
var zip = function zip(arr) {
  for (var _len5 = arguments.length, arrs = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    arrs[_key5 - 1] = arguments[_key5];
  }

  return arr.map(function (val, i) {
    return arrs.reduce(function (a, arr) {
      return [].concat(toConsumableArray(a), [arr[i]]);
    }, [val]);
  });
};

module.exports.pipe = pipe;
module.exports.compose = compose;
module.exports.curry = curry;
module.exports.head = head;
module.exports.tail = tail;
module.exports.pick = curry(pick);
module.exports.omit = curry(omit);
module.exports.zip = zip;
