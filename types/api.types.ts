import { CountryInterface } from "./data.types";

export type SimpleApiResponse = {
  data: string[] | CountryInterface[];
  message: string;
  length: number;
};
