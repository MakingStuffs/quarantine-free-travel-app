import {
  FAKE_COUNTRY_PAGE,
  FAKE_COUNTRY_PAGES,
  FAKE_COUNTRY_PAGE_LENGTH,
} from "__mocks__/fakeCountryPage";
import fetch from "node-fetch";
import { constants } from "config";
import { getEntryPages } from "services/scraper/getEntryPages.service";

jest.mock("node-fetch", () => jest.fn());

describe("getEntryPages", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will call fetch with the correct urls", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    await getEntryPages(FAKE_COUNTRY_PAGES);

    for (let i = 0; i < mockFetch.mock.calls.length; i++) {
      const countryPage = FAKE_COUNTRY_PAGES.find(
        (page) => page.urls.countryPage === mockFetch.mock.calls[i][0]
      );
      expect(countryPage).toBeDefined();
    }
  });

  it("will return a list of strings which include the base url", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    const pages = await getEntryPages(FAKE_COUNTRY_PAGES);
    pages.forEach((page) => {
      expect(
        (page.urls.entryRequirementsPage as string).includes(
          constants.BASE_URL as string
        )
      );
    });
  });

  it("will return an array of the correct length", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COUNTRY_PAGE });
    const pages = await getEntryPages(FAKE_COUNTRY_PAGES);
    expect(pages).toHaveLength(FAKE_COUNTRY_PAGE_LENGTH);
  });
});
