import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import {
  CountryInterface,
  RestrictionMention,
  RestrictionMentionType,
} from "types";
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
    const req = await fetch(countries[i].urls.covidPage);
    const domText = await req.text();
    const {
      window: { document },
    } = new JSDOM(domText);
    // Check if there is mention of quarantine without variables
    const currentMentions: RestrictionMention[] = ((): RestrictionMention[] => {
      const body = document.body.textContent;
      // There is no body so just exit as we cant do anything
      if (!!!body) return [];
      // Get our condition objects
      const quarantine = getRestrictionObject(body, "QUARANTINE");
      const isolation = getRestrictionObject(body, "ISOLATION");
      const closedBorders = getRestrictionObject(body, "CLOSED_BORDER");
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
