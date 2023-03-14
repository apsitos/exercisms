// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island': 
      return 3;
    case 'All or Nothing':
      return 5;
    default: 
      return 2.5
  };
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalLimes = 0;
  let remainingSlices = wedgesNeeded;
  while (remainingSlices > 0 && limes.length !== 0){
    let lime = limes.shift();
    switch (lime) {
      case 'small':
        remainingSlices = remainingSlices - 6
        totalLimes++
        break;
      case 'medium':
        remainingSlices = remainingSlices - 8
        totalLimes++
        break;
      case 'large':
        remainingSlices = remainingSlices - 10
        totalLimes++
        break;
      default: 
        return
    }
  }
  return totalLimes;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToMake = 0;
  do {
    const juice = orders.shift()
    timeToMake = timeToMake + timeToMixJuice(juice)
  } while (timeToMake < timeLeft);
  return orders;
}
