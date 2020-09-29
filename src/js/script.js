import Slider from "./components/slider.js";

$(window).on('load', () => {
	new Slider();

	breakLinks();
	showRecommend();
	showAuthorDescrip();
	faqAccordion();
	windowResize();
	burger();
	backlightTitleMenu();
});

function breakLinks() {
	$("a").click(e =>  e.preventDefault());
}

function showRecommend() {
	$(".btn--inline-review").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("btn--inline-active");
		$(this).hasClass("btn--inline-active") ? $(this).text("Hide Contects") : $(this).text("Show Contects");
		$(".recommend").slideToggle();
	});
}

function showAuthorDescrip() {
	$(".btn--inline-author").click(function(e) {
		e.preventDefault();

		$(".author__content--content").addClass("author__content--content-active");
		setTimeout(() => {
			const dotAuthorContent = $(".author__content--content").dotdotdot();
			dotAuthorContent.API.destroy();
		}, 250);
		$(this).hide();
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
	$(".author__content--content").dotdotdot();
}

function windowResize() {
	__clipText();
	__setStyleScroll();

	$(window).resize(() => {
		__clipText();
		__setStyleScroll();
		__burgerWrapperToResize();
	});
}

function burger() {
	$(".btn--burger").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("btn--burger-active");
		$(".nav").toggleClass("nav--active");
		$(".nav__content").slideToggle();

		__burgerWrapperToResize();
	});
}

function __burgerWrapperToResize() {
	if(window.innerWidth < 768 && $(".btn--burger").hasClass("btn--burger-active")) {
		$(".wrapper").addClass("wrapper--hidden");
	} else if ((window.innerWidth < 768 && !$(".btn--burger").hasClass("btn--burger-active")) || window.innerWidth >= 768) {
		$(".wrapper").removeClass("wrapper--hidden");
	}
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

function __setStyleScroll() {
	let scrollBar = null;

	!scrollBar ? scrollBar = new PerfectScrollbar('.faq__list') : $(window).resize(() => scrollBar.update());
}
