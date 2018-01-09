const test = require('tape');
const { omit } = require('..');

test('omit: shouldnt return ommited element', function (t) {
  t.same(
    omit(["a"])({ a: 1, b: 2 }),
    { b: 2 }
  );
  t.end();
});

test('omit: should correctly return complex element', function (t) {
  t.same(
    omit(["a"])({ a: 1, b: [2] }),
    { b: [2] }
  );
  t.end();
});

test('omit: should keep references', function (t) {
  const arr = [1, 2, 3];
  t.strictEqual(
    omit(["a"])({ a: 1, b: arr })["b"],
    arr
  );
  t.end();
});
