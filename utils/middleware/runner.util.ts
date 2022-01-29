import { NextApiRequest, NextApiResponse } from "next";

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  callback: any
) {
  return new Promise((resolve, reject) => {
    callback(req, res, (result: unknown) => {
      // Check if the result is an error
      if (result instanceof Error) {
        // reject the promise if so
        return reject(result);
      }
      // Otherwise resolve to the result
      return resolve(result);
    });
  });
}
