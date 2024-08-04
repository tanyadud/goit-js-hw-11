'use strict';

import { fetchPhotos } from './js/pixabay-api.js';
import { displayPhotos } from './js/render-functions';


const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(!searchInput.value.trim()) {
        return;
    } else {
        fetchPhotos()
         .then(photos => displayPhotos(photos))
         .catch(error => showErrorMsg(error.toString()))
         .finally(() => searchForm.reset());
    }

});

