/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let cost = 0;
  if (pizza === 'Margherita') cost += 7;
  if (pizza === 'Caprese') cost += 9;
  if (pizza === 'Formaggio') cost += 10;
  if (extras) {
    extras.forEach((type) =>
      type === 'ExtraToppings' ? (cost += 2) : (cost += 1)
    );
  }
  return cost;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (total, order) => total + pizzaPrice(order.pizza, ...order.extras),
    0
  );
}
