import { RestrictionMention } from "types";
import { splitAtNewLine, trimText } from "utils";

const getMentions = (
  restrictions: RestrictionMention[]
): RestrictionMention[] => {
  return restrictions.reduce(
    (output: RestrictionMention[], current: RestrictionMention) => {
      // Init an output object
      let temp: RestrictionMention = {
        matches: [],
        type: current.type,
        conditions: current.conditions,
      };
      // If we have matches we will need to format the strings
      if (current.matches) {
        temp.matches = current.matches.reduce(
          (matches: string[], match: string) => {
            let text: string | string[] = trimText(match);
            text = splitAtNewLine(text);
            matches = [...matches, ...text];
            return matches;
          },
          []
        );
      }
      output.push(temp);
      return output;
    },
    []
  );
};

export { getMentions };
