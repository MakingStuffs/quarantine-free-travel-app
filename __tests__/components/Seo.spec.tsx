import { getAllMeta, render, screen } from "utils/testing";
import { Seo } from "components";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe("<Seo />", () => {
  it("renders with tags", () => {
    const { baseElement } = render(<Seo data-testid="seo" />, {
      container: document.head,
    });
    const tags = getAllMeta(baseElement);
    for (let key in tags) {
      expect(tags[key]).toBeInTheDocument();
    }
  });
});
