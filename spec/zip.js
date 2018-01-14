const test = require('tape');
const { zip } = require('..');

test('zip: should combine arrays in touples', function (t) {
  t.same(
    zip([1, 2, 3], ["a", "b", "c"]),
    [[1, "a"], [2, "b"], [3, "c"]]
  );
  t.end();
});

test('zip: should fill right-side gaps with undefined', function (t) {
  t.same(
    zip([1, 2, 3], ["a", "b"]),
    [[1, "a"], [2, "b"], [3, undefined]]
  );
  t.end();
});

test('zip: should truncate length to the left-side array', function (t) {
  t.same(
    zip([1, 2], ["a", "b", "c"]),
    [[1, "a"], [2, "b"]]
  );
  t.end();
});
