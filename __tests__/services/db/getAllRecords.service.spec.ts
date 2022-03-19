import { getAllRecords } from "services/db/getAllRecords.service";
import { constants } from "config";
import { connectToMongo } from "lib/mongodb";

// Tell jest we want to use a mock for this lib file
jest.mock("lib/mongodb", () => {
  return {
    connectToMongo: jest.fn(),
  };
});

describe("getAllRecords", () => {
  beforeEach(() => {
    // Clear the mock after each test
    jest.clearAllMocks();
  });

  test("tries to connect to mongo db", async () => {
    // Mock our DB which should be returned from our lib
    const db = {
      collection() {
        return { find: () => ({ toArray: () => [] }) };
      },
    };
    // Tell jest to return the mocked DB
    (connectToMongo as jest.Mock).mockReturnValue({ db });
    // invoke function
    await getAllRecords();
    // Test
    expect(connectToMongo).toBeCalledTimes(1);
  });

  test("will try to get the collection set in the env file", async () => {
    const find = jest.fn().mockReturnValue({ toArray: () => [] });
    const collection = jest.fn().mockReturnValue({ find });
    const db = {
      collection,
    };
    (connectToMongo as jest.Mock).mockReturnValue({ db });
    await getAllRecords();
    expect(connectToMongo).toBeCalledTimes(1);
    expect(collection).toBeCalledTimes(1);
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
  });

  test("will call the find method returned by collection, without arguments", async () => {
    const find = jest.fn().mockReturnValue({ toArray: () => [] });
    const collection = jest.fn().mockReturnValue({ find });
    const db = {
      collection,
    };
    (connectToMongo as jest.Mock).mockReturnValue({ db });
    await getAllRecords();
    expect(connectToMongo).toBeCalledTimes(1);
    expect(collection).toBeCalledTimes(1);
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
    expect(find).toBeCalledTimes(1);
    expect(find).toBeCalledWith();
  });
});
