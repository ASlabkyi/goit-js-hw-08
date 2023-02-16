import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryListEl = document.querySelector('.gallery');

galleryListEl.innerHTML = createGalleryList(galleryItems);
galleryListEl.addEventListener('click', galleryListEl);

function createGalleryList(element) {
  return element
    .map(
      ({ original, preview, description }) => `
   <div class="gallery__item">
   <a class="gallery__item" href=${original}>
   <img class="gallery__image" src=${preview} alt=${description} />
 </a>
        </div>
   `
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
