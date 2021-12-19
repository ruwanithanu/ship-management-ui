import "@testing-library/jest-dom/extend-expect";
import 'jest-canvas-mock';
import { server } from './src/test-utils/mockServer';
import mockVessels from './src/test-utils/mocks/vessels.json';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return ({
      t: (txt) => txt,
      ready: true
    })
  }
}));

// jest.mock('@angloeastern/react-components', () => ({
//   ...jest.requireActual('@angloeastern/react-components'),
//   useMediaquery: (query) => query !== ''
// }));

jest.mock('@context/Vessels', () => ({
  ...jest.requireActual('@context/Vessels'),
  useVessels: () => ({
    state: {
      vessel: mockVessels.data[0],
      vessels: mockVessels.data
    },
    fetchVessels: () => mockVessels.data,
    setVessel: jest.fn()
  })
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }))
});
