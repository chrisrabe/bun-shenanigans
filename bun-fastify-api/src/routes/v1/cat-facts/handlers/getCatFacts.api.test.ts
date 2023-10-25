import { mock, spec } from "pactum";
import build from "../../../../api";
import { FastifyInstance } from "fastify";

let app: FastifyInstance;

describe('getCatFacts', () => {
  beforeAll(async () => {
    await mock.start(8081);
    app = await build();

    try {
      await app.listen({
        port: 8080,
        host: '0.0.0.0'
      })
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
  });

  afterAll(async () => {
    await mock.stop();
    app.close();
  });

  it('should return data', async () => {
    const mockCatFact = {"fact":"Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.","length":110}
    const mockBoredActivity = {"activity":"Learn the periodic table","type":"education","participants":1,"price":0,"link":"https://en.wikipedia.org/wiki/Periodic_table","key":"3621244","accessibility":0.6}

    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/fact',
      },
      response: {
        status: 200,
        body: mockCatFact
      }
    });

    mock.addInteraction({
      request: {
        method: 'GET',
        path: '/activity',
      },
      response: {
        status: 200,
        body: mockBoredActivity
      }
    });

    await spec()
      .get('http://0.0.0.0:8080/api/v1/cat-facts')
      .expectStatus(200)
      .expectJson({
        catFact: mockCatFact,
        activity: mockBoredActivity
      })
  })
})