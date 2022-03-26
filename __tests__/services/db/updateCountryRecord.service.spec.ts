import { updateCountryRecord } from "services/db/updateCountryRecord.service";
import { connectToMongo } from "lib/mongodb";
import { CountryInterface } from "types";
import { ObjectId } from "mongodb";

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
          findOne: () => {},
          insertOne: () => {},
        }),
      },
    });
    await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
  });
  it("will call findOne with the name of the country passes as a variable", async () => {
    const findOne = jest.fn();
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          findOne,
          insertOne: () => {},
        }),
      },
    });
    await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
    expect(findOne).toBeCalledWith({ name: COUNTRY.name });
  });

  it("will call findOneAndUpdate if findOne returns a record, and return the updated record", async () => {
    const findOne = jest.fn().mockReturnValue({
      COUNTRY_ORIGINAL,
    });
    const findOneAndUpdate = jest.fn().mockReturnValue(COUNTRY);
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          findOne,
          findOneAndUpdate,
          insertOne: () => {},
        }),
      },
    });
    const updated = await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
    expect(findOne).toBeCalledWith({ name: COUNTRY.name });
    expect(findOneAndUpdate).toBeCalledWith(
      { name: COUNTRY.name },
      {
        $set: {
          restrictionData: COUNTRY.restrictionData,
          updated: COUNTRY.updated,
        },
      }
    );
    expect(updated).toEqual(COUNTRY);
  });

  it("will call insertOne if findOne does not return a record and will return the new record", async () => {
    const findOne = jest.fn().mockReturnValue(null);
    const insertOne = jest.fn().mockReturnValue(COUNTRY);
    const findOneAndUpdate = jest.fn();
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          findOne,
          insertOne,
        }),
      },
    });
    const newRecord = await updateCountryRecord(COUNTRY);
    expect(connectToMongo).toBeCalledTimes(1);
    expect(findOne).toBeCalledTimes(1);
    expect(findOneAndUpdate).toBeCalledTimes(0);
    expect(insertOne).toBeCalledTimes(1);
    expect(newRecord).toEqual(COUNTRY);
  });
});
