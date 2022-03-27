import { getAllCombinedPageRecords } from "services/db/getAllCombinedPageRecords.service";
import { connectToMongo } from "lib/mongodb";
import { PartialCountryInterface } from "types";

const FIND_PROJECTION = {
  projection: {
    name: 1,
    urls: { covidPage: 1, countryPage: 1 },
    _id: 0,
  },
};

const TO_ARRAY_RETURN: PartialCountryInterface[] = [
  {
    name: "test",
    urls: {
      entryRequirementsPage: "https://gov.uk/entry",
      countryPage: "https://gov.uk/country",
    },
    updated: Date.now(),
  },
];

jest.mock("lib/mongodb", () => {
  return { connectToMongo: jest.fn() };
});

describe("getAllCombinedPageRecords", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("attempts to connect to mongo", async () => {
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection: () => ({ find: () => ({ toArray: () => [] }) }) },
    });
    await getAllCombinedPageRecords();
    expect(connectToMongo).toBeCalledTimes(1);
  });

  it("will call find with an empty object and a projection", async () => {
    const find = jest.fn().mockReturnValue({ toArray: () => [] });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection: () => ({ find }) },
    });
    await getAllCombinedPageRecords();
    expect(find).toBeCalledTimes(1);
    expect(find).toHaveBeenCalledWith({}, FIND_PROJECTION);
  });

  it("will call the toArray method returned by find", async () => {
    const toArray = jest.fn().mockReturnValue([]);
    const find = jest.fn().mockReturnValue({ toArray });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection: () => ({ find }) },
    });
    await getAllCombinedPageRecords();
    expect(find).toBeCalledTimes(1);
    expect(toArray).toBeCalledTimes(1);
  });

  it("will return the output of toArray", async () => {
    const toArray = jest.fn().mockReturnValue(TO_ARRAY_RETURN);
    const find = jest.fn().mockReturnValue({ toArray });
    (connectToMongo as jest.Mock).mockReturnValue({
      db: { collection: () => ({ find }) },
    });
    await getAllCombinedPageRecords();
    expect(find).toBeCalledTimes(1);
    expect(toArray).toBeCalledTimes(1);
  });
});
