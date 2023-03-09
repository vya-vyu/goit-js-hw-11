import refs from "./const";
const { gallery}=refs
function createGalleryElements(str) { 
    refs.gallery.insertAdjacentHTML('beforeend', str);
}
export default createGalleryElements;