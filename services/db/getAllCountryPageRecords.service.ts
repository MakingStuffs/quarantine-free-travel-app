import { constants } from "config";
import { connectToMongo } from "lib";
import { CountryInterface } from "types";

const getAllCountryPageRecords = async (): Promise<CountryInterface[]> => {
  try {
    const { db } = await connectToMongo();
    const collection = db.collection(constants.MONGO_COLLECTION as string);
    const records: CountryInterface[] = (await collection
      .find({}, { projection: { name: 1, "urls.countryPage": 1, _id: 0 } })
      .toArray()) as CountryInterface[];
    return records;
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export { getAllCountryPageRecords };
