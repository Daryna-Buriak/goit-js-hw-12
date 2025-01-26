import axios from 'axios';

export const fetchPhotosByQuery = (searchedEl, currentPage) => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '48271312-da0ca2419705a10e0da77e3e9',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`, searchParams);
};
