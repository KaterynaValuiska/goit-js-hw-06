const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const itemIng = document.createElement('li');
  itemIng.textContent = ingredient;
  itemIng.classList.add('item')
  console.log(itemIng);

  const list = document.querySelector("ul#ingredients");
  list.append(itemIng);
});
 
