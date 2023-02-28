
// array di images
const imagesCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const sliderDom = document.getElementById("slider");

let sliderContent = "";

for (let i = 0; i < imagesCarousel.length; i++) {
    
    let divImage = `<div class="image">
                        <img src="${imagesCarousel[i]}">
                    </div>`;
    
    sliderContent += divImage;
}

sliderDom.innerHTML = sliderContent;

const slides = document.getElementsByClassName("image");

let activeImage = 0;
slides[0].classList.add("show");
