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
  updated: number;
}

export interface CountryInterface extends PartialCountryInterface {
  _id?: ObjectId | undefined;
  restrictionData?: {
    mentions: RestrictionMention[];
  };
}
