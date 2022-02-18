import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import { CountryInterface, RestrictionMention } from "types";
import { getMentions, getRestrictionObject } from ".";

const getCountryRestrictions = async (
  countries: CountryInterface[]
): Promise<CountryInterface[]> => {
  // output
  let output: CountryInterface[] = [];
  // Log
  console.log("Checking all countries");
  // iterate countries
  for (let i = 0; i < countries.length; i++) {
    console.log(`Checking country ${countries[i].name}`);
    // Go to base url
    const req = await fetch(countries[i].urls.entryRequirementsPage as string);
    const domText = await req.text();
    const {
      window: { document },
    } = new JSDOM(domText);
    // Check if there is mention of quarantine without variables
    const currentMentions: RestrictionMention[] = await (async (): Promise<
      RestrictionMention[]
    > => {
      const script = Array.from(document.scripts).find(
        (script: HTMLScriptElement) =>
          script.textContent?.includes("articleBody")
      );
      const json = JSON.parse(script?.textContent ?? "");

      if (!!!json?.articleBody) return [];
      // Get the correct json
      const domText = json.articleBody;
      // There is no body so just exit as we cant do anything
      // Get our condition objects
      const quarantine = getRestrictionObject(domText, "QUARANTINE");
      const isolation = getRestrictionObject(domText, "ISOLATION");
      const closedBorders = getRestrictionObject(domText, "CLOSED_BORDER");

      return getMentions([quarantine, isolation, closedBorders]);
    })();
    // add to the array
    output.push({
      ...countries[i],
      restrictionData: { mentions: currentMentions },
    });
  }
  // Log
  console.log("Finished checking");
  // Return output
  return output;
};

export { getCountryRestrictions };
