function scrollh() {
	$(".smooth").on("scroll", function() {
		let scrollPos = $(this).scrollTop();
		$(".content").css({
			opacity: 1 - scrollPos / 400
		});

	});
}
scrollh();



$('body').delegate('.c-faq', 'click', function() {
	$('.c-faq').removeClass('c-faq--active');
	$(this).addClass('c-faq--active');
});
