const test = require('tape');
const { curry } = require('..');

const add = (a, b) => a + b;

test('curry: invoking curried', function (t) {
  t.equal(
    add(1, 2),
    curry(add)(1)(2)
  );
  t.end();
});

test('curry: no-param invocation shouldnt influence the result', function (t) {
  t.equal(
    add(1, 2),
    curry(add)()(1, 2)
  );
  t.end();
});

test('curry: invoking non-curried', function (t) {
  t.equal(
    add(1, 2),
    curry(add)(1, 2)
  );
  t.end();
});
