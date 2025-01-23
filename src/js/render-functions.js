// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-card">
      <a class="gallery-link  href="${imgInfo.largeImageURL}">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${imgInfo.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${imgInfo.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${imgInfo.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${imgInfo.downloads}</p>
        </ul>
        </a>
    </li>
  `;
};
