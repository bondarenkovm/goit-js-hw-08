// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const cardsImg = createCardsImgMarkup(galleryItems);
// console.log(galleryEl);
function createCardsImgMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href='${original}'>
            <img
             class="gallery__image"
             src='${preview}'
             data-source='${original}'
             alt='${description}'/>
          </a>
      </div>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', cardsImg);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
