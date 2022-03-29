import { getRestrictionObject } from "services/scraper/getRestrictionObject.service";

const MENTIONS_QUARANTINE: string =
  "<p>This page is one which has quarantine and you must follow it</p>";

const MENTIONS_QUARANTINE_COND: string =
  "<p>This page is one which has quarantine which is depending on your vaccination status</p>";

const MENTIONS_ISOLATION: string =
  "<p>This page is one which has self isolation and you must follow it</p>";

const MENTIONS_ISOLATION_COND: string =
  "<p>This page is one which has self isolation which is depending on your vaccination status</p>";

const MENTIONS_CLOSED_BORDER: string =
  "<p>This page is one which has closed borders and you must follow it</p>";

const MENTIONS_CLOSED_BORDER_COND: string =
  "<p>This page is one which has closed borders which is depending on your vaccination status</p>";

const NO_MENTIONS: string =
  "<p>This does not mention any of the words we are looking for.</p>";

describe("getRestrictionObject", () => {
  it("correctly identifies type", () => {
    const quarantine = getRestrictionObject(MENTIONS_QUARANTINE, "QUARANTINE");
    const isolation = getRestrictionObject(MENTIONS_ISOLATION, "ISOLATION");
    const closed = getRestrictionObject(
      MENTIONS_CLOSED_BORDER,
      "CLOSED_BORDER"
    );
    const quarantineConditions = getRestrictionObject(
      MENTIONS_QUARANTINE_COND,
      "QUARANTINE"
    );
    const isolationConditions = getRestrictionObject(
      MENTIONS_ISOLATION_COND,
      "ISOLATION"
    );
    const closedConditions = getRestrictionObject(
      MENTIONS_CLOSED_BORDER_COND,
      "CLOSED_BORDER"
    );
    const quarantineNone = getRestrictionObject(NO_MENTIONS, "QUARANTINE");
    const isolationNone = getRestrictionObject(NO_MENTIONS, "ISOLATION");
    const closedNone = getRestrictionObject(NO_MENTIONS, "CLOSED_BORDER");

    // Types
    expect(quarantine.type).toBe("QUARANTINE");
    expect(isolation.type).toBe("ISOLATION");
    expect(closed.type).toBe("CLOSED_BORDER");
    expect(quarantineNone.type).toBe("QUARANTINE");
    expect(isolationNone.type).toBe("ISOLATION");
    expect(closedNone.type).toBe("CLOSED_BORDER");
    expect(quarantineConditions.type).toBe("QUARANTINE");
    expect(isolationConditions.type).toBe("ISOLATION");
    expect(closedConditions.type).toBe("CLOSED_BORDER");
  });

  it("correctly identifies conditions", () => {
    const quarantine = getRestrictionObject(MENTIONS_QUARANTINE, "QUARANTINE");
    const isolation = getRestrictionObject(MENTIONS_ISOLATION, "ISOLATION");
    const closed = getRestrictionObject(
      MENTIONS_CLOSED_BORDER,
      "CLOSED_BORDER"
    );
    const quarantineConditions = getRestrictionObject(
      MENTIONS_QUARANTINE_COND,
      "QUARANTINE"
    );
    const isolationConditions = getRestrictionObject(
      MENTIONS_ISOLATION_COND,
      "ISOLATION"
    );
    const closedConditions = getRestrictionObject(
      MENTIONS_CLOSED_BORDER_COND,
      "CLOSED_BORDER"
    );
    const quarantineNone = getRestrictionObject(NO_MENTIONS, "QUARANTINE");
    const isolationNone = getRestrictionObject(NO_MENTIONS, "ISOLATION");
    const closedNone = getRestrictionObject(NO_MENTIONS, "CLOSED_BORDER");

    // No conditions
    expect(quarantine.conditions).toBe(false);
    expect(isolation.conditions).toBe(false);
    expect(closed.conditions).toBe(false);
    // Conditions
    expect(quarantineConditions.conditions).toBe(true);
    expect(isolationConditions.conditions).toBe(true);
    expect(closedConditions.conditions).toBe(true);
    // no mentions
    expect(quarantineNone.conditions).toBeFalsy();
    expect(isolationNone.conditions).toBeFalsy();
    expect(closedNone.conditions).toBeFalsy();
  });

  it("correctly identifies matches", () => {
    const quarantine = getRestrictionObject(MENTIONS_QUARANTINE, "QUARANTINE");
    const isolation = getRestrictionObject(MENTIONS_ISOLATION, "ISOLATION");
    const closed = getRestrictionObject(
      MENTIONS_CLOSED_BORDER,
      "CLOSED_BORDER"
    );
    const quarantineNone = getRestrictionObject(NO_MENTIONS, "QUARANTINE");
    const isolationNone = getRestrictionObject(NO_MENTIONS, "ISOLATION");
    const closedNone = getRestrictionObject(NO_MENTIONS, "CLOSED_BORDER");
    const quarantineConditions = getRestrictionObject(
      MENTIONS_QUARANTINE_COND,
      "QUARANTINE"
    );
    const isolationConditions = getRestrictionObject(
      MENTIONS_ISOLATION_COND,
      "ISOLATION"
    );
    const closedConditions = getRestrictionObject(
      MENTIONS_CLOSED_BORDER_COND,
      "CLOSED_BORDER"
    );

    // Matches
    expect(quarantine.matches).toHaveLength(1);
    expect(isolation.matches).toHaveLength(1);
    expect(closed.matches).toHaveLength(1);
    expect(quarantineConditions.matches).toHaveLength(1);
    expect(isolationConditions.matches).toHaveLength(1);
    expect(closedConditions.matches).toHaveLength(1);

    // No matches
    expect(quarantineNone.matches).toHaveLength(0);
    expect(isolationNone.matches).toHaveLength(0);
    expect(closedNone.matches).toHaveLength(0);
  });
});
