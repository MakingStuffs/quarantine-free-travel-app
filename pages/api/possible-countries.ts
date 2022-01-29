import { possibleCountries } from "data";
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

  if (!!possibleCountries) {
    const response: SimpleApiResponse = {
      data: possibleCountries,
      message: `${possibleCountries.length} countries which may not require quarantine found.`,
      length: possibleCountries.length,
    };
    return res.status(200).json(response);
  }
};
