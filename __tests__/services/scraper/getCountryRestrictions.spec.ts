import { getCountryRestrictions } from "services/scraper/getCountryRestrictions.service";
import fetch from "node-fetch";
import { FAKE_COUNTRY_ARRAY } from "./fakeCountryArray";
import { FAKE_COVID_PAGE_DOM } from "./fakeCovidPageDom";

jest.mock("node-fetch", () => jest.fn());

describe("getCountryRestrictions", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("returns an array with a length that matches the array passed to it", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COVID_PAGE_DOM });
    const output = await getCountryRestrictions(FAKE_COUNTRY_ARRAY);
    expect(output).toHaveLength(FAKE_COUNTRY_ARRAY.length);
  });
});
