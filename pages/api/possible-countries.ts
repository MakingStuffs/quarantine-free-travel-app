import { NextApiRequest, NextApiResponse } from "next";
import { CountryInterface, RestrictionMention } from "types";
import Cors from "cors";
import { runMiddleware } from "utils";
import { getAllRecords } from "services";

// Init our cors middleware
const cors = Cors({
  methods: ["GET", "OPTION"],
  origin: "*",
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Run our middleware
    await runMiddleware(req, res, cors);
    // Get our DB instance
    const records: CountryInterface[] =
      (await getAllRecords()) as unknown[] as CountryInterface[];
    const possible = records?.filter((record: CountryInterface) => {
      if (record.restrictionData?.mentions.length === 0) {
        return true;
      }
      const shouldShow = record.restrictionData?.mentions.reduce(
        (output: boolean, mention: RestrictionMention) => {
          if (
            mention.conditions === false &&
            mention.matches &&
            mention.matches.length > 0
          ) {
            output = false;
          }
          return output;
        },
        true
      );
      return shouldShow;
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
