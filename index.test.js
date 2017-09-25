import test from 'ava';

import m from './';

test('Default test cases', t => {
    // Valid positive values
    t.true(m(0));
    t.true(m(1));
    t.true(m(5034));
    t.true(m(Math.pow(2, 53) - 1));
    t.true(m(1.0));
    t.true(m(5e2));
    t.true(m(9.007199254740991e15));

    // Invalid values
    t.false(m(-5034));
    t.false(m(-Math.pow(2, 53) - 1));
    t.false(m(1.1));
    t.false(m(NaN));
    t.false(m(Infinity));
    t.false(m(-Infinity));
    t.false(m(null));
    t.false(m(undefined));
    t.false(m(Math.pow(2, 53)));
    t.false(m(-Math.pow(2, 53)));
    t.false(m(Math.PI));
    t.false(m('10'));
    t.false(m(-5e2));
    t.false(m(-9.007199254740991e15));
    t.false(m(9.007199254740991e15 + 1));
    t.false(m(true));
    t.false(m(false));
    t.false(m([1]));
    t.false(m({}));
    t.false(m());
});

test.todo('Add more test cases later');
