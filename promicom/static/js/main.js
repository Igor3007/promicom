//Remove animations on load
window.onload = function () {
    document.querySelector("body").classList.remove("page_noanimation");
};

//Check webp support
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support === true) {
        document.querySelector("body").classList.add("page_webp");
    } else {
        document.querySelector("body").classList.add("page_nowebp");
    }
});

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu init
function mobileMenu() {

    var toggle = document.querySelector(".header-burger");
    var menu = document.querySelector(".mobile-menu");
    var body = document.querySelector("body");

    this.onOpen = function () {
        toggle.classList.add("is-active");
        menu.classList.add("is-active");
        body.classList.add("page_mobile");
        return true;
    };

    this.onClose = function () {
        toggle.classList.remove("is-active");
        menu.classList.remove("is-active");
        body.classList.remove("page_mobile");
    };

    this.onToggle = function () {
        toggle.classList.toggle("is-active");
        menu.classList.toggle("is-active");
        body.classList.toggle("page_mobile");
    };

    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobile.onToggle();
    });
}

var mobile = new mobileMenu();

var submenuToggle = document.querySelectorAll(".mobile-menu__nav-toggle, .footer-top__nav-toggle");
submenuToggle.forEach(function (el){
    el.addEventListener("click", function (){
        el.parentElement.classList.toggle("is-active");
        el.classList.toggle("is-active");
    });
});

var navLinks = document.querySelectorAll(".mobile-menu__nav-link");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        mobile.onClose();
    });
}

//Browser-level image lazy-loading
if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading=\"lazy\"]");
    images.forEach(function(el){
        el.src = el.dataset.src;
    })
} else {
    const script = document.createElement("script");
    script.src = "/static/js/lazysizes.min.js";
    document.body.appendChild(script);
}

//smart neader - hide on scroll down and show on scroll up
let previousScrollPosition = 0;
const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;
    let scrollingDown;

    if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
};

const nav = document.querySelector("header");

function handleNavScroll() {
    if (isScrollingDown() && !nav.contains(document.activeElement) && !document.body.classList.contains("page_mobile")) {
        nav.classList.add("header_scrolldown");
        nav.classList.remove("header_scrollup");
    } else {
        nav.classList.add("header_scrollup");
        nav.classList.remove("header_scrolldown");
    }

    if (window.pageYOffset <= 0) {
        nav.classList.remove("header_scrollup");
        nav.classList.remove("header_scrolldown");
    }

}

function scrollTop() {
    if (window.pageYOffset > 0) {
        this.document.querySelector(".scroll-top").classList.add("scroll-top_active");
    } else {
        this.document.querySelector(".scroll-top").classList.remove("scroll-top_active");
    }

    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
        this.document.querySelector(".scroll-top").classList.add("at-bottom");
    }
    else{
        this.document.querySelector(".scroll-top").classList.remove("at-bottom"); 
    }

}

window.addEventListener("scroll", () => {

    //Smart header
    handleNavScroll();

    //Scroll to top btn
    scrollTop();

});

//Scroll to top btn
scrollTop();
document.querySelector(".scroll-top").addEventListener("click", function () {
    window.scroll({top: 0, left: 0, behavior: "smooth"});
});

//Load scripts after page load
window.addEventListener("load", function () {

    var select = document.createElement("script");
    select.src = "/static/js/select.min.js";
    select.onload = function () {
        const selectCustom = new customSelect({
            selector: "select"
        });
        selectCustom.init();
    };
    document.body.appendChild(select);


    var gsap = document.createElement("script");
    gsap.src = "/static/js/wow.min.js";
    gsap.onload = function () {

        var wow = new WOW(
            {
              boxClass:     'wow',
              animateClass: 'animated',
              offset:       150,
              mobile:       false,
              live:         true,
              callback:     function(box) {
              },
              resetAnimation: false,
            }
          );
          wow.init();

    }
    document.body.appendChild(gsap);

    if(document.querySelector('[data-fslightbox]')){
        var fsLightbox = document.createElement("script");
        fsLightbox.src = "/static/js/fslightbox.min.js";
        fsLightbox.onload = function () {
            refreshFsLightbox();
        };
        document.body.appendChild(fsLightbox);
    }

});

function initMaska() {
    var maska = document.createElement("script");
    maska.src = "/static/js/maska.min.js";
    maska.onload = function () {
        Maska.create("input[type=\"tel\"]", {
            mask: "+375 (##) ###-##-##"
        });
        window.removeEventListener("click", initMaska);
    };
    document.body.appendChild(maska);
}

window.addEventListener("click", initMaska);

//open popup
var popupLink = document.querySelectorAll("a[data-popup]");
popupLink.forEach(function (element) {
    element.addEventListener("click", function (e) {
    });
});

//close popups
var popupClose = document.querySelectorAll(".popup");
popupClose.forEach(function (element) {
    element.addEventListener("click", function (e) {
        if (e.target !== e.currentTarget) {
        } else {
            window.location.href = "#close";
        }
    });
});

var playVideo = document.querySelectorAll('.video-block__play');
playVideo.forEach(function (el){
    el.addEventListener('click', function (){

        var parent = el.parentElement;
        var videoPlayer = parent.querySelector('.video-block__player');
        if(videoPlayer.getAttribute('data-src')){
            parent.classList.add('is-playing');
            videoPlayer.querySelector('video').src = videoPlayer.getAttribute('data-src');
            videoPlayer.querySelector('video').play();
        }
    })
})

var stepsToggles = document.querySelectorAll('.steps-block__item-toggle');
if(stepsToggles.length){
    stepsToggles.forEach(function (el){
        el.addEventListener('click', function (){
            el.parentNode.classList.toggle('is-active');
        })
    })
}