'use strict';

import { fetchPhotos } from './js/pixabay-api.js';
import { displayPhotos, showErrorMsg } from './js/render-functions';

const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!searchInput.value.trim()) return;
    
    gallery.innerHTML = '';
    loader.style.display = 'inline-block';

    fetchPhotos()
    .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
     .then(photos => {
        if (!photos.hits.length) {
            throw new Error();
        } else {
            displayPhotos(photos)
            loader.style.display = 'none';
        }
     })
     .catch(() => {
        showErrorMsg('Sorry, there are no images matching your search query. Please try again!');
        loader.style.display = 'none';
     })
     .finally(() => searchForm.reset());

});

