import { chromium } from "playwright";
import {
  CountryInterface,
  RestrictionMention,
  RestrictionMentionType,
} from "types";

const getCountryRestrictions = async (countries: CountryInterface[]) => {
  // Launch chrome
  const browser = await chromium.launch();
  // output
  let output: CountryInterface[] = [];
  // Log
  console.log("Checking all countries");
  // iterate countries
  for (let i = 0; i < countries.length; i++) {
    console.log(`Checking country ${countries[i].name}`);
    // get a page
    let page = await browser.newPage();
    // Go to base url
    await page.goto(countries[i].urls.covidPage);
    // Check if the page has loaded
    const hasLoaded = await page.evaluate(
      () => document.readyState === "complete"
    );
    // If we haven't loaded wait for the load event then use that page
    if (!hasLoaded) {
      // Wait for page load event
      [page] = await Promise.all([page.waitForEvent("load")]);
    }

    page.on("console", (msg) => console.log(msg));
    // Check if there is mention of quarantine without variables
    const currentMentions: (RestrictionMentionType | RestrictionMention)[] =
      await page.evaluate(
        (): (RestrictionMentionType | RestrictionMention)[] => {
          const body = document.body.outerText;

          const mentionsQuarantine = /quarantine/gi.test(body);

          const withConditions =
            /quarantine (["'\(]?[a-z-_]*?["'\)]?[ ,]{1}){0,3}depending/gi.test(
              body
            );
          const closedBorders =
            /borders are closed( to all)?|closed borders/gi.test(body);

          const mentions: (RestrictionMentionType | RestrictionMention)[] = [];

          if (closedBorders) {
            mentions.push("CLOSED_BORDER" as RestrictionMentionType);
          }

          if (withConditions) {
            mentions.push({
              type: "QUARANTINE" as RestrictionMentionType,
              conditions: true,
            });
            return mentions;
          }

          return mentionsQuarantine
            ? [...mentions, "QUARANTINE" as RestrictionMentionType]
            : mentions;
        }
      );
    // Close the page
    await page.close();
    // add to the array
    output.push({
      ...countries[i],
      restrictionData: { mentions: currentMentions },
    });
  }
  // Log
  console.log("Finished checking");
  // Close the browser
  await browser.close();
  // Return output
  return output;
};

export { getCountryRestrictions };
