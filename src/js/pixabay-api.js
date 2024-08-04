'use strict';


const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('.search-input');
const url = 'https://pixabay.com/api/';

const searchParams = {
  key: '45266338-df116589a90e1c76fc0e83bf8',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 18,
};

function fetchPhotos() {
    gallery.innerHTML = '';
    loader.style.display = 'inline-block';
    searchParams.q = searchInput.value.trim();
    const searchParamsString = new URLSearchParams(searchParams).toString();
    return fetch(`${url}?${searchParamsString}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

  export { fetchPhotos };