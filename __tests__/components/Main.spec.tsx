import { render, screen } from "utils/testing";
import { Main } from "components";

describe("<Main />", () => {
  it("renders", () => {
    render(<Main data-testid="main"></Main>);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
  it("renders children", () => {
    render(
      <Main data-testid="main">
        <p>Child</p>
      </Main>
    );
    expect(screen.getByText(/child/gi)).toBeInTheDocument();
  });
});
