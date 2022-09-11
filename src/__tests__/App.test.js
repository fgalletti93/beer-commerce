import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { getBeers } from "../api/api";
import { beerFactory } from "../utils/factory/beers";


const payloadMock = [
  beerFactory()
];

jest.mock("../api/api");

describe("Test api call returning data", () => {
  it("Should render image to screen", async () => {
    getBeers.mockResolvedValueOnce({ json: () => payloadMock });
    await render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      const image = screen.getAllByRole("img");
      expect(image[0]).toBeVisible();
    });
  });
});

