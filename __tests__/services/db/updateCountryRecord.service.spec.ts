import { updateCountryRecord } from "services/db/updateCountryRecord.service";
import { connectToMongo } from "lib/mongodb";
import { CountryInterface } from "types";
import { ObjectId } from "mongodb";
import { constants } from "config";

jest.mock("lib/mongodb", () => ({ connectToMongo: jest.fn() }));

const COUNTRY_ID: ObjectId = new ObjectId();

const COUNTRY_ORIGINAL: CountryInterface = {
  _id: COUNTRY_ID,
  name: "test country",
  restrictionData: {
    mentions: [
      {
        type: "QUARANTINE",
        conditions: true,
        matches: [],
      },
    ],
  },
  urls: {
    entryRequirementsPage: "https://gov.uk/entry",
    countryPage: "https://gov.uk/test-country",
  },
  updated: Date.now(),
};

const COUNTRY: CountryInterface = {
  _id: COUNTRY_ID,
  name: "test country",
  restrictionData: {
    mentions: [
      {
        type: "QUARANTINE",
        conditions: true,
        matches: ["Updated matched text"],
      },
    ],
  },
  urls: {
    entryRequirementsPage: "https://gov.uk/entry",
    countryPage: "https://gov.uk/test-country",
  },
  updated: Date.now(),
};

describe("updateCountryRecord", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will connect to mongo", async () => {
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          findOneAndUpdate: () => {},
          insertOne: () => {},
        }),
      },
    });
    await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
  });

  it("will call collection with the collection set in constants", async () => {
    const collection = jest.fn().mockReturnValue({
      findOneAndUpdate: () => {},
    });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection,
      },
    });
    await updateCountryRecord(COUNTRY);
    expect(collection).toBeCalledTimes(1);
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
  });

  it("will call findOneAndUpdate with the correct arguments", async () => {
    const findOneAndUpdate = jest.fn();
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          findOneAndUpdate,
          insertOne: () => {},
        }),
      },
    });
    await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
    expect(findOneAndUpdate).toBeCalledWith(
      { name: COUNTRY.name },
      {
        $set: {
          name: COUNTRY.name,
          urls: COUNTRY.urls,
          restrictionData: COUNTRY.restrictionData,
          updated: COUNTRY.updated,
        },
      },
      { returnDocument: "after", upsert: true }
    );
  });
});
