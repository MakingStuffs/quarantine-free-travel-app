import { ObjectId } from "mongodb";

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
