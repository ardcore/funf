const test = require('tape');
const { prop } = require('..');

test('prop: should extract value of a property', function (t) {
  t.strictEqual(
    prop('a')({a: 1}),
    1
  );
  t.end();
});

test('prop: should return undefined for non-existing properties', function (t) {
  t.strictEqual(
    prop('x')({a: 1}),
    undefined
  );
  t.end();
});

