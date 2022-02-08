import { render, screen } from "utils/testing";
import { Header } from "components";

describe("<Header />", () => {
  it("renders", () => {
    render(<Header data-testid="header" />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("renders h1", () => {
    render(<Header data-testid="header" />);
    expect(
      screen.getByText(/Quarantine Free Travel Destinations/gi)
    ).toBeInTheDocument();
  });
});
