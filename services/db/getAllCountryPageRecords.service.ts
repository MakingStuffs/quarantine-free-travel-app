import { constants } from "config";
import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { CountryInterface } from "types";

const getAllCountryPageRecords = async (): Promise<CountryInterface[]> => {
  try {
    const { db } = await connectToMongo();
    const collection: Collection<CountryInterface> = db.collection(
      constants.MONGO_COLLECTION as string
    );
    const records: CountryInterface[] = await collection
      .find({}, { projection: { name: 1, "urls.countryPage": 1, _id: 0 } })
      .toArray();
    return records;
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export { getAllCountryPageRecords };
