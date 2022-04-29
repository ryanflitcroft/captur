import { setupServer } from 'msw/node';
import { rest } from 'msw';
import mockData from './fixtures/mockData';

global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

const server = setupServer(
  rest.get('https://api.unsplash.com/photos/random/', (req, res, ctx) =>
    res(ctx.json(mockData))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.listen());
afterAll(() => server.close());
