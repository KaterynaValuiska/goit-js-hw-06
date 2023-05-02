const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");
const array = [];
ingredients.forEach(ingredient => {
  const itemIng = document.createElement('li');
  itemIng.textContent = ingredient;
  itemIng.classList.add('item')
  console.log(itemIng);
  array.push(itemIng);

});

list.append(...array);
