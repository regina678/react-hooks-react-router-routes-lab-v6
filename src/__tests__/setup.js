import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock fetch globally
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
    ok: true,
    status: 200
  })
);

beforeEach(() => {
  fetch.mockClear();
});

afterEach(() => {
  vi.clearAllMocks();
});