
	jQuery(document).ready(function($) {

		// Progress bar
		NProgress.start();
		setTimeout(function () {
			NProgress.done();
			$(".fade").removeClass("out");
		}, 1000);

		// Local scrolling
		$('.brand').localScroll();
		$('.container').localScroll();

	});