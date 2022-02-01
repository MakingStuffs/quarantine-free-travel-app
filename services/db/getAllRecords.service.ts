import { connectToMongo } from "lib";

const getAllRecords = async () => {
  try {
    console.log("pre");
    const { db } = await connectToMongo();
    console.log("post");
    const collection = db.collection(process.env.MONGO_COLLECTION as string);
    console.log("collection");
    const records = await collection.find().toArray();
    console.log("records");
    return records;
  } catch (e) {
    console.warn(e);
  }
};

export { getAllRecords };
