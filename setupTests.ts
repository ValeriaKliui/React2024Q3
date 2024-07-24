import "@testing-library/jest-dom";
import { http, HttpResponse, delay } from "msw";
import { BASE_URL } from "./src/constants/index";
import { INIT_TEST_STATE } from "./src/__tests__/mocks";
import { setupServer } from "msw/node";

export const handlers = [
  http.get(BASE_URL, async () => {
    await delay(0);
    return HttpResponse.json(INIT_TEST_STATE);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
