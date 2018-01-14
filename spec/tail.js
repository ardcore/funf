const test = require('tape');
const { tail } = require('..');

test('tail: should return array without 1st element', function (t) {
  t.same(
    tail([1, 2, 3]),
    [2, 3]
  );
  t.end();
});

test('tail: should return undefined with empty array', function (t) {
  t.same(
    tail([]),
    []
  );
  t.end();
});
