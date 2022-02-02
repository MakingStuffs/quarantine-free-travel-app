import { NextApiRequest, NextApiResponse } from "next";
import { CountryInterface, SimpleApiResponse } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";
import { getAllCovidPageRecords } from "services";

const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  try {
    const records: CountryInterface[] =
      (await getAllCovidPageRecords()) as unknown[] as CountryInterface[];
    const response: SimpleApiResponse = {
      data: records,
      message: `${records.length} COVID 19 pages found.`,
      length: records.length,
    };
    // return it
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    const response: SimpleApiResponse = {
      data: [],
      message: "There was a problem with our server",
      length: 0,
    };
    res.status(500).json(response);
  }
};

export default handler;
