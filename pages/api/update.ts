import { getUpdatedList, updateCountryRecord } from "services";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_SECRET } = process.env;
  const ACTION_KEY = req?.headers?.authorization?.split(" ")[1];
  if (API_SECRET === ACTION_KEY) {
    try {
      const updatedList = await getUpdatedList();
      const promises = updatedList.map((country) =>
        updateCountryRecord(country)
      );
      await Promise.all(promises);
      const response: SimpleApiResponse = {
        data: [],
        message: "Successfully updated country data",
        length: 0,
      };
      res.status(200).json(response);
    } catch (e) {
      console.log(e);
    }
  }
};

export default handler;
