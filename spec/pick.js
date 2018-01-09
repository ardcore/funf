const test = require('tape');
const { pick } = require('..');

test('pick: should return selected element', function (t) {
  t.same(
    pick(["a"])({a: 1, b: 2}),
    {a: 1}
  );
  t.end();
});

test('pick: should correctly return complex element', function (t) {
  t.same(
    pick(["a"])({a: [1], b: 2}),
    {a: [1]}
  );
  t.end();
});

test('pick: should keep references', function (t) {
  const arr = [1, 2, 3];
  t.strictEqual(
    pick(["a"])({a: arr, b: 2})["a"],
    arr
  );
  t.end();
});
