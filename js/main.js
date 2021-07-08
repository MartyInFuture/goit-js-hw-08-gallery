const imageArr = [
  './images/back-to-the-future1.jpg',
  './images/back-to-the-future2.jpg',
  './images/back-to-the-future3.jpg',
  './images/lord-of-the-ring1.jpg',
  './images/lord-of-the-rings2.jpg',
  './images/lord-of-the-rings3.jpg',
  './images/star-wars-new-hope.jpg',
  './images/star-wars-empires-strike-back.jpg',
  './images/star-wars-return-of-the-jedi.jpg',
];

const gallery = document.querySelector('.gallery');

const length = 10;

for (let i = 0; i < imageArr.length; i++) {
  const item = document.createElement('li');
  item.setAttribute('class', 'gallery__item');

  const image = document.createElement('img');
  image.setAttribute('class', 'gallery__image');
  image.setAttribute('src', imageArr[i]);

  document.querySelector('ul.gallery').appendChild(item).appendChild(image);
}
