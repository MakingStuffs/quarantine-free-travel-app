import { countryPageUrls } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!!countryPageUrls) {
    const response: SimpleApiResponse = {
      data: countryPageUrls,
      message: `${countryPageUrls.length} countries found.`,
      length: countryPageUrls.length,
    };
    return res.status(200).json(response);
  }
};
