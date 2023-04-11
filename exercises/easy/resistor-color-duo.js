export const decodedValue = (colorArray) => {
  const first = COLORS.indexOf(colorArray[0]).toString();
  const second = COLORS.indexOf(colorArray[1]).toString();
  return Number(first + second);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
