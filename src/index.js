
import refs from "./js/const";
import getGalleryItems from "./js/api.js/getGalleryItems";
import markupItem from "./js/markupItem";
import createGalleryElements from "./js/createGalleryElements";
import Notiflix from "notiflix";





async function searchForm(event) { 
    event.preventDefault()
    refs.loadMore.classList.add('is-hidden')
    refs.gallery.innerHTML = '';
    refs.page = 1;
    refs.q = event.currentTarget.firstElementChild.value.trim();
    if (refs.q === '') return;
    event.currentTarget.firstElementChild.value = '';
    try { 
        const array= await getGalleryItems()
            if(array.data.hits.length===0) throw new Error('error')
            const galleryItems = array.data.hits.map(item => {
                return (markupItem(item));
            }).join('');
        
        createGalleryElements(galleryItems);
        refs.loadMore.classList.remove('is-hidden');
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
     }
    
            
    // getGalleryItems().then(array => { 
    //         if(array.data.hits.length===0) throw new Error('error')
    //         const galleryItems = array.data.hits.map(item => {
    //             return (markupItem(item));
    //         }).join('');
        
    //     createGalleryElements(galleryItems);
    //     refs.loadMore.classList.remove('is-hidden');
            
    //     }).catch(() => { 
    //         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    //     })

}
refs.form.addEventListener('submit', searchForm);
refs.loadMore.addEventListener('click', onLoadMore);

 async function onLoadMore() {
    refs.page += 1;
    refs.totalHits += 40
    try {
        const array =  await getGalleryItems();
        if (refs.totalHits >= array.data.totalHits) throw new Error('error');
        const galleryItems = array.data.hits.map(item => {
            return (markupItem(item));
        }).join('');
        
        createGalleryElements(galleryItems);
    }catch (error) {
         Notiflix.Notify.warning('We\'re sorry, but you\'ve reached the end of search results.')
        refs.loadMore.classList.add('is-hidden');
      }
    
        
    
    // getGalleryItems().then(array => { 
    //     console.log(array);
    //     if (refs.totalHits >= array.data.totalHits) throw new Error('error');
    //     const galleryItems = array.data.hits.map(item => {
    //         return (markupItem(item));
    //     }).join('');
        
    //     createGalleryElements(galleryItems);
    // }).catch(() => {
    //     Notiflix.Notify.warning('We\'re sorry, but you\'ve reached the end of search results.')
    //     refs.loadMore.classList.add('is-hidden');
        
    //     })
}