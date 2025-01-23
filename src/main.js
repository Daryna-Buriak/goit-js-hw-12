import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.searchForm');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');

const searchSubmit = event => {
  const loader = document.querySelector('.loader');
  event.preventDefault();

  const searchedEl = searchForm.elements[0].value.trim();

  if (searchedEl === '') {
    iziToast.error({
      title: '',
      message: 'Please enter your request',
      messageColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });

    return;
  }

  document.querySelector('.loader').classList.add('show-loader');

  fetchPhotosByQuery(searchedEl)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });

        gallery.innerHTML = '';

        searchForm.reset();

        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');

      gallery.innerHTML = galleryTemplate;
      lightbox.refresh();
    })

    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loader.classList.remove('show-loader');
    });
};

searchForm.addEventListener('submit', searchSubmit);
