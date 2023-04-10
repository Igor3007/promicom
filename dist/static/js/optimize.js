//Load scripts after page load
window.addEventListener("load", function () {
    let splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){
        new Splide( '.optimize-slider__items', {
            arrows: true,
            pagination: false,

        }).mount();

    }
    document.body.appendChild(splide);

});