import data from "../data/combinedPages.json";
import possibleCountries from "../data/possibleCountries.json";
import fs from "fs";
import { chromium } from "playwright";
import path from "path";

export const checkQuarantineStatus = async () => {
  // Launch chrome
  const browser = await chromium.launch();
  // Log
  console.log("Checking all countries");
  // Make temp obj to compare with original
  let temp = [...possibleCountries];
  // iterate countries
  for (let i = 0; i < data.length; i++) {
    console.log(`Checking country ${data[i].country}`);
    // get a page
    let page = await browser.newPage();
    // Go to base url
    await page.goto(data[i].coronaPage);
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
    const possibleRestrictions = await page.evaluate(() => {
      const body = document.body.outerText;
      const mentionsQuarantine = /quarantine/gi.test(body);
      const withConditions =
        /quarantine (["'\(]?[a-z-_]*?["'\)]?[ ,]{1}){0,3}depending/gi.test(
          body
        );
      const closedBorders =
        /borders are closed( to all)?|closed borders/gi.test(body);
      return { closedBorders, withConditions, mentionsQuarantine };
    });

    // try find this country's entry
    const entry = temp.find((c) => c.country === data[i].country);
    // Is this country a possible place to visit
    const isPossible =
      (!possibleRestrictions.mentionsQuarantine ||
        possibleRestrictions.withConditions) &&
      !possibleRestrictions.closedBorders;
    // Get new country object
    const newCountryObject = {
      ...data[i],
      restrictionData: { ...possibleRestrictions },
    };
    // If is possible and isn't in the list already we can just push it in
    if (isPossible && !!!entry) {
      temp.push(newCountryObject);
    } else if (isPossible && !!entry) {
      // Remove the current entry
      temp = temp.filter((c) => c.country !== data[i].country);
      // push the new one
      temp.push(newCountryObject);
      // Check if the country now has restrictions and remove if so
    } else if (!isPossible && !!entry) {
      // Remove the current entry
      temp = temp.filter((c) => c.country !== data[i].country);
    }
    // Close the page
    await page.close();
  }
  // Log
  console.log("Finished checking");
  // Check if there are any changes
  if (JSON.stringify(temp) !== JSON.stringify(possibleCountries)) {
    // Log
    console.log("Changes detected, writing file");
    // Write the file
    fs.writeFileSync(
      path.resolve(__dirname, "../data/possibleCountries.json"),
      JSON.stringify(temp, null, 2)
    );
  }
  // Close the browser
  await browser.close();
};
