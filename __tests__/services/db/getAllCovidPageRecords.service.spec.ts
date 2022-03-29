import { getAllCovidPageRecords } from "services/db/getAllCovidPageRecords.service";
import { connectToMongo } from "lib/mongodb";
import { constants } from "config";
import { Collection } from "mongodb";

jest.mock("lib/mongodb", () => ({ connectToMongo: jest.fn() }));

describe("getAllCovidPageRecords", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("attempts to connect to mongo", async () => {
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection: () => ({ find: () => ({ toArray: () => [] }) }) },
    });
    await getAllCovidPageRecords();
    expect(connectToMongo).toBeCalledTimes(1);
  });

  it("will call collection with the collection set in constants", async () => {
    const collection = jest
      .fn()
      .mockReturnValue({ find: () => ({ toArray: () => [] }) });
    (connectToMongo as jest.Mock).mockReturnValue({ db: { collection } });
    await getAllCovidPageRecords();
    expect(collection).toBeCalledTimes(1);
    expect(collection).toBeCalledWith(constants.MONGO_COLLECTION);
  });

  it("will call the find method exposed by collection and provide the correct projection", async () => {
    const find = jest.fn().mockReturnValue({ toArray: () => [] });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          find,
        }),
      },
    });
    await getAllCovidPageRecords();
    expect(find).toBeCalledTimes(1);
    expect(find).toBeCalledWith(
      {},
      { projection: { name: 1, "urls.entryRequirementsPage": 1, _id: 0 } }
    );
  });

  it("will call the toArray method exposed by find", async () => {
    const toArray = jest.fn().mockReturnValue([]);
    (connectToMongo as jest.Mock).mockReturnValue({
      db: {
        collection: () => ({
          find: () => ({ toArray }),
        }),
      },
    });
    await getAllCovidPageRecords();
    expect(toArray).toBeCalledTimes(1);
  });

  it("will always return an array", async () => {
    const warn = jest
      .spyOn(global.console, "warn")
      .mockImplementationOnce(() => {});
    (connectToMongo as jest.Mock).mockReturnValueOnce({
      db: {
        collection: () => ({
          find: () => ({ toArray: () => [] }),
        }),
      },
    });
    let output = await getAllCovidPageRecords();
    expect(output).toHaveProperty("length");
    // failed call
    (connectToMongo as jest.Mock).mockReturnValueOnce({
      db: {
        collection: () => ({
          find: () => {},
        }),
      },
    });
    output = await getAllCovidPageRecords();
    expect(output).toHaveProperty("length");
    warn.mockRestore();
  });
});
