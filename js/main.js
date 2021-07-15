const imageArr = [
  {
    preview: './images/back-to-the-future1.jpg',
    original: './images/back-to-the-future01.jpg',
    description: 'Back to the future 1',
  },
  {
    preview: './images/back-to-the-future2.jpg',
    original: './images/back-to-the-future02.jpg',
    description: 'Back to the future 2',
  },
  {
    preview: './images/back-to-the-future3.jpg',
    original: './images/back-to-the-future03.jpg',
    description: 'Back to the future 3',
  },
  {
    preview: './images/lord-of-the-ring1.jpg',
    original: './images/lord-of-the-ring01.jpg',
    description: 'The lord of the fing 1',
  },
  {
    preview: './images/lord-of-the-rings2.jpg',
    original: './images/lord-of-the-rings02.jpg',
    description: 'The lord of the fing 2',
  },
  {
    preview: './images/lord-of-the-rings3.jpg',
    original: './images/lord-of-the-rings03.jpg',
    description: 'The lord of the fing3',
  },
  {
    preview: './images/star-wars-new-hope.jpg',
    original: './images/star-wars-new-hope0.jpg',
    description: 'Star wars 4',
  },
  {
    preview: './images/star-wars-empires-strike-back.jpg',
    original: './images/star-wars-empires-strike-back0.jpg',
    description: 'Star wars 5',
  },
  {
    preview: './images/star-wars-return-of-the-jedi.jpg',
    original: './images/star-wars-return-of-the-jedi0.jpg',
    description: 'Star wars 5',
  },
];

const gallery = document.querySelector('.gallery');
const closeButton = document.querySelector('.modal__button');
const backdrop = document.querySelector('.backdrop');
const modalImage = document.querySelector('.modal__image');

// fill our list with picture
for (let i = 0; i < imageArr.length; i++) {
  const item = document.createElement('li');
  item.setAttribute('class', 'gallery__item');

  const image = document.createElement('img');
  image.setAttribute('class', 'gallery__image');
  image.setAttribute('src', imageArr[i].preview);
  image.setAttribute('alt', imageArr[i].description);

  document.querySelector('ul.gallery').appendChild(item).appendChild(image);
}

// open modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'IMG') {
    return;
  }
  backdrop.classList.remove('is-hidden');

  let target;
  if (e.target.nodeName === 'LI') {
    target = e.target.querySelector('.gallery__image');
  } else {
    target = e.target;
  }
  openImage(target);
}

function openImage(target) {
  const targetImage = target.getAttribute('src');
  let original = {};
  for (const item of imageArr) {
    if (item.preview === targetImage) original = item;
  }
  modalImage.setAttribute('src', original.original);
}

// close modal
closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') backdrop.classList.add('is-hidden');
});

backdrop.addEventListener('click', (e) => {
  if (e.target.nodeName === 'DIV') backdrop.classList.add('is-hidden');
});

// arrows
document.addEventListener('keydown', (e) => {
  if (!backdrop.classList.contains('is-hidden')) {
    const targetImage = document.querySelector('.modal__image');
    let imageSource = 0;
    for (const item of imageArr) {
      if (item.original === targetImage.getAttribute('src'))
        imageSource = imageArr.indexOf(item);
    }
    const imageIndex = imageArr.indexOf(imageArr[imageSource]);

    if (e.keyCode === 39 && imageIndex < imageArr.length - 1) {
      modalImage.setAttribute('src', imageArr[imageSource + 1].original);
    } else if (e.keyCode === 37 && imageIndex > 0) {
      modalImage.setAttribute('src', imageArr[imageSource - 1].original);
    }
  }
});
