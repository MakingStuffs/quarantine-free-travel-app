import { manualUpdate } from "services";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_SECRET } = process.env;
  const ACTION_KEY = req?.headers?.authorization?.split(" ")[1];
  if (API_SECRET === ACTION_KEY) {
    try {
      await manualUpdate();
      const response: SimpleApiResponse = {
        data: [],
        message: "Successfully updated country data",
        length: 0,
      };
      res.status(200).json(response);
    } catch (e) {
      console.warn(e);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};
