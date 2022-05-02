import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockData1, mockData2 } from './fixtures/mockData';

global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

const server = setupServer(
  rest.get('https://api.unsplash.com/photos/random/', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    if (query === 'seattle') {
      return res(ctx.json(mockData2));
    }
    return res(ctx.json(mockData1));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
