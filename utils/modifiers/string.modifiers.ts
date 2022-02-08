export const trimText = (text: string): string => {
  let temp = text.split("");
  while (/[\.\n\s]/.test(temp[0])) {
    temp.splice(0, 1);
  }
  return temp.join("");
};

export const splitAtNewLine = (text: string): string[] => {
  let temp = text.split("\n");
  return temp.filter((line) => line !== "");
};
