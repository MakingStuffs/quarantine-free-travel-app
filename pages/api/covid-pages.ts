import { covidPageUrls } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!!covidPageUrls) {
    const response: SimpleApiResponse = {
      data: covidPageUrls,
      message: `${covidPageUrls.length} COVID-19 advice pages found.`,
      length: covidPageUrls.length,
    };
    return res.status(200).json(response);
  }
};
