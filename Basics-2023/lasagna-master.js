/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  }
  if (!time) {
    return "You forgot to set the timer.";
  }
  return "Not done, please wait.";
}
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}
export function quantities(layers) {
  let noodleAmount = 0;
  let sauceAmount = 0;
  layers.forEach(function (item) {
    if (item === "noodles") {
      noodleAmount = noodleAmount + 50;
    }
    if (item === "sauce") {
      sauceAmount = sauceAmount + 0.2;
    }
  });
  return {
    noodles: noodleAmount,
    sauce: sauceAmount,
  };
}
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}
export function scaleRecipe(recipe, portions) {
  if (!portions) {
    return recipe;
  }
  const multiple = portions / 2;
  const scaled = { ...recipe };
  for (let ingredient in recipe) {
    scaled[ingredient] = scaled[ingredient] * multiple;
  }
  return scaled;
}
