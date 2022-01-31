import { ObjectId } from "mongodb";

export type CombinedPageData = {
  country: string;
  coronaPage: string;
  countryPage: string;
};

export type PossibleCountriesData = {
  country: string;
  coronaPage: string;
  countryPage: string;
  restrictionData: {
    closedBorders: boolean;
    withConditions: boolean;
    mentionsQuarantine: boolean;
  };
};

export type RestrictionMentionType =
  | "QUARANTINE"
  | "ISOLATION"
  | "CLOSED_BORDER";

export interface RestrictionMention {
  type: RestrictionMentionType;
  conditions: boolean;
}

export interface CountryInterface {
  _id?: ObjectId | undefined;
  updated?: number;
  name: string;
  urls: {
    covidPage: string;
    countryPage: string;
  };
  restrictionData?: {
    mentions: (RestrictionMentionType | RestrictionMention)[];
  };
}
