//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){
        new Splide( '.clients-block__slider', {
            mediaQuery: 'min',
            arrows: true,
            pagination: false,
            gap: 16,
            perPage: 1,
            drag: false
        }).mount();

    }
    document.body.appendChild(splide);

});