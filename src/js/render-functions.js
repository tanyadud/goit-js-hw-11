'use strict';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import errorIcon from '/img/error.svg';

const gallery = document.querySelector('.gallery');
const simpleGallery = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
});

function displayPhotos(photos) {
    const markup = photos.hits
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
          <li class="gallery-item">
            <a href="${largeImageURL}">
              <img class="gallery-image" src="${webformatURL}" alt="${tags}">
              <div class="img-desc">
                <span><b>Likes:</b> <br/>${likes}</span>
                <span><b>Views:</b> <br/>${views}</span>
                <span><b>Comments:</b> <br/>${comments}</span>
                <span><b>Downloads:</b> <br/>${downloads}</span>
              </div>
            </a>
          </li>
          `;
        }
      )
      .join('');
    gallery.insertAdjacentHTML('afterbegin', markup);
    simpleGallery.refresh();
}

function showErrorMsg(msg) {
    iziToast.show({
      position: 'topRight',
      iconUrl: errorIcon,
      messageColor: '#FAFAFB',
      messageSize: '16px',
      backgroundColor: '#EF4040',
      close: false,
      closeOnClick: true,
      closeOnEscape: true,
      message: msg,
    });
}


export { displayPhotos, showErrorMsg };