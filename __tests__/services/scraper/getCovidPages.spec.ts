import {
  FAKE_COUNTRY_PAGE,
  FAKE_COUNTRY_PAGES,
  FAKE_COUNTRY_PAGE_LENGTH,
} from "./fakeCountryPage";
import fetch from "node-fetch";
import { constants } from "config";
import { getCovidPages } from "services/scraper/getCovidPages.service";

jest.mock("node-fetch", () => jest.fn());

describe("getCovidPages", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will call fetch with the correct urls", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    await getCovidPages(FAKE_COUNTRY_PAGES);

    for (let i = 0; i < mockFetch.mock.calls.length; i++) {
      expect(FAKE_COUNTRY_PAGES.includes(mockFetch.mock.calls[i][0])).toBe(
        true
      );
    }
  });

  it("will return a list of strings which include the base url", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    const pages = await getCovidPages(FAKE_COUNTRY_PAGES);
    pages.forEach((page) => {
      expect(page.includes(constants.BASE_URL as string));
    });
  });

  it("will return an array of the correct length", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    const pages = await getCovidPages(FAKE_COUNTRY_PAGES);
    expect(pages).toHaveLength(FAKE_COUNTRY_PAGE_LENGTH);
  });
});
