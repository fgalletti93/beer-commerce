import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSearch from "../CustomSearch";
import { MemoryRouter } from "react-router-dom";

const handleSubmit = jest.fn();
let searchParams;

beforeEach(() => {
  searchParams = { order: "A-Z" };
});

describe("Custom search component", () => {
  test("Should emit slider value", () => {
    searchParams.ibu_lt = "7";
    render(
      <MemoryRouter>
        <CustomSearch onCustomParamSubmit={handleSubmit} />
      </MemoryRouter>
    );
    const sliderIBU = screen.getByLabelText("IBU");
    fireEvent.change(sliderIBU, { target: { value: "7" } });
    expect(handleSubmit).toBeCalledWith(searchParams);
  });

  test("should change dropdown option", () => {
    searchParams.order = "Z-A";
    render(
      <MemoryRouter>
        <CustomSearch onCustomParamSubmit={handleSubmit} />
      </MemoryRouter>
    );
    const dropdownOrder = screen.getByRole("combobox", "Order by:");
    fireEvent.change(dropdownOrder, { target: { value: "Z-A" } });
    expect(handleSubmit).toBeCalledWith(searchParams);
  });
});
