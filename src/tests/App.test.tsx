// App.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import * as localStorageUtils from "../utils/LocalStorage";

describe("App Component", () => {
  beforeEach(() => {
    jest
      .spyOn(localStorageUtils, "saveTransactions")
      .mockImplementation(() => {});
    jest.spyOn(localStorageUtils, "getTransactions").mockReturnValue([]);
  });

  test("should add transaction and save to localStorage", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Test Transaction" },
    });
    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "100" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Convert/i }));
    fireEvent.change(screen.getByDisplayValue("2023-09-11"), {
      target: { value: "2024-09-10" },
    }); // Update date

    fireEvent.click(screen.getByRole("button", { name: /Convert/i }));

    expect(screen.getByText(/Test Transaction/i)).toBeInTheDocument();
    expect(localStorageUtils.saveTransactions).toHaveBeenCalled();
  });
});
