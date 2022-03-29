import { getCountryPages } from "services/scraper/getCountryPages.service";
import fetch from "node-fetch";
import { constants } from "config";
import { FAKE_DOM, FAKE_DOM_PAGE_LENGTH } from "__mocks__/fakeDom";

jest.mock("node-fetch", () => jest.fn());

describe("getCountryPages", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("makes a fetch request to BASE_URL/foreign-travel-advice", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_DOM });
    const pages = await getCountryPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${constants.BASE_URL}/foreign-travel-advice`
    );
    expect(pages).toHaveLength(FAKE_DOM_PAGE_LENGTH);
  });
  it("returns an array with the correct length", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_DOM });
    const pages = await getCountryPages();
    expect(pages).toHaveLength(FAKE_DOM_PAGE_LENGTH);
  });

  it("returns an array of partial country objects", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_DOM });
    const pages = await getCountryPages();
    pages.forEach((page) => {
      expect(typeof page.name === "string").toBe(true);
      expect(page.name.length).toBeGreaterThan(0);
      expect(typeof page.name === "string").toBe(true);
      expect(page.urls).toBeDefined();
      expect(page.urls.countryPage).toBeDefined();
      expect(typeof page.urls.countryPage === "string").toBe(true);
    });
  });
});
