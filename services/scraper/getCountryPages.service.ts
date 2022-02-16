import { JSDOM } from "jsdom";
import { constants } from "config";
import fetch from "node-fetch";
import { PartialCountryInterface } from "types";

const getCountryNameFromUrl = (url: string) =>
  /(?:advice\/)([a-z-]+)\/?/g.test(url)
    ? url.match(/(?:advice\/)([a-z-]+)\/?/g)![0].split("/")[1]
    : null;

// Service to scrape the BASE_URL and compile a list of URLS
const getCountryPages = async (): Promise<PartialCountryInterface[]> => {
  const { BASE_URL } = constants;
  const baseReq = await fetch(`${BASE_URL}/foreign-travel-advice`);
  const basePage = await baseReq.text();
  const baseDom = new JSDOM(basePage);
  console.log(`Getting all country info pages from ${BASE_URL}`);
  const {
    window: { document },
  } = baseDom;
  // All country page links
  const countryPageLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(
      ".govuk-link.countries-list__link"
    )
  ).reduce((output: any[], link: HTMLAnchorElement) => {
    const name = getCountryNameFromUrl(link.href);
    if (!!name) {
      output.push({
        name,
        urls: { countryPage: `${BASE_URL}${link}` },
        updated: Date.now(),
      });
    }
    return output;
  }, []);
  return countryPageLinks;
};

export { getCountryPages };
