import { JSDOM } from "jsdom";
import { constants } from "config";
import fetch from "node-fetch";

// Service to scrape the BASE_URL and compile a list of URLS
const getCountryPages = async (): Promise<string[]> => {
  const { BASE_URL } = constants;
  const baseReq = await fetch(`${BASE_URL}/foreign-travel-advice`);
  const basePage = await baseReq.text();
  const baseDom = new JSDOM(basePage);
  console.log(`Getting all country info pages from ${BASE_URL}`);
  const {
    window: { document },
  } = baseDom;
  const countryPageLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      ".govuk-link.countries-list__link"
    )
  ).map((l: HTMLAnchorElement) => `${BASE_URL}${l.href}`);
  return countryPageLinks;
};

export { getCountryPages };
