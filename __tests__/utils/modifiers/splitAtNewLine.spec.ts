import { splitAtNewLine } from "utils";

const SINGLE_NEW_LINE: string =
  "This has a single new line. \nThis is the second line.";
const MULTIPLE_NEW_LINE_IN_A_ROW: string =
  "This has a single new line. \n\n\nThis is the second line.";
const MULTIPLE_LINES_AND_NEW_LINES: string =
  "This has a single new line. \n\n\nThis is the second line.\n\nThis is the second line.";

describe("splitAtNewLine", () => {
  it("correctly splits with a single new line", () => {
    const output = splitAtNewLine(SINGLE_NEW_LINE);
    expect(typeof output === "object").toBeTruthy();
    expect(output).toHaveLength(2);
  });

  it("correctly splits with multiple new lines in a row", () => {
    const output = splitAtNewLine(MULTIPLE_NEW_LINE_IN_A_ROW);
    expect(typeof output === "object").toBeTruthy();
    expect(output).toHaveLength(2);
  });

  it("correctly splits with multiple lines and new lines in a row", () => {
    const output = splitAtNewLine(MULTIPLE_LINES_AND_NEW_LINES);
    expect(typeof output === "object").toBeTruthy();
    expect(output).toHaveLength(3);
  });
});
