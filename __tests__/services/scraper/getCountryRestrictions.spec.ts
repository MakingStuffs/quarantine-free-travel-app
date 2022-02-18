import { getCountryRestrictions } from "services/scraper/getCountryRestrictions.service";
import fetch from "node-fetch";
import { FAKE_COUNTRY_ARRAY } from "__mocks__/fakeCountryArray";
import { FAKE_COVID_PAGE_DOM } from "__mocks__/fakeCovidPageDom";
import { waitFor } from "@testing-library/react";
import { FAKE_JSON_CALL, FAKE_JSON_RESPONSE } from "__mocks__/fakeCountryPage";

jest.mock("node-fetch", () => jest.fn());

JSON.parse = jest.fn();
(JSON.parse as jest.Mock).mockReturnValue(FAKE_JSON_RESPONSE);

describe("getCountryRestrictions", () => {
  it("returns an array with a length that matches the array passed to it", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COVID_PAGE_DOM });
    const output = await getCountryRestrictions(FAKE_COUNTRY_ARRAY);
    await waitFor(() => expect(output).toHaveLength(FAKE_COUNTRY_ARRAY.length));
  });

  it("each item has all the keys needed for the country interface", async () => {
    const mockFetch = fetch as jest.Mock;
    mockFetch.mockReturnValue({ text: () => FAKE_COVID_PAGE_DOM });
    const output = await getCountryRestrictions(FAKE_COUNTRY_ARRAY);
    output.forEach((item) => {
      expect(item.name).toBeDefined();
      expect(item.restrictionData).toBeDefined();
      expect(item.restrictionData?.mentions).toBeDefined();
      expect(item.urls).toBeDefined();
      expect(item.urls.countryPage).toBeDefined();
      expect(item.urls.entryRequirementsPage).toBeDefined();
      expect(item.updated).toBeDefined();
    });
  });
});
