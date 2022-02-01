import { NextApiRequest, NextApiResponse } from "next";
import { CountryInterface } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";
import { getAllRecords } from "services";
import { constants } from "config";

// Init our cors middleware
const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(constants.MONGO_DB);
    console.log("hey");
    // Run our middleware
    await runMiddleware(req, res, cors);
    console.log("yo");
    // Get our DB instance
    const records: CountryInterface[] =
      (await getAllRecords()) as unknown[] as CountryInterface[];
    console.log(records);

    const possible = records?.filter((record: CountryInterface) => {
      if (record.restrictionData?.mentions.length === 0) {
        return true;
      } else if (record.restrictionData?.mentions.includes("CLOSED_BORDER")) {
        return false;
      } else if (record.restrictionData?.mentions.includes("QUARANTINE")) {
        return false;
      } else {
        return true;
      }
    });
    // return it
    res.status(200).json({
      data: possible,
      message: `${possible.length} countries found.`,
      length: possible.length,
    });
  } catch (e) {
    console.warn(e);
    res.status(500).json({
      data: [],
      message: `Something went wrong, try again`,
      length: 0,
    });
  }
};

export default handler;
