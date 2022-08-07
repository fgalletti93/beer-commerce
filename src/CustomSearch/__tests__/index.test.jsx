import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSearch from "../CustomSearch";

const handleSubmit = jest.fn();
let searchParams;

beforeEach(() => {
  searchParams = { order: "A-Z" };
});

describe("Custom search component", () => {
  test("Should emit slider value", () => {
    searchParams.ibu_lt = "7";
    render(<CustomSearch onCustomParamSubmit={handleSubmit} />);
    const sliderIBU = screen.getByLabelText("IBU");
    fireEvent.change(sliderIBU, { target: { value: "7" } });
    expect(handleSubmit).toBeCalledWith(searchParams);
  });

  test("should change dropdown option", () => {
    searchParams.order = "Z-A";
    render(<CustomSearch onCustomParamSubmit={handleSubmit} />);
    const dropdownOrder = screen.getByRole("combobox", "Order by:");
    fireEvent.change(dropdownOrder, { target: { value: "Z-A" } });
    expect(handleSubmit).toBeCalledWith(searchParams);
  });
});
