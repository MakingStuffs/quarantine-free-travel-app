import { chromium } from "playwright";

export const getCovidPages = async (
  countryPages: string[]
): Promise<string[]> => {
  console.log(
    `Getting COVID 19 info page for ${countryPages.length} countries`
  );
  // Launch chrome
  const browser = await chromium.launch();
  // Init an output array
  const output: string[] = [];
  // Iterate country links
  for (let i = 0; i < countryPages.length; i++) {
    // Get this link
    const link = countryPages[i];
    // Get a new page
    let countryPage = await browser.newPage();
    // Visit this link
    await countryPage.goto(link);
    // Check if the page has loaded
    const countryHasLoaded = await countryPage.evaluate(
      () => document.readyState === "complete"
    );
    // If we haven't loaded wait for the load event then use that page
    if (!countryHasLoaded) {
      // Wait for page load event
      [countryPage] = await Promise.all([countryPage.waitForEvent("load")]);
    }
    // Get the corona link
    const covidLink = await countryPage.evaluate(
      () =>
        (
          document.querySelector(
            '[href*="entry-requirements#entry-rules-in-response-to-coronavirus-covid-19"]'
          ) as HTMLAnchorElement
        )?.href
    );
    // Check we have a link
    if (!!covidLink) {
      // Push it to the array
      output.push(covidLink);
    }
    // close this page
    await countryPage.close();
  }
  console.log("Checking for new data");
  // Close the browser
  await browser.close();
  // Return our array
  return output;
};
