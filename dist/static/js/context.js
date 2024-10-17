//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){

        new Splide( '.tarrifs-block__slider', {
            type: 'loop',
            mediaQuery: 'min',
            arrows: false,
            pagination: false,
            gap: 16,
            perPage: 1,
            breakpoints: {
                641: {
                    type: 'carousel',
                    perPage: 2
                },
                1025: {
                    type: 'carousel',
                    perPage: 3
                },
            }
        }).mount();

        new Splide( '.clients-block__slider', {
            mediaQuery: 'min',
            arrows: true,
            pagination: false,
            gap: 16,
            perPage: 1,
            drag: false
        }).mount();

        var months =document.querySelectorAll('.clients-block__slide-graph__months');
        if(months.length){
            months.forEach(function (el){
                new Splide(el, {
                    mediaQuery: 'min',
                    arrows: false,
                    pagination: false,
                    gap: 10,
                    perPage: 2,
                    breakpoints: {
                        481: {
                            perPage: 3
                        },
                        831: {
                            perPage: 4
                        },
                        1153: {
                            perPage: 5
                        },
                    }
                }).mount();
            })
        }



    }
    document.body.appendChild(splide);

});