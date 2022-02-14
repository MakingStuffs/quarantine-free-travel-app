import { getCountryRestrictions } from "./getCountryRestrictions.service";
import { getEntryPages } from "./getEntryPages.service";
import { getCountryPages } from "./getCountryPages.service";
import { CountryInterface } from "types";
// at 8am everyday
export const getUpdatedList = async (): Promise<CountryInterface[]> => {
  try {
    console.log("Refreshing data");
    // Get our list of possible countries
    const countryPages = await getCountryPages();
    const withEntryPages = await getEntryPages(countryPages);
    const countries = await getCountryRestrictions(withEntryPages);
    return countries;
  } catch (e) {
    console.log(e);
    return [];
  }
};
