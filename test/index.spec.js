import test from 'ava';
import signedGot from '../index';

test('Missing `url` argument', async t => {
  const result = signedGot();
  await t.throwsAsync(result, 'Missing `url` argument');
});

test('Invalid URL', async t => {
  const result = signedGot('random');
  await t.throwsAsync(result, 'Invalid URL: random');
});
