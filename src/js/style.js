$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header-menu').toggleClass('show-menu');
    $('.header-link').toggleClass('show-header-link');
    $('.header-link1').toggleClass('show-header-link');

});
$('.header_menu a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header-menu').removeClass('show-menu');
    $('.header-link').removeClass('show-menu');
    $('.header-link1').removeClass('show-menu');
});


$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

