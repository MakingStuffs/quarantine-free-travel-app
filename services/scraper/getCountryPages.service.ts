import { chromium } from "playwright";

const BASE_URL = "https://www.gov.uk/foreign-travel-advice";

// Service to scrape the BASE_URL and compile a list of URLS
export const getCountryPages = async (): Promise<string[]> => {
  console.log(`Getting all country info pages from ${BASE_URL}`);
  // Launch chrome
  const browser = await chromium.launch();
  // get a page
  let page = await browser.newPage();
  // Go to base url
  await page.goto(BASE_URL);
  // Check if the page has loaded
  const hasLoaded = await page.evaluate(
    () => document.readyState === "complete"
  );
  // If we haven't loaded wait for the load event then use that page
  if (!hasLoaded) {
    // Wait for page load event
    [page] = await Promise.all([page.waitForEvent("load")]);
  }
  // Get links
  const countryPageLinks = await page.evaluate(() =>
    (
      Array.from(
        document.querySelectorAll(".govuk-link.countries-list__link")
      ) as HTMLAnchorElement[]
    ).map((l: HTMLAnchorElement) => l.href)
  );
  // Close the page
  await page.close();
  // Close the browser
  await browser.close();
  // Return the links
  return countryPageLinks;
};
