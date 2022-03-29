import { constants } from "config";
import { connectToMongo } from "lib";
import { Collection, ModifyResult } from "mongodb";
import { CountryInterface } from "types";

const updateCountryRecord = async (
  country: CountryInterface
): Promise<CountryInterface | null> => {
  try {
    const { db } = await connectToMongo();
    // Get collection
    const collection: Collection<CountryInterface> = db.collection(
      constants.MONGO_COLLECTION as string
    );
    // update record and get new document
    const record: ModifyResult<CountryInterface> =
      await collection.findOneAndUpdate(
        { name: country.name },
        {
          $set: {
            name: country.name,
            urls: country.urls,
            restrictionData: country.restrictionData,
            updated: country.updated,
          },
        },
        { returnDocument: "after", upsert: true }
      );

    return record as unknown as CountryInterface;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export { updateCountryRecord };
