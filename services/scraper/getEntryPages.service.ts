import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import { constants } from "config";
import { PartialCountryInterface } from "types";

export const getEntryPages = async (
  countryPages: PartialCountryInterface[]
): Promise<PartialCountryInterface[]> => {
  console.log(
    `Getting COVID 19 info page for ${countryPages.length} countries`
  );
  // Init an output array
  const output: PartialCountryInterface[] = [];
  // Iterate country links
  for (let i = 0; i < countryPages.length; i++) {
    // Get this link
    const country = { ...countryPages[i] };
    // Get a new page
    const req = await fetch(country.urls.countryPage);
    const domText = await req.text();
    const {
      window: { document },
    } = new JSDOM(domText);
    // Get the corona link
    const covidLink = (
      document.querySelector(
        '[href*="/entry-requirements"]'
      ) as HTMLAnchorElement
    )?.href;
    // Check we have a link
    if (!!covidLink) {
      const formattedLink = covidLink.includes(constants.BASE_URL as string)
        ? covidLink
        : `${constants.BASE_URL}${covidLink}`;
      // Push the link
      country.urls.entryRequirementsPage = formattedLink;
      // Push it to the array
      output.push(country);
    }
  }
  console.log("Checking for new data");
  // Return our array
  return output;
};
