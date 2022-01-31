import { NextApiRequest, NextApiResponse } from "next";
import { CountryInterface } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";
import { getAllCombinedPageRecords } from "services";

const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  try {
    const records: CountryInterface[] =
      (await getAllCombinedPageRecords()) as unknown[] as CountryInterface[];
    // return it
    res.status(200).json({
      data: records,
      message: `${records.length} COVID 19 and country pages found.`,
      length: records.length,
    });
  } catch (e) {
    console.log(e);
  }
};

export default handler;
