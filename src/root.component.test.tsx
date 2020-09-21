import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should render the Home link", () => {
    const { getByText } = render(<Root />);
    expect(getByText("Home")).toBeInTheDocument();
  });
});
