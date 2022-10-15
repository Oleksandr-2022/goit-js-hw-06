// const categoriesEl = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${categoriesEl.length}`);

// const categoriesArray = [...categoriesEl];
// const categoryName = categoriesArray.map(categories => categories.firstElementChild.textContent);
// const subcategoryLength = categoriesArray.map(categories => categories.children[1].children.length);

// for (let i = 0; i < categoriesArray.length; i += 1) {
//   console.log(`Category: ${categoryName[i]}\nElements: ${subcategoryLength[i]}`);
// }


const categoriesEl = document.querySelectorAll('.item')

console.log(`Number of categoriesEl: ${categoriesEl.length}`)
console.log(' ')
categoriesEl.forEach((element) => {
  console.log('Category:', element.firstElementChild.textContent)
  console.log('Elements:', element.lastElementChild.children.length)
  console.log(' ')
})



// const categories = document.querySelectorAll('.item');
// console.log(' ');
// console.log(`Number of categories: ${categories.length}`);
// console.log(' ');
// categories.forEach(category => {
//     const group = [...category.children];
//     group.forEach(element => {
//         if (element.tagName === 'H2') {
//             console.log(`Elements: ${element.textContent}`);
//         }
//     });
//     group.forEach(element => {
//         if (element.tagName === 'UL') {
//             console.log(`Elements: ${element.children.length}`);
//         }
//     });
//     console.log(' ');
// });