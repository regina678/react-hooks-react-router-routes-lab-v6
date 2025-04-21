import { render, screen } from "@testing-library/react";
import { beforeEach, test, expect, vi } from "vitest";
import Directors from "../pages/Directors";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: "Test Director", movies: ["Movie 1"] }
      ]),
    })
  );
});

test("renders Directors page with content", async () => {
  render(
    <BrowserRouter>
      <Directors />
    </BrowserRouter>
  );
  
  expect(await screen.findByText(/Directors Page/)).toBeTruthy();
  expect(await screen.findByText(/Test Director/)).toBeTruthy();
});