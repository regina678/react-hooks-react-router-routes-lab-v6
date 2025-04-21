import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import { vi } from "vitest";

// Mock any necessary API calls
beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
      ok: true,
      status: 200
    })
  );
});

test("renders app with router", () => {
  render(<RouterProvider router={router} />);
  expect(true).toBeTruthy(); // Basic smoke test
});