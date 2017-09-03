jQuery(window).trigger('resize').trigger('scroll');
$('.button-collapse').sideNav('show');
$('.button-collapse').sideNav('hide');
$(document).ready(function() {
    $('#toc').pushpin({
        offset: 50
    });
    $('.scrollspy').scrollSpy({scrollOffset: 135});
    $(".dropdown-button").dropdown();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(".button-collapse").sideNav();
});