head.ready(function() {

	$(document).scroll(function() {    
		var scroll 			= $(this).scrollTop(),
			hDoc 			= $(document).height(),
			hWind 			= $(window).height(),
			hFooter 		= $('.footer').height(),
			scrolltop 		= $('.js-scroll-top'),
			scroll_position = hDoc - hWind - hFooter;
		if (scroll > 100) {
			scrolltop.fadeIn(600);
			scrolltop.addClass('is-active');
			$(window).resize(function() {
				wScroll();
			});
			function wScroll() {
				if ($(window).width() < 1460) {
					if (scroll >= scroll_position) {
						scrolltop.addClass('is-abs');
					}else{
						scrolltop.removeClass('is-abs');
					}
				}
				else {
					scrolltop.removeClass('is-abs');
				}
			} wScroll();
		}
		else{
			scrolltop.removeClass('is-active');
			$(".scrolltop").fadeOut(600);
		}
	});
	$('.js-scroll-top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
	
});