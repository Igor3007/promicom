//Load scripts after page load
window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function (){

        if(document.querySelector('.service-develop__items')){
            new Splide( '.service-develop__items', {
                mediaQuery: 'min',
                arrows: false,
                pagination: false,
                gap: 16,
                perPage: 1,
                breakpoints: {
                    641: {
                        perPage: 2
                    },

                    1025: {
                        destroy: true,
                    },
                }
            }).mount();
        }

        if(document.querySelector('.service-projects__items')){
            new Splide( '.service-projects__items', {
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
                        perPage: 3
                    },
                }
            }).mount();
        }

        if(document.querySelector('.tarrifs-block__slider')){
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
        }


        if(document.querySelector('.service-reviews.splide')){
            new Splide( '.service-reviews.splide', {
                mediaQuery: 'min',
                arrows: true,
                pagination: false,
                gap: 24,
                perPage: 2,
                breakpoints: {
                    577: {
                        perPage: 3
                    },
                    831: {
                        perPage: 4
                    },
                }
            }).mount();
        }

        if(document.querySelector('.service-examples__slider')){
            new Splide( '.service-examples__slider', {
                mediaQuery: 'min',
                arrows: true,
                pagination: false,
                gap: 16,
                perPage: 1,
            }).mount();
        }




    }
    document.body.appendChild(splide);
});

var serviceToggles = document.querySelectorAll('.service-tabs__toggle');
if(serviceToggles.length){
    serviceToggles.forEach(function (el){
        el.addEventListener('click', function (){

            var parent = findAncestor(el,'service-tabs');
            var dataTab = el.getAttribute('data-tab');

            parent.querySelector('.service-tabs__toggle.is-active').classList.remove('is-active');
            parent.querySelector('.service-tabs__pane.is-active').classList.remove('is-active');

            el.classList.add('is-active');
            parent.querySelector('.service-tabs__pane[data-tab="' + dataTab + '"]').classList.add('is-active');

        })
    })
}

function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) ;
    return el;
}