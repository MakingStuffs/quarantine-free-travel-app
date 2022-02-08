import { FAKE_COVID_PAGES, FAKE_COVID_PAGES_LENGTH } from "./fakeCovidPages";
import { FAKE_COUNTRY_PAGES } from "./fakeCountryPage";
import { getCombinedPages } from "services/scraper/getCombinedPages.service";

describe("getCombinedPages", () => {
  it("returns an array of the same length as the covid page array", () => {
    const output = getCombinedPages(FAKE_COUNTRY_PAGES, FAKE_COVID_PAGES);
    expect(output).toHaveLength(FAKE_COVID_PAGES_LENGTH);
  });

  it("returns an array of objects which adhere to the countryInterface", () => {
    const output = getCombinedPages(FAKE_COUNTRY_PAGES, FAKE_COVID_PAGES);
    output.forEach((object) => {
      expect(object.name).toBeDefined();
      expect(typeof object.name === "string").toBe(true);
      expect(object.urls).toBeDefined();
      expect(typeof object.urls === "object").toBe(true);
      expect(object.urls.covidPage).toBeDefined();
      expect(typeof object.urls.covidPage === "string").toBe(true);
      expect(object.urls.countryPage).toBeDefined();
      expect(typeof object.urls.countryPage === "string").toBe(true);
      expect(object.updated).toBeDefined();
      expect(typeof object.updated === "number").toBe(true);
    });
  });

  it("returns the correct urls", () => {
    const output = getCombinedPages(FAKE_COUNTRY_PAGES, FAKE_COVID_PAGES);
    output.forEach((object) => {
      expect(FAKE_COUNTRY_PAGES.includes(object.urls.countryPage)).toBe(true);
      expect(FAKE_COVID_PAGES.includes(object.urls.covidPage)).toBe(true);
    });
  });
});
