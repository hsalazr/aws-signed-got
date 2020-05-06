import signedGot from '../src/index';

describe('index', () => {
  it('throws on invalid URL', async () => {
    expect.assertions(1);
    await expect(signedGot('random')).rejects.toThrow('Invalid URL: random');
  });
});
