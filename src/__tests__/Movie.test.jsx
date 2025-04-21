import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Movie from "../pages/Movie";
import { BrowserRouter } from "react-router-dom";

// Mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
  };
});

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        id: 1,
        title: "Test Movie",
        time: "120min",
        genres: ["Drama"]
      }),
    })
  );
});

test("renders Movie page with content", async () => {
  render(
    <BrowserRouter>
      <Movie />
    </BrowserRouter>
  );
  
  expect(await screen.findByText(/Test Movie/)).toBeTruthy();
  expect(await screen.findByText(/120min/)).toBeTruthy();
  expect(await screen.findByText(/Drama/)).toBeTruthy();
});