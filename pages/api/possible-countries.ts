import { possibleCountries } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { SimpleApiResponse } from "types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!!possibleCountries) {
    const response: SimpleApiResponse = {
      data: possibleCountries,
      message: `${possibleCountries.length} countries which may not require quarantine found.`,
      length: possibleCountries.length,
    };
    return res.status(200).json(response);
  }
};
