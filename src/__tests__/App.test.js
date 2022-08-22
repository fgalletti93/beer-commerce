import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { getBeers } from "../api/api";


const payloadMock = [
  {
    name: "APA Test",
    tagline: "tastes great",
    id: "78",
    image_url:
      "https://agenciamoll.com.br/o-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital/",
    abv: "3",
  },
];

jest.mock("../api/api");

describe("Test api call returning data", () => {
  it("Should render image to screen", async () => {
    getBeers.mockResolvedValueOnce({ json: () => payloadMock });
    render(<App/>);
    await waitFor(() => {
      const image = screen.getAllByRole("img");
      expect(image[0]).toBeVisible();
    });
  });
});

