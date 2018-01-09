const test = require('tape');
const { compose } = require('..');

const add42 = (a) => a + 42;
const sub666 = (a) => a - 666;
const divBy2 = (a) => a / 2;

test('compose: should correctly compose functions', function (t) {
  t.equal(
    compose(add42, sub666)(0),
    sub666(add42(0))
  );
  t.end();
});

test('compose: should have right-to-left execution order', function (t) {
  t.equal(
    compose(add42, divBy2)(10),
    add42(divBy2(10))
  );
  t.end();
});
