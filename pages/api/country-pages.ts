import { countryPageUrls } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";

const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  if (!!countryPageUrls) {
    const response: SimpleApiResponse = {
      data: countryPageUrls,
      message: `${countryPageUrls.length} countries found.`,
      length: countryPageUrls.length,
    };
    return res.status(200).json(response);
  }
};
