import { render, fireEvent } from "@testing-library/react";

import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

it("renders correctly", () => {
  const { queryByTestId } = render(<FormInput />);
  expect(queryByTestId("form-input")).toBeTruthy();
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByTestId } = render(<FormInput />);

    const formInput = queryByTestId("form-input");
    fireEvent.change(formInput, { target: { value: "test" } });

    expect(formInput.value).toBe("test");
  });
});

describe("Create event button", () => {
  describe("No data in one or some input", () => {
    it("show Error, does not send data to MongoDB", () => {
      const requestSearch = jest.fn();
      const { queryByTestId } = render(
        <FormButton requestSearch={requestSearch} />
      );
      fireEvent.click(queryByTestId("form-button"));
      expect(requestSearch).not.toHaveBeenCalled();
    });
  });
});
