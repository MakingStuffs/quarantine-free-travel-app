import { constants } from "config";
import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { CountryInterface } from "types";

const getAllRecords = async (): Promise<CountryInterface[]> => {
  try {
    const { db } = await connectToMongo();
    const collection: Collection<CountryInterface> = db.collection(
      constants.MONGO_COLLECTION as string
    );
    const records = await collection.find().toArray();
    return records;
  } catch (e) {
    console.warn(e);
    return [];
  }
};

export { getAllRecords };
