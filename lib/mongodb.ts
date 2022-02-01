import { MongoClient, Db } from "mongodb";
import { constants } from "config";
import { countriesSchema } from "schemas";

const { MONGO_URI, MONGO_DB } = constants;

if (!MONGO_URI) {
  throw new Error("Mongo URI is missing");
}
if (!MONGO_DB) {
  throw new Error("Mongo Database is missing");
}

// Set some cached vars
let cachedClient: null | MongoClient = null;
let cachedDb: null | Db = null;

const connectToMongo = async (): Promise<{ db: Db; client: MongoClient }> => {
  console.log(MONGO_DB);
  // If we have cached client and DB just return them
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // Make a MongoDB client instance
  const client = new MongoClient(MONGO_URI);
  // Connect to DB
  await client.connect();
  // Get the DB
  const db: Db = client.db(MONGO_DB);

  await db.command({
    collMod: "countries",
    validator: {
      $jsonSchema: countriesSchema,
    },
  });

  // Set our cached client and db
  cachedDb = db;
  cachedClient = client;
  // return them
  return {
    db,
    client,
  };
};

export { connectToMongo };
