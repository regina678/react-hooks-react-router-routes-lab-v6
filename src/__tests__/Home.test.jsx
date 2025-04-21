import { render, screen } from "@testing-library/react";
import { beforeEach, test, expect, vi } from "vitest";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, title: "Test Movie" }
      ]),
    })
  );
});

test("renders Home page with content", async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  expect(await screen.findByText(/Home Page/)).toBeTruthy();
  expect(await screen.findByText(/Test Movie/)).toBeTruthy();
});