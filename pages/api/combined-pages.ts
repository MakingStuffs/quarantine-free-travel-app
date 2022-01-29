import { combinedPages } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";

const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  // First run our middleware to allow cors
  await runMiddleware(req, res, cors);
  // Now we can return ur response
  if (!!combinedPages) {
    const response: SimpleApiResponse = {
      data: combinedPages,
      message: `${combinedPages.length} countries with COVID info pages found.`,
      length: combinedPages.length,
    };
    return res.status(200).json(response);
  }
};
