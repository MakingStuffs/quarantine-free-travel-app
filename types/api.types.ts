import { CombinedPageData } from "./data.types";

export type SimpleApiResponse = {
  data: string[] | CombinedPageData[];
  message: string;
  length: number;
};
