import { getCountryRestrictions } from "services/scraper/getCountryRestrictions.service";
import { getUpdatedList } from "services/scraper/getUpdatedList.service";
import { getEntryPages } from "services/scraper/getEntryPages.service";
import { getCountryPages } from "services/scraper/getCountryPages.service";

jest.mock("services/scraper/getCountryPages.service", () => ({
  getCountryPages: jest.fn(),
}));
jest.mock("services/scraper/getCountryRestrictions.service", () => ({
  getCountryRestrictions: jest.fn(),
}));
jest.mock("services/scraper/getEntryPages.service", () => ({
  getEntryPages: jest.fn(),
}));

const mockConsoleWarn = jest
  .spyOn(global.console, "warn")
  .mockImplementationOnce(() => {});
const mockConsoleLog = jest
  .spyOn(global.console, "log")
  .mockImplementationOnce(() => {});

describe("getUpdatedList", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("will call getCountryPages", async () => {
    const mockConsole = jest
      .spyOn(global.console, "warn")
      .mockImplementationOnce(() => {});

    (getCountryPages as jest.Mock).mockReturnValue([]);
    (getEntryPages as jest.Mock).mockReturnValue([]);
    (getCountryRestrictions as jest.Mock).mockReturnValue([]);

    await getUpdatedList();
    expect(getCountryPages).toBeCalledTimes(1);
    mockConsole.mockReset();
  });

  it("will call getEntryPages with the output from getCountryPages", async () => {
    (getCountryPages as jest.Mock).mockReturnValue(["test"]);
    (getEntryPages as jest.Mock).mockReturnValue([]);
    (getCountryRestrictions as jest.Mock).mockReturnValue([]);

    await getUpdatedList();
    expect(getEntryPages).toBeCalledTimes(1);
    expect(getEntryPages).toBeCalledWith(["test"]);
  });

  it("will call getCountryRestrictions with the output from getEntryPages", async () => {
    (getCountryPages as jest.Mock).mockReturnValue(["test"]);
    (getEntryPages as jest.Mock).mockReturnValue(["entry output"]);
    (getCountryRestrictions as jest.Mock).mockReturnValue([]);

    await getUpdatedList();
    expect(getCountryRestrictions).toBeCalledTimes(1);
    expect(getCountryRestrictions).toBeCalledWith(["entry output"]);
  });

  it("will return the output of getCountryRestrictions", async () => {
    (getCountryPages as jest.Mock).mockReturnValue(["test"]);
    (getEntryPages as jest.Mock).mockReturnValue(["entry output"]);
    (getCountryRestrictions as jest.Mock).mockReturnValue([
      "restriction output",
    ]);
    const result = await getUpdatedList();
    expect(result).toEqual(["restriction output"]);
  });
});
