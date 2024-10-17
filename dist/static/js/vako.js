document.addEventListener('DOMContentLoaded', function () {
    const parallaxContainer = document.querySelector('.vakos__img-box--top');
    const parallaxElements = parallaxContainer.querySelectorAll('span');

    function getTranslateY(element) {
        const transform = window.getComputedStyle(element).transform;
        if (transform !== 'none') {
            const matrix = transform.match(/^matrix\((.+)\)$/);
            if (matrix) {
                return parseFloat(matrix[1].split(', ')[5]);
            }
        }
        return 0;
    }

    const initialTransforms = Array.from(parallaxElements).map(getTranslateY);

    window.addEventListener('scroll', function () {
        const containerTop = parallaxContainer.offsetTop;
        const containerHeight = parallaxContainer.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= containerTop && scrollPosition <= (containerTop + containerHeight)) {
            const relativeScrollPosition = scrollPosition - containerTop;

            parallaxElements.forEach((element, index) => {
                const speed = element.getAttribute('data-speed');
                const depth = element.getAttribute('data-depth');
                const initialTranslateY = initialTransforms[index];
                const yPos = initialTranslateY + -(relativeScrollPosition * speed * depth);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }
    });
});

window.addEventListener("load", function () {
    var splide = document.createElement("script");
    splide.src = "/static/js/splide.min.js";
    splide.onload = function () {

        new Splide('.vakos-details__last-sc-item-slider', {
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
