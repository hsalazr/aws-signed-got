import test from 'ava';
import greet from '../src/index';

test('It works', t => {
  const response = greet();
  const expected = 'hello';
  t.is(expected, response);
});
