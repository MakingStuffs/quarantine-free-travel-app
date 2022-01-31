import { CountryInterface } from "types";

export const getCountryNameFromUrl = (url: string) =>
  /(?:advice\/)([a-z-]+)\/?/g.test(url)
    ? url.match(/(?:advice\/)([a-z-]+)\/?/g)![0].split("/")[1]
    : null;

export const getCombinedPages = (
  countryPageUrls: string[],
  covidPages: string[]
): CountryInterface[] =>
  covidPages.reduce((op: CountryInterface[], covidPage: any) => {
    const name = getCountryNameFromUrl(covidPage) as string;
    const countryPage = countryPageUrls.find((p) => p.includes(name));
    if (!!countryPage && !!name) {
      op.push({
        name,
        urls: { covidPage, countryPage },
        updated: Date.now(),
      });
    }
    return op;
  }, []);
