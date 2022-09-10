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


const galleryRef = document.querySelector('.gallery');

galleryRef.style.listStyle = "none";
galleryRef.style.display = "flex";
galleryRef.style.gap = "15px";

const addImagesToGallery = obj => {
  const markup = obj.map(img => {
    return `<li><img src=${img.url} alt=${img.alt} width='380'></li>`;
  }).join('');

  return galleryRef.insertAdjacentHTML('beforeend', markup);
}

addImagesToGallery(images);