const categoriesRef = document.querySelectorAll('ul#categories > .item');

const numberOfCatigories = categoriesRef.length;
console.log(`Number of categories: ${numberOfCatigories}`);

const item = categoriesRef.forEach(item => {
    const categoryNameRef = item.querySelector('h2');
    console.log(`Category: ${categoryNameRef.textContent}`);

    const categotyElementsRef = item.querySelectorAll('li');
    console.log(`Elements: ${categotyElementsRef.length}`);
    
});