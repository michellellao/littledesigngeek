$(document).ready(function() {
	$('.section').css('min-height', $(window).height());
	$('.third-section').css('min-height', $(window).height()/3);
	$('#email').click(function() {
		$('#myemail').fadeToggle('200');
	})
});

