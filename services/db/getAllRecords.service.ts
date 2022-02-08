import { constants } from "config";
import { connectToMongo } from "lib";

const getAllRecords = async () => {
  try {
    const { db } = await connectToMongo();
    const collection = db.collection(constants.MONGO_COLLECTION as string);
    const records = await collection.find().toArray();
    return records;
  } catch (e) {
    console.warn(e);
  }
};

export { getAllRecords };
