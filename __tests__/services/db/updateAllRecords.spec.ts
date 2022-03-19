import { constants } from "config";
import { connectToMongo } from "lib/mongodb";
import { updateAllRecords } from "services/db/updateAllRecords.service";
import { CountryInterface } from "types";

jest.mock("lib/mongodb", () => {
  return {
    connectToMongo: jest.fn(),
  };
});

describe("updateAllRecords", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("attempts to connect to mongo", async () => {
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => {
          return {
            find: () => [],
          };
        },
      },
    });
    await updateAllRecords([]);
    expect(connectToMongo).toBeCalledTimes(1);
  });

  it("calls collection with the value in the ENV", async () => {
    const find = jest.fn().mockReturnValue([]);
    const collection = jest.fn().mockReturnValue({ find });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection },
    });
    await updateAllRecords([]);
    expect(collection).toBeCalledTimes(1);
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
  });

  it("calls find on collection without arguments", async () => {
    const find = jest.fn().mockReturnValue([]);
    const collection = jest.fn().mockReturnValue({ find });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection },
    });
    await updateAllRecords([]);
    expect(find).toBeCalledTimes(1);
  });

  it("will call the updateOne method on collection if there is an object with a name that matches the find return value", async () => {
    const find = jest.fn().mockReturnValue([{ name: "hello" }]);
    const updateOne = jest.fn();
    const collection = jest.fn().mockReturnValue({ find, updateOne });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection },
    });
    await updateAllRecords([{ name: "hello" } as CountryInterface]);
    expect(find).toBeCalledTimes(1);
    expect(updateOne).toBeCalledTimes(1);
  });

  it("will call the insertMany method on collection if there is a new entry passed to it", async () => {
    const find = jest.fn().mockReturnValue([{ name: "hello" }]);
    const insertMany = jest.fn();
    const collection = jest.fn().mockReturnValue({ find, insertMany });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection },
    });
    await updateAllRecords([{ name: "bye bye" } as CountryInterface]);
    expect(insertMany).toBeCalledTimes(1);
  });

  it("will return true if there are no errors", async () => {
    const find = jest.fn().mockReturnValue([{ name: "hello" }]);
    const insertMany = jest.fn();
    const collection = jest.fn().mockReturnValue({ find, insertMany });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection },
    });
    const output = await updateAllRecords([
      { name: "bye bye" } as CountryInterface,
    ]);
    expect(output).toBe(true);
  });
});
