//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){

        new Splide( '.about-clients__items', {
            mediaQuery: 'min',
            arrows: false,
            pagination: false,
            gap: 16,
            perPage: 2,
            breakpoints: {
                426: {
                    perPage: 3
                },
                641: {
                    perPage: 4
                },
                831: {
                    perPage: 5
                },
                1025: {
                    perPage: 6
                },
                1153: {
                    perPage: 8,
                },
            }
        }).mount();

    }
    document.body.appendChild(splide);

});