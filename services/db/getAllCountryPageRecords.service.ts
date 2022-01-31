import { connectToMongo } from "lib";

const getAllCountryPageRecords = async () => {
  try {
    const { db } = await connectToMongo();
    const collection = db.collection(process.env.MONGO_COLLECTION as string);
    const records = await collection
      .find({}, { projection: { name: 1, "urls.countryPage": 1, _id: 0 } })
      .toArray();
    return records;
  } catch (e) {
    console.warn(e);
  }
};

export { getAllCountryPageRecords };
