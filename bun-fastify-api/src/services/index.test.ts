describe('services', () => {
  const oldEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
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
      catsApi: 'https://catfact.ninja',
      boredApi: 'https://www.boredapi.com/api'
    })
  });
})