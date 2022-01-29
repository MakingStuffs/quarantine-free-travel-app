import { combinedPages } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (!!combinedPages) {
    const response: SimpleApiResponse = {
      data: combinedPages,
      message: `${combinedPages.length} countries with COVID info pages found.`,
      length: combinedPages.length,
    };
    return res.status(200).json(response);
  }
};
