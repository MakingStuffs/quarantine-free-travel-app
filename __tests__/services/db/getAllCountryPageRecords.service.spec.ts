import { getAllCountryPageRecords } from "services/db/getAllCountryPageRecords.service";
import { connectToMongo } from "lib/mongodb";
import { constants } from "config";

jest.mock("lib/mongodb", () => ({ connectToMongo: jest.fn() }));

describe("getAllCountryPageRecords", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will try to connect to mongo", async () => {
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          find: () => ({ toArray: () => [] }),
        }),
      },
    });
    await getAllCountryPageRecords();
    expect(connectToMongo).toBeCalledTimes(1);
  });

  it("will call collection with the collection defined in the env file", async () => {
    const collection = jest.fn().mockReturnValue({
      find: () => ({ toArray: () => [] }),
    });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection,
      },
    });
    await getAllCountryPageRecords();
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
  });

  it("will call the find method returned by collection", async () => {
    const find = jest.fn().mockReturnValue({ toArray: () => [] });
    const collection = jest.fn().mockReturnValue({
      find,
    });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection,
      },
    });
    await getAllCountryPageRecords();
    expect(find).toBeCalledTimes(1);
  });

  it("will call the toArray method returned by find", async () => {
    const toArray = jest.fn().mockReturnValue([]);
    const find = jest.fn().mockReturnValue({ toArray });
    const collection = jest.fn().mockReturnValue({
      find,
    });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection,
      },
    });
    await getAllCountryPageRecords();
    expect(toArray).toBeCalledTimes(1);
  });
});
