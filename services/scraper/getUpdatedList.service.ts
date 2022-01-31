import { getCombinedPages } from "./getCombinedPages.service";
import { getCountryRestrictions } from "./getCountryRestrictions.service";
import { getCovidPages } from "./getCovidPages.service";
import { getCountryPages } from "./getCountryPages.service";
import { CountryInterface } from "types";
// at 8am everyday
export const getUpdatedList = async (): Promise<CountryInterface[]> => {
  try {
    console.log("Refreshing data");
    // Get our list of possible countries
    const countryPages = await getCountryPages();
    const covidPages = await getCovidPages(countryPages);
    const combinedPages = getCombinedPages(countryPages, covidPages);
    const countries = await getCountryRestrictions(combinedPages);
    return countries;
  } catch (e) {
    console.log(e);
    return [];
  }
};
