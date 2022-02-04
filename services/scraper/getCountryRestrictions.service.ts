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

          const quarantine = {
            matches: body.match(
              /(?:\.|\n)+([\w\d\s'",:\-_’]*quarantine[\w\d\s,":\-_’]*)(?:\.|\n)+/gi
            ),
            withConditions: /quarantine[\w\s]{0,10}depending/gim.test(body),
          };

          const isolation = {
            matches: body.match(
              /(?:\.|\n)+([\w\d\s'",:\-_’]*self-?isolate|self-?isolation[\w\d\s,":\-_’]*)(?:\.|\n)+/gi
            ),
            withConditions:
              /(?:self-?isolate|self-?isolation)[\w\s]{0,10}depending/gim.test(
                body
              ),
          };

          const closedBorders =
            /borders are closed( to all)?|closed borders/gi.test(body);

          const mentions: (RestrictionMentionType | RestrictionMention)[] = [];

          if (closedBorders) {
            mentions.push("CLOSED_BORDER" as RestrictionMentionType);
          }

          if (quarantine.matches && quarantine.withConditions) {
            mentions.push({
              type: "QUARANTINE" as RestrictionMentionType,
              conditions: true,
              matches: quarantine.matches,
            });
          } else if (quarantine.matches) {
            mentions.push("QUARANTINE");
          }

          if (isolation.matches && isolation.withConditions) {
            mentions.push({
              type: "ISOLATION" as RestrictionMentionType,
              conditions: true,
              matches: isolation.matches,
            });
          } else if (isolation.matches) {
            mentions.push("ISOLATION");
          }

          return mentions;
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
