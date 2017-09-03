jQuery(window).trigger('resize').trigger('scroll');
$('.button-collapse').sideNav('show');
$('.button-collapse').sideNav('hide');
$(document).ready(function() {
    $('#toc').pushpin({
        offset: 50
    });
    $('.scrollspy').scrollSpy({scrollOffset: 90});
    $('input#input_text, textarea#subject').characterCounter();
    $('input#input_text, textarea#message').characterCounter();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $(".button-collapse").sideNav();
    var options = [
		{
		  selector: '.full-screen',
		  vh: 75.25
		}
	];
	var vhFix = new VHChromeFix(options);
});