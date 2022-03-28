import { constants } from "config";
import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { PartialCountryInterface } from "types";

const getAllCombinedPageRecords = async (): Promise<
  PartialCountryInterface[]
> => {
  try {
    const { db } = await connectToMongo();
    const collection: Collection<PartialCountryInterface> = db.collection(
      constants.MONGO_COLLECTION as string
    );
    const records: PartialCountryInterface[] = await collection
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
    return records;
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export { getAllCombinedPageRecords };
