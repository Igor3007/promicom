//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){

        new Splide( '.mainpage-projects__slider', {
            mediaQuery: 'min',
            arrows: false,
            pagination: false,
            gap: 16,
            perPage: 1,
            breakpoints: {
                641: {
                    perPage: 2
                },
                831: {
                    destroy: true,
                },
            }
        }).mount();

    }
    document.body.appendChild(splide);

});