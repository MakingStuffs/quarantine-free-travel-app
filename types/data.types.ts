import { ObjectId } from "mongodb";

export type RestrictionMentionType =
  | "QUARANTINE"
  | "ISOLATION"
  | "CLOSED_BORDER";

export interface RestrictionMention {
  type: RestrictionMentionType;
  conditions: boolean;
  matches?: string[];
}

export interface PartialCountryInterface {
  name: string;
  urls: {
    entryRequirementsPage?: string;
    countryPage: string;
  };
}

export interface CountryInterface extends PartialCountryInterface {
  _id?: ObjectId | undefined;
  updated?: number;
  name: string;
  restrictionData?: {
    mentions: RestrictionMention[];
  };
}
