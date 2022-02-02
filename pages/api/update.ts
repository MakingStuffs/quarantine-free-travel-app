import { updateAllRecords, getUpdatedList } from "services";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_SECRET } = process.env;
  const ACTION_KEY = req?.headers?.authorization?.split(" ")[1];
  if (API_SECRET === ACTION_KEY) {
    try {
      const updatedList = await getUpdatedList();

      // Update all the records
      const updated = await updateAllRecords(updatedList);
      if (updated) {
        const response: SimpleApiResponse = {
          data: [],
          message: "Successfully updated country data",
          length: 0,
        };
        res.status(200).json(response);
      } else {
        const response: SimpleApiResponse = {
          data: [],
          message: "There was a problem updating the records",
          length: 0,
        };
        res.status(500).json(response);
      }
    } catch (e) {
      console.log(e);
      const response: SimpleApiResponse = {
        data: [],
        message: "There was a problem with our server",
        length: 0,
      };
      res.status(500).json(response);
    }
  }
};

export default handler;
