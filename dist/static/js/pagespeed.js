document.addEventListener('DOMContentLoaded', function (event) {

    window.elementInViewport = function (el) {
        var bounds = el.getBoundingClientRect();

        console.log((bounds.top + bounds.height > 0), 'Елемент ниже верхней границы')
        console.log((window.innerHeight - bounds.top > 0), 'Выше нижней')
        console.log((bounds.left + bounds.width > 0), 'Правее левой')
        console.log((window.innerWidth - bounds.left > 0), 'Левее правой')

        return (
            (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
            (window.innerHeight - (bounds.top + 150) > 0) // Выше нижней
        );
    }

    /* ===========================================
    circle progress
    ===========================================*/

    const items = document.querySelectorAll('.circle-points')

    document.addEventListener("scroll", (e) => {



        if (window.elementInViewport(document.querySelector(".section-pagespeed-seo"))) {
            toViewPoint(document.querySelectorAll(".section-pagespeed-seo .circle-points"))
        }
        if (window.elementInViewport(document.querySelector(".section-pagespeed-perfomance"))) {
            toViewPoint(document.querySelectorAll(".section-pagespeed-perfomance .circle-points"))
        }
        if (window.elementInViewport(document.querySelector(".section-pagespeed-mobile"))) {
            toViewPoint(document.querySelectorAll(".section-pagespeed-mobile .circle-points"))
        }
        if (window.elementInViewport(document.querySelector(".section-pagespeed-security"))) {
            toViewPoint(document.querySelectorAll(".section-pagespeed-security .circle-points"))
        }
        if (window.elementInViewport(document.querySelector(".pagespeed-category__list"))) {
            toViewPoint(document.querySelectorAll(".section-pagespeed-category .circle-points"))
        }

    })

    function toViewPoint(items) {

        function getColor(point) {

            //0-49 red
            //50-89 orange
            //90-100 green

            if (point <= 49) {
                return 'circle-points--red'
            }
            if (point <= 89) {
                return 'circle-points--orange'
            }
            if (point >= 90) {
                return 'circle-points--green'
            }
        }

        items.forEach(item => {

            if (!item.classList.contains('loaded')) {
                const point = Number(item.querySelector('span').innerText)
                const maxLengthSvg = 352;
                const progressBar = item.querySelector('.lh-gauge-arc').style.strokeDasharray = ((maxLengthSvg * point) / 100) + 'px , ' + maxLengthSvg + 'px'

                item.classList.add('loaded')
                item.classList.add(getColor(point))

                let start = 0
                var interval = setInterval(function () {
                    item.querySelector('span').innerHTML = ++start;
                    if (start == point) {
                        clearInterval(interval);
                    }
                }, 5);
            }


        })
    }

    //toViewPoint(items)




});