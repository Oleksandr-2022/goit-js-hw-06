const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');
const element = images.map(({ url, alt }) => {
// `<li class = 'gallery__item'><img class = 'gallery__img' src = ${url} alt = ${alt}></li>`).join('');
return `<li><img style ='border-radius: 12px' src='${url}' alt='${alt}' width = 250 height = 200></li>`
}).join('');
galleryList.insertAdjacentHTML('afterbegin', element);
galleryList.setAttribute('style', 'list-style-type:none; display: flex; justify-content: space-evenly;')


// Доброго дня, Олександр) 
// У третьмоу завданні потрібно використати тільки метод insertAdjacentHTML,  в тому місці, де ви використовуєте метод append. 
// Метод append не потрібен. 
// Також потрібно додати return для поверненя розмітки з методу map.
//  В кінці додати метод join,  щоб перетворити масив на рядок.


// const galleryList = document.querySelector('.gallery');

// const element = images.map(({ url, alt }) => {
//   galleryList.insertAdjacentHTML(
//     'beforeend',
//     `<li class = 'gallery__item'><img class = 'gallery__img' src = ${url} alt = ${alt}></li>`
//   );
//   images.join('');
//   return gallery;
// });
// galleryList.append(...element);



// const galleryList = document.querySelector('.gallery');
// let markup = '';
// images.forEach(img => {
//     markup = images
//         .map(
//             img =>
//                 `<li class="gallery__item"><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`
//         )
//         .join('');
// });
// galleryList.insertAdjacentHTML('afterbegin', markup);