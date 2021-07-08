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

const closeButton = document.querySelector('.modal__button');

const backdrop = document.querySelector('.backdrop');

closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});

gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'IMG') {
    return;
  }
  backdrop.classList.remove('is-hidden');
  let target;
  // console.log(e.target.nodeName);
  if (e.target.nodeName === 'LI') {
    target = e.target.querySelector('.gallery__image');
  } else {
    target = e.target;
  }

  openImage(target);
}

function openImage(target) {
  const targetImage = target.getAttribute('src');
  console.log(targetImage);

  const modalImage = document.querySelector('.modal__image');
  modalImage.setAttribute('src', targetImage);
  console.log(modalImage);
}
