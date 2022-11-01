import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

console.log(createGallery(galleryItems));

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class ="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}">
        </a>
        `;
    })
    .join('');
};

const galleryImage = document.querySelector('.gallery img');

galleryContainer.addEventListener('click', clickOpenImage);

function clickOpenImage(event) {
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

    event.preventDefault()
}