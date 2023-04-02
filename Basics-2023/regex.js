/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  let regex = /chatbot/i;
  return regex.test(command.split(" ")[0]);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const reg = new RegExp(/(emoji)\d+/, "g");
  return message.replace(reg, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const pattern = new RegExp(/^(\(\+\d{2}\))\s\d{3}?[-]?\d{3}[-]?\d{3}$/);
  return pattern.test(number)
    ? "Thanks! You can now download me to your phone."
    : `Oops, it seems like I can\'t reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const reg = new RegExp(/(\w)+(\.\w{2,3})/g);
  return userInput.match(reg);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const nameArr = fullName.split(",");
  const name = `${nameArr[1].trim()} ${nameArr[0].trim()}`;
  return `Nice to meet you, ${name}`;
}
