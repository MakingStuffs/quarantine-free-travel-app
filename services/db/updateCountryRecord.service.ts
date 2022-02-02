import { connectToMongo } from "lib";
import { Collection } from "mongodb";
import { CountryInterface } from "types";

const updateCountryRecord = async (
  country: CountryInterface
): Promise<CountryInterface> => {
  const { db } = await connectToMongo();
  // Get collection
  const collection: Collection = db.collection(
    process.env.MONGO_COLLECTION as string
  );
  // update record and get new document
  const record = await collection.findOne({ name: country.name });

  if (record) {
    const updatedRecord = await collection.findOneAndUpdate(
      { name: country.name },
      {
        $set: {
          restrictionData: country.restrictionData,
          updated: country.updated,
        },
      }
    );
    return updatedRecord as unknown as CountryInterface;
  } else {
    const newRecord = await collection.insertOne(country);
    return newRecord as unknown as CountryInterface;
  }
};

export { updateCountryRecord };
