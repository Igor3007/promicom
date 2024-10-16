window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function () {

        new Splide('.cmn-temp-details__last-sc-item-slider', {
            type: 'loop',
            mediaQuery: 'min',
            arrows: true,
            pagination: true,
            gap: 10,
            perPage: 1,
        }).mount();
    }
    document.body.appendChild(splide);
});