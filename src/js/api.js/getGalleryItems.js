import axios from "axios";
import refs from "../const";

//Для бекенду використовуй публічний API сервісу Pixabay
//Зареєструйся, отримай свій унікальний ключ доступу і ознайомся з документацією.
//Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '4711889-1df4bd4dd90c9a16aff582e9e';

function getGalleryItems() {
   
     return axios.get(`${BASE_URL}?key=${KEY}&page=${refs.page}&per_page=100&q=${refs.q}&image_type=photo&orientation=horizontal&safesearch=true`)
 };

export default getGalleryItems;