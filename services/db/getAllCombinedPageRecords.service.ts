import { constants } from "config";
import { connectToMongo } from "lib";
import { PartialCountryInterface } from "types";

const getAllCombinedPageRecords = async (): Promise<
  PartialCountryInterface[]
> => {
  try {
    const { db } = await connectToMongo();
    const collection = db.collection(constants.MONGO_COLLECTION as string);
    const records = await collection
      .find(
        {},
        {
          projection: {
            name: 1,
            urls: { covidPage: 1, countryPage: 1 },
            _id: 0,
          },
        }
      )
      .toArray();
    return records as unknown as PartialCountryInterface[];
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export { getAllCombinedPageRecords };
