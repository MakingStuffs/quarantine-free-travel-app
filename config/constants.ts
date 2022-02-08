const { MONGO_URI, MONGO_DB, BASE_URL, MONGO_COLLECTION, API_SECRET } =
  process.env;

const constants = {
  MONGO_DB,
  MONGO_URI,
  BASE_URL,
  MONGO_COLLECTION,
  API_SECRET,
};

export { constants };
