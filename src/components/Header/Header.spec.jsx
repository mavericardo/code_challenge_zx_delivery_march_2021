import { render, screen } from "@testing-library/react";
import Header from "./index";

jest.mock("react-router-dom", () => ({
  Link: "mock-link",
  Route: ({ children, path }) => children({ match: path === "/" }),
}));

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Zé Delivery")).toBeInTheDocument();
  });
});
