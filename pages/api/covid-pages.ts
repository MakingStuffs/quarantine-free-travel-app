import { covidPageUrls } from "data";
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

  if (!!covidPageUrls) {
    const response: SimpleApiResponse = {
      data: covidPageUrls,
      message: `${covidPageUrls.length} COVID-19 advice pages found.`,
      length: covidPageUrls.length,
    };
    return res.status(200).json(response);
  }
};
