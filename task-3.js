const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.getElementById('gallery');

/* let makeItemGallery = options => {
  const { url, alt } = options;
  return `<li><img srс ="${url}"alt="${alt}"class=itemStyle><li>`;
};

makeItemGallery = images.map(makeItemGallery).join(''); */

/* console.log(makeItemGallery); */

/* galleryRef.insertAdjacentHTML('afterbegin', makeItemGallery); */

images.forEach(el =>
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li class=itemStyle><img src="${el.url}" alt="${el.alt}"></li>`,
  ),
);
