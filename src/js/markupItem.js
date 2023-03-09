     //  Кожне зображення описується об'єктом, з якого тобі цікаві тільки наступні властивості:

            // webformatURL - посилання на маленьке зображення для списку карток.
            // largeImageURL - посилання на велике зображення.
            // tags - рядок з описом зображення. Підійде для атрибуту alt.
            // likes - кількість лайків.
            // views - кількість переглядів.
            // comments - кількість коментарів.
            // downloads - кількість завантажень.
function markupItem({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) { 
  return `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy"  />
  <div class="info">
    <p class="info-item">
      <span><b>Likes</b></span>
      <span>${likes}</span>
    </p>
    <p class="info-item">
      <span><b>Views</b></span>
      <span>${views}</span>
    </p>
    <p class="info-item">
      <span><b>Comments</b></span>
      <span>${comments}</span>
    </p>
    <p class="info-item">
      <span><b>Downloads</b></span>
      <span>${downloads}</span>
    </p>
  </div>
</div>`
}
export default markupItem;