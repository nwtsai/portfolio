jQuery(window).trigger('resize').trigger('scroll');
$('.button-collapse').sideNav('show');
$('.button-collapse').sideNav('hide');
$(document).ready(function() {
    $('html, body').hide();
    if(window.location.hash) {
        var extraOffset = 18;
        if(window.location.hash == "#Apps")
            extraOffset = 62;
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').stop().animate({
                scrollTop: $(window.location.hash).offset().top - extraOffset
            }, 1250, 'easeInOutExpo');
        }, 200);
    }
    else {
        $('html, body').show();
    }
    $('#toc').pushpin({
        offset: 50
    });
    $('.scrollspy').scrollSpy();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.tabs').tabs({swipeable: true});
    $('a.page-scroll').bind('click', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top - 110)
	    }, 1250, 'easeInOutExpo');
	    event.preventDefault();
	});
    setTimeout(function() {
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }, 500);
});