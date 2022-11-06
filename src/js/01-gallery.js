// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallerySet = document.querySelector('.gallery');

const galleryMarkUp = createGalleryMarkUp(galleryItems);

gallerySet.insertAdjacentHTML('afterbegin', galleryMarkUp);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) => `
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            data-source="${original}"
            src="${preview}"
            alt="${description}"
        />
    </a>
`
    )
    .join('');
}
