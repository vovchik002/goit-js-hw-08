// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const containerImg = document.querySelector(".gallery");
const imgCreateInHtml = createImgGallery(galleryItems);
containerImg.insertAdjacentHTML("beforeend", imgCreateInHtml);
function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
 <a class="gallery__link" href="${original}">
   <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}" 
     alt="${description}"
   />
 </a>
 </div>`;
    })
    .join("");
}

containerImg.addEventListener('click', onContainerImgClick);

function onContainerImgClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();

  

    addEventListener('keydown', event => {
        if (event.code === "Escape") {
            instance.close()
        }
    })
}


console.log(galleryItems);
