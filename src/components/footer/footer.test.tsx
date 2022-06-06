import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./";

describe("Footers tests", () => {
  test("Footer was rendered?", () => {
    render(<Footer />);
    const content = screen.getByText("created by");
    expect(content).toBeInTheDocument();
  });
});
