const test = require('tape');
const { tail } = require('..');

test('head: should return first element', function (t) {
  t.same(
    tail([1, 2, 3]),
    [2, 3]
  );
  t.end();
});

test('head: should return undefined with empty array', function (t) {
  t.same(
    tail([]),
    []
  );
  t.end();
});
