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
        <li class ="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image" 
                src="${preview}"
                data-source="${original}" 
                alt="${description}">
            </a>
        </li>
        `;
    })
    .join('');
};

const galleryImage = document.querySelector('.gallery img');

galleryContainer.addEventListener('click', clickOpenImage);

function clickOpenImage(event) {
    const instance = basicLightbox.create(`
    <img width="1280" height="855" src="${event.target.dataset.source}".preventDefault()>
`)
    instance.show()

    event.preventDefault()
}





