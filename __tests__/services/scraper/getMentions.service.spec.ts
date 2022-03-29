import { getMentions } from "services/scraper/getMentions.service";
import { RestrictionMention } from "types";
import { splitAtNewLine, trimText } from "utils";

const MENTION_NO_MATCHES_NO_COND: RestrictionMention = {
  type: "QUARANTINE",
  matches: [],
  conditions: false,
};

const MENTION_MATCHES_NO_COND: RestrictionMention = {
  type: "QUARANTINE",
  matches: ["\nHello", ". \nYo"],
  conditions: false,
};

const MENTION_MATCHES_NO_COND_LINE_SPLIT: RestrictionMention = {
  type: "QUARANTINE",
  matches: ["\nHello", ". \nYo \nNext Line"],
  conditions: false,
};

const MENTION_MATCHES_COND: RestrictionMention = {
  type: "QUARANTINE",
  matches: ["\n. Hello", ". \nYo"],
  conditions: true,
};

const MENTIONS: RestrictionMention[] = [
  MENTION_MATCHES_COND,
  MENTION_MATCHES_NO_COND,
  MENTION_NO_MATCHES_NO_COND,
];

describe("getMentions", () => {
  it("returns array of same length", () => {
    const output = getMentions(MENTIONS);
    expect(output).toHaveLength(MENTIONS.length);
  });

  it("trims new line white space and full stop from start of matches", () => {
    const output = getMentions([MENTION_MATCHES_COND]);
    const trimmed = trimText(MENTION_MATCHES_COND.matches![0]);
    expect(output).toHaveLength(1);
    expect(output[0].matches![0][0]).toBe(trimmed[0]);
  });

  it("splits matches by new line character", () => {
    const output = getMentions([MENTION_MATCHES_NO_COND_LINE_SPLIT]);
    const split = MENTION_MATCHES_NO_COND_LINE_SPLIT.matches!.reduce(
      (op: string[], line: string) => {
        let trimmed = trimText(line);
        op.push(...splitAtNewLine(trimmed));
        return op;
      },
      []
    );
    expect(output[0].matches).toHaveLength(split?.length);
  });
});
