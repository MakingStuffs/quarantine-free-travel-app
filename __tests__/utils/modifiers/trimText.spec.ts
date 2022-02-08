import { trimText } from "utils";

const LEADING_FS: string = "...Heyy";
const LEADING_NL: string = "\n\nHeyy";
const LEADING_WS: string = "   Heyy";
const LEADING_ALL: string = ".\n Heyy";

describe("trimText", () => {
  it("removes leading full stop", () => {
    const output = trimText(LEADING_FS);
    const first = output[0];
    expect(first).toBe("H");
  });

  it("removes leading new line", () => {
    const output = trimText(LEADING_NL);
    const first = output[0];
    expect(first).toBe("H");
  });

  it("removes leading white space", () => {
    const output = trimText(LEADING_WS);
    const first = output[0];
    expect(first).toBe("H");
  });

  it("removes leading white space, new line and full stop", () => {
    const output = trimText(LEADING_ALL);
    const first = output[0];
    expect(first).toBe("H");
  });
});
