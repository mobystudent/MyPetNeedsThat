$(window).on('load', () => {
	breakLinks();
	showRecommend();
	faqAcordion();
	clipTextResize();
	burger();
	backlightTitleMenu();
});

function breakLinks() {
	$("a").click(function(e) {
		e.preventDefault();
	});
}

function showRecommend() {
	$(".btn--inline-review").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("btn--inline-active");
		$(".recommend").slideToggle();
	});
}

function faqAcordion() {
	$(".faq__header").click(function() {
		$(this).next().slideToggle();
		$(this).find(".faq__plus").toggleClass("faq__plus--active");
	});
}

function _clipText() {
	$(".post__wrap").dotdotdot();
	$(".review__descrip").dotdotdot();
}

function clipTextResize() {
	_clipText();

	$(window).resize(() => _clipText());
}

function burger() {
	$(".btn--burger").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("btn--burger-active");
		$(".nav").toggleClass("nav--active");
		$(".nav__content").slideToggle();
	});
}

function backlightTitleMenu() {
	$(".menu__list--header")
		.mouseenter(function(e) {
			$(this).prev().find(".menu__text").addClass("menu__text--active");
		})
		.mouseleave(function(e) {
			$(this).prev().find(".menu__text").removeClass("menu__text--active");
		});
}
