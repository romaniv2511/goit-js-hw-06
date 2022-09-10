const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


const ItemForIngradientsList = ingredients.map(item => {
    const ingradient = document.createElement('li');

    ingradient.classList.add('item');
    ingradient.textContent = item;

  return ingradient;
  })

ingredientsRef.append(...ItemForIngradientsList);

