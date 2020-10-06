// TOGGLE NAVBAR //
function Sidebar(ref) {
    ref.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

var swiper = new Swiper('.swiper-container', {
    navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 8600,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

});

// Filter Grid //
// Filter Grid //
$(document).ready(function () {

    $('.grid-container').isotope({
        itemSelector: '.grid-item',
    });

    // filter items on button click
    $('.filter-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid-container').isotope({ filter: filterValue });
        $('.filter-menu li').removeClass('active');
        $(this).addClass('active');
    });
})

// CAROUSEL-SLIDER //
$('.slider-area').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    prevArrow: '<span class="arrow-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="arrow-next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [
        {
            breakpoint: 1758,
            settings: {
                slidesToShow: 3.2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

lightbox.option({
    positionFromTop: 10,
    fitImagesInViewport: true,
})