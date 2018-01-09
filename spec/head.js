const test = require('tape');
const { head } = require('..');

test('head: should return first element', function (t) {
  t.equal(
    head([1, 2, 3]),
    1
  );
  t.end();
});

test('head: should return undefined with empty array', function (t) {
  t.equal(
    head([]),
    undefined
  );
  t.end();
});
