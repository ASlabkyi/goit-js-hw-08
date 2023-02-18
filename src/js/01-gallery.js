import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

// galleryListEl.innerHTML = createGalleryList(galleryItems);
// galleryListEl.addEventListener('click', galleryListEl);

function createGalleryList(element) {
  return element
    .map(
      ({ original, preview, description }) => `
   <a class="gallery__item" href=${original}>
   <img class="gallery__image" src=${preview} alt=${description} />
 </a>
   `
    )
    .join('');
}

document
  .querySelector('.gallery')
  .insertAdjacentElement('beforeend', createGalleryList);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
