export const gigasecond = (date) => {
  const seconds = date.getTime() / 1000 + 1000000000;
  return new Date(seconds * 1000);
};
