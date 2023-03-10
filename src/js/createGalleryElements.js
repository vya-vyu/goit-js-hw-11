import refs from "./const";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const { gallery } = refs;
function createGalleryElements(str) { 
    refs.gallery.insertAdjacentHTML('beforeend', str);
}
// const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250 });
export default createGalleryElements;