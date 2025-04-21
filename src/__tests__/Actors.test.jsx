import { render, screen } from "@testing-library/react";
import { beforeEach, test, expect, vi } from "vitest";
import Actors from "../pages/Actors";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: "Test Actor", movies: ["Movie 1"] }
      ]),
    })
  );
});

test("renders Actors page", async () => {
  render(
    <BrowserRouter>
      <Actors />
    </BrowserRouter>
  );
  
  expect(await screen.findByText(/Actors Page/)).toBeTruthy();
});