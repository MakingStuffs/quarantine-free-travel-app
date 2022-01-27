import { CombinedPageData } from "types";
import _possibleCountries from "./possibleCountries.json";
import _covidPageUrls from "./covidPageUrls.json";
import _countryPageUrls from "./countryPageUrls.json";
import _combinedPages from "./combinedPages.json";

export const possibleCountries: CombinedPageData[] = _possibleCountries;
export const combinedPages: CombinedPageData[] = _combinedPages;
export const countryPageUrls: string[] = _countryPageUrls;
export const covidPageUrls: string[] = _covidPageUrls;
