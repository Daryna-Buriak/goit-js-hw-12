export const fetchPhotosByQuery = searchedEl => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '48271312-da0ca2419705a10e0da77e3e9',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
