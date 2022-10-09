const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListEl = document.querySelector('#ingredients');

const element = ingredients.map(options => {
  const liEl = document.createElement('li');
  liEl.textContent = options;
  return liEl;
});

ingredientListEl.append(...element);
