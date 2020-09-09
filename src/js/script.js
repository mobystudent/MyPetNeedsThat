$(window).on('load', () => {
	breakLinks();
	showRecommend();
	faqAccordion();
	windowResize();
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

function faqAccordion() {
	$(".faq__header").click(function() {
		$(this).next().slideToggle();
		$(this).find(".faq__plus").toggleClass("faq__plus--active");
	});
}

function __clipText() {
	$(".post__wrap").dotdotdot();
	$(".review__descrip").dotdotdot();
}

function windowResize() {
	__clipText();
	__initSlider();
	__setStyleScroll();

	$(window).resize(() => {
		__clipText();
		__initSlider();
		__setStyleScroll();
	});
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

function __initSlider() {
	const sliderPrize = $('.slider--prize .slider__content'),
		sliderPost = $('.slider--post .slider__content'),
		prizeBreakPoint = 1024,
		postBreakPoint = 768;

	__sliderItem(sliderPost, postBreakPoint);
	__sliderItem(sliderPrize, prizeBreakPoint);
}

function __sliderItem(sliderName, breakPoint) {
		if(!sliderName.hasClass('slick-initialized') && window.innerWidth < breakPoint)
			sliderName.slick({
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				easing: 'ease-in-out',
				responsive: [
					{
						breakpoint: breakPoint,
						settings: {
							slidesToShow: 1,
							dots: true
						}
					}
				]
			});
		else if(sliderName.hasClass('slick-initialized') && window.innerWidth >= breakPoint)
			sliderName.slick('unslick');
}

function __setStyleScroll() {
	let scrollBar = null;

	!scrollBar ? scrollBar = new PerfectScrollbar('.faq__list') : $(window).resize(() => scrollBar.update());
}
