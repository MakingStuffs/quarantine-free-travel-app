import { screen, render } from "utils/testing";
import { Footer } from "@/components/Footer";

describe("<Footer />", () => {
  it("renders", () => {
    render(<Footer data-testid="footer" />);
    const element = screen.getByTestId("footer");
    expect(element).toBeInTheDocument();
  });

  it("has a link to my website", () => {
    const { baseElement } = render(<Footer data-testid="footer" />);
    const a = baseElement.querySelector('[href*="makingstuffs.co.uk"]');
    expect(a).toBeInTheDocument();
  });
});
