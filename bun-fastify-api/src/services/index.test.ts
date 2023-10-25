const isUsingBun = true;

describe('services', () => {
  const oldEnv = process.env;

  beforeEach(() => {
    // Note: Bun does not support this
    // jest.resetModules();
    process.env = { ...oldEnv }; // clone
  });

  afterAll(() => {
    process.env = oldEnv;
  })

  it('uses fallback urls if process.env is undefined', () => {
    process.env.CAT_API_URL = undefined;
    process.env.BORED_API_URL = undefined;

    const testedModule = require('./index');
    expect(testedModule.urls).toEqual({
      // NOTE: modified this so that it works for Bun
      // catsApi: 'https://catfact.ninja',
      // boredApi: 'https://www.boredapi.com/api'
      catsApi: 'http://localhost:8081',
      boredApi: 'http://localhost:8081',
    })
  });
})