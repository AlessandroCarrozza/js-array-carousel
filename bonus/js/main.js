
// array delle src delle img
const imagesCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const sliderDom = document.getElementById("slider");
const prevDom = document.getElementById("prev");
const nextDom = document.getElementById("next");

let sliderContent = "";

for (let i = 0; i < imagesCarousel.length; i++) {
    
    let divImage = `<div class="image">
                        <img src="${imagesCarousel[i]}">
                    </div>`;
    
    sliderContent += divImage;
}


sliderDom.innerHTML = sliderContent;

// array con tutte le img
const slides = document.getElementsByClassName("image");


let activeImage = 0;
slides[0].classList.add("show");


nextDom.addEventListener("click" , 

    function () {

        slides[activeImage].classList.remove('show');
     
        if (activeImage == slides.length -1) {
            activeImage = 0;
        } else {
            activeImage++;
        }

        slides[activeImage].classList.add('show');

    });


prevDom.addEventListener("click" , 

    function () {

        slides[activeImage].classList.remove('show');
     
        if (activeImage == 0) {
            activeImage = (slides.length - 1);
        } else {
            activeImage--;
        }

        slides[activeImage].classList.add('show');
         
    });    


    
