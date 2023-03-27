/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardType = 0;
  stack.forEach((single) => {
    if (single === card) cardType++;
  });
  return cardType;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let evenTotal = 0;
  let oddTotal = 0;
  for (const card of stack) {
    if (card % 2 === 0) evenTotal++;
    if (card % 2 !== 0) oddTotal++;
  }
  if (type === true) return evenTotal;
  return oddTotal;
}
