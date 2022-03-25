import { constants } from "config";
import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { CountryInterface } from "types";

const updateAllRecords = async (newRecords: CountryInterface[]) => {
  try {
    const { db } = await connectToMongo();
    const collection: Collection = db.collection(
      constants.MONGO_COLLECTION as string
    );
    // Copy the array so we can systematically add/update records
    const temp = [...newRecords];
    await collection.find().forEach((doc) => {
      // Find the existing record
      const toUpdate = temp.find((r, i) => {
        if (r.name.toLowerCase() === doc.name.toLowerCase()) {
          // Pop this from the temp array so we dont double insert
          temp.splice(i, 1);
          return true;
        } else return false;
      });
      // If it exists update it
      if (!!toUpdate) {
        collection.updateOne(
          { name: toUpdate.name },
          {
            $set: {
              urls: toUpdate.urls,
              restrictionData: toUpdate.restrictionData,
              updated: toUpdate.updated,
            },
          }
        );
      }
    });
    // insert the left overs
    if (temp.length > 0) {
      collection.insertMany(temp);
    }
    return true;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export { updateAllRecords };
