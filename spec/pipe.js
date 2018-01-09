const test = require('tape');
const { pipe } = require('..');

const add42 = (a) => a + 42;
const sub666 = (a) => a - 666;
const divBy2 = (a) => a / 2;

test('pipe: should correctly pipe functions', function (t) {
  t.equal(
    pipe(add42, sub666)(0),
    sub666(add42(0))
  );
  t.end();
});

test('pipe: should have left-to-right execution order', function (t) {
  t.equal(
    pipe(divBy2, add42)(10),
    add42(divBy2(10))
  );
  t.end();
});
