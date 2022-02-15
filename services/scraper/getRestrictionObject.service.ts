import { RestrictionMention } from "types";

const getRestrictionObject = (
  domText: string,
  type: "QUARANTINE" | "ISOLATION" | "CLOSED_BORDER"
): RestrictionMention => {
  let mainRegex, conditionRegex;
  switch (type) {
    case "QUARANTINE":
      mainRegex =
        /(?:\.|\n)?([\w\d\s'",:\-_’]*quarantine[\w\d\s,":\-_’]*)(?:\.|\n)?/gi;
      conditionRegex =
        /unvaccinated[\w\s,-_'"]+quarantined?|quarantined?[\w\s,-_'"]+(?:depending|unless)/gi;
      break;
    case "ISOLATION":
      mainRegex =
        /(?:\.|\n)?([\w\d\s'",:\-_’]*self(-| ){1}(isolation|isolate){1}[\w\d\s,":\-_’]*)(?:\.|\n)?/gi;
      conditionRegex =
        /unvaccinated[\w\s,-_'"]+self(-| ){1}(isolation|isolate){1}|self(-| ){1}(isolation|isolate){1}[\w\s]+(?:depending|unless)/gi;
      break;
    case "CLOSED_BORDER":
      mainRegex =
        /(?:\.|\n)?([\w\d\s'",:\-_’]*closed borders?[\w\d\s,":\-_’]*)(?:\.|\n)?/gi;
      conditionRegex = /closed borders?[\w\s]{0,10}depending/gi;
      break;
  }
  // Get matches so we can conditionally add it
  const matches = domText.match(mainRegex);
  return {
    type,
    matches: matches ? [...matches] : [],
    conditions: conditionRegex.test(domText),
  };
};

export { getRestrictionObject };
