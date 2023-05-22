export const hey = (message) => {
  const text = message.trim();
  const isQuestion = text.endsWith("?");
  const isShout = /[A-Z]/.test(text) && text == text.toUpperCase();

  if (text === "") return "Fine. Be that way!";
  if (isShout)
    return isQuestion
      ? "Calm down, I know what I'm doing!"
      : "Whoa, chill out!";
  if (isQuestion) return "Sure.";
  return "Whatever.";
};
