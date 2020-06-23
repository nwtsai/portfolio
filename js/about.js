jQuery(window).trigger('resize').trigger('scroll');
$('.button-collapse').sideNav('show');
$('.button-collapse').sideNav('hide');
$(document).ready(function() {
    $('#toc').pushpin({
        offset: 50
    });
    $('.scrollspy').scrollSpy();
    $('input#input_text, textarea#subject').characterCounter();
    $('input#input_text, textarea#message').characterCounter();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('.button-collapse').sideNav();
	$('a.page-scroll').bind('click', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top - 110)
	    }, 1250, 'easeInOutExpo');
	    event.preventDefault();
	});
});