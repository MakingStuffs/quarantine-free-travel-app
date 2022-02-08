import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import { constants } from "config";

export const getCovidPages = async (
  countryPages: string[]
): Promise<string[]> => {
  console.log(
    `Getting COVID 19 info page for ${countryPages.length} countries`
  );
  // Init an output array
  const output: string[] = [];
  // Iterate country links
  for (let i = 0; i < countryPages.length; i++) {
    // Get this link
    const link = countryPages[i];
    // Get a new page
    const req = await fetch(link);
    const domText = await req.text();
    const {
      window: { document },
    } = new JSDOM(domText);
    // Get the corona link
    const covidLink = (
      document.querySelector(
        '[href*="entry-requirements#entry-rules-in-response-to-coronavirus-covid-19"]'
      ) as HTMLAnchorElement
    )?.href;
    // Check we have a link
    if (!!covidLink) {
      const formattedLink = covidLink.includes(constants.BASE_URL as string)
        ? covidLink
        : `${constants.BASE_URL}${covidLink}`;
      // Push it to the array
      output.push(formattedLink);
    }
  }
  console.log("Checking for new data");
  // Return our array
  return output;
};
