import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { CountryInterface } from "types";

const updateAllRecords = async (newRecords: CountryInterface[]) => {
  try {
    const { db } = await connectToMongo();
    const collection: Collection = await db.collection(
      process.env.MONGO_COLLECTION as string
    );
    await collection.find({}).forEach((doc) => {
      const toUpdate = newRecords.find((r) => r.name === doc.name);
      if (toUpdate) {
        collection.updateOne(
          { name: toUpdate.name },
          {
            $set: {
              restrictionData: toUpdate.restrictionData,
              updated: toUpdate.updated,
            },
          }
        );
      }
    });
    return true;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export { updateAllRecords };
