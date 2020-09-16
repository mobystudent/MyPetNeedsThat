import Slider from "./components/slider";

$(window).on('load', () => {
	new Slider();

	breakLinks();
	showRecommend();
	faqAccordion();
	windowResize();
	burger();
	backlightTitleMenu();
});

function breakLinks() {
	$("a").click(e =>  e.preventDefault());
}

function showRecommend() {
	const BTN_REVIEW = $(".btn--inline-review"),
		RECOM_BLOCK = $(".recommend"),
		btnReviewActiveClass = "btn--inline-active";

	BTN_REVIEW.click(function(e) {
		e.preventDefault();

		$(this).toggleClass(btnReviewActiveClass);
		RECOM_BLOCK.slideToggle();
	});
}

function faqAccordion() {
	const FAQ_QUES = $(".faq__header"),
		faqBtnClass = ".faq__plus",
		faqBtnActiveClass = "faq__plus--active";

	FAQ_QUES.click(function() {
		$(this).next().slideToggle();
		$(this).find(faqBtnClass).toggleClass(faqBtnActiveClass);
	});
}

function __clipText() {
	$(".post__wrap").dotdotdot();
	$(".review__descrip").dotdotdot();
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
	const NAV = $(".nav"),
		NAV_CONTENT = $(".nav__content"),
		BTN_BURGER = $(".btn--burger"),
		navActiveClass = "nav--active",
		btnBurgerActiveClass = "btn--burger-active";

	BTN_BURGER.click(function(e) {
		e.preventDefault();

		$(this).toggleClass(btnBurgerActiveClass);
		NAV.toggleClass(navActiveClass);
		NAV_CONTENT.slideToggle();

		__burgerWrapperToResize();
	});
}

function __burgerWrapperToResize() {
	const breakPoint = 768,
		btnBurgerActiveClass = "btn--burger-active",
		wrapperHideClass = "wrapper--hidden",
		WRAPPER = $(".wrapper"),
		BURGER_BTN = $(".btn--burger");

	if(window.innerWidth < breakPoint && BURGER_BTN.hasClass(btnBurgerActiveClass)) {
		WRAPPER.addClass(wrapperHideClass);
	} else if ((window.innerWidth < breakPoint && !BURGER_BTN.hasClass(btnBurgerActiveClass)) || window.innerWidth >= breakPoint) {
		WRAPPER.removeClass(wrapperHideClass);
	}
}

function backlightTitleMenu() {
	const menuTitle = ".menu__text",
		menuTitleActive = "menu__text--active",
		MENU_BLOCK = $(".menu__list--header");

	MENU_BLOCK
		.mouseenter(function(e) {
			$(this).prev().find(menuTitle).addClass(menuTitleActive);
		})
		.mouseleave(function(e) {
			$(this).prev().find(menuTitle).removeClass(menuTitleActive);
		});
}

function __setStyleScroll() {
	let scrollBar = null;

	!scrollBar ? scrollBar = new PerfectScrollbar('.faq__list') : $(window).resize(() => scrollBar.update());
}
