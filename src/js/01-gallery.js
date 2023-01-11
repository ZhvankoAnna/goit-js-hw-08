// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");
const imgMarkup = createGalleryItem(galleryItems);

galleryBoxEl.insertAdjacentHTML("beforeend", imgMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox('.gallery a', {captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox');

console.log(galleryItems);
