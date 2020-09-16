(function (factory) {
    typeof define === 'function' && define.amd ? define('script', factory) :
    factory();
}((function () { 'use strict';

    var Slider = /** @class */ (function () {
        function Slider() {
            this.sliderPrize = $('.slider--prize .slider__content');
            this.sliderPost = $('.slider--post .slider__content');
            this.prizeBreakPoint = 1024;
            this.postBreakPoint = 768;
            this.init();
        }
        Slider.prototype.init = function () {
            var _this = this;
            this.__slidersList();
            $(window).resize(function () { return _this.__slidersList(); });
        };
        Slider.prototype.__slidersList = function () {
            this.__sliderItem(this.sliderPost, this.postBreakPoint);
            this.__sliderItem(this.sliderPrize, this.prizeBreakPoint);
        };
        Slider.prototype.__sliderItem = function (sliderName, breakPoint) {
            if (!sliderName.hasClass('slick-initialized') && window.innerWidth < breakPoint)
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
            else if (sliderName.hasClass('slick-initialized') && window.innerWidth >= breakPoint)
                sliderName.slick('unslick');
        };
        return Slider;
    }());

    $(window).on('load', function () {
        new Slider();
        breakLinks();
        showRecommend();
        faqAccordion();
        windowResize();
        burger();
        backlightTitleMenu();
    });
    function breakLinks() {
        $("a").click(function (e) { return e.preventDefault(); });
    }
    function showRecommend() {
        var BTN_REVIEW = $(".btn--inline-review"), RECOM_BLOCK = $(".recommend"), btnReviewActiveClass = "btn--inline-active";
        BTN_REVIEW.click(function (e) {
            e.preventDefault();
            $(this).toggleClass(btnReviewActiveClass);
            RECOM_BLOCK.slideToggle();
        });
    }
    function faqAccordion() {
        var FAQ_QUES = $(".faq__header"), faqBtnClass = ".faq__plus", faqBtnActiveClass = "faq__plus--active";
        FAQ_QUES.click(function () {
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
        $(window).resize(function () {
            __clipText();
            __setStyleScroll();
            __burgerWrapperToResize();
        });
    }
    function burger() {
        var NAV = $(".nav"), NAV_CONTENT = $(".nav__content"), BTN_BURGER = $(".btn--burger"), navActiveClass = "nav--active", btnBurgerActiveClass = "btn--burger-active";
        BTN_BURGER.click(function (e) {
            e.preventDefault();
            $(this).toggleClass(btnBurgerActiveClass);
            NAV.toggleClass(navActiveClass);
            NAV_CONTENT.slideToggle();
            __burgerWrapperToResize();
        });
    }
    function __burgerWrapperToResize() {
        var breakPoint = 768, btnBurgerActiveClass = "btn--burger-active", wrapperHideClass = "wrapper--hidden", WRAPPER = $(".wrapper"), BURGER_BTN = $(".btn--burger");
        if (window.innerWidth < breakPoint && BURGER_BTN.hasClass(btnBurgerActiveClass)) {
            WRAPPER.addClass(wrapperHideClass);
        }
        else if ((window.innerWidth < breakPoint && !BURGER_BTN.hasClass(btnBurgerActiveClass)) || window.innerWidth >= breakPoint) {
            WRAPPER.removeClass(wrapperHideClass);
        }
    }
    function backlightTitleMenu() {
        var menuTitle = ".menu__text", menuTitleActive = "menu__text--active", MENU_BLOCK = $(".menu__list--header");
        MENU_BLOCK
            .mouseenter(function (e) {
            $(this).prev().find(menuTitle).addClass(menuTitleActive);
        })
            .mouseleave(function (e) {
            $(this).prev().find(menuTitle).removeClass(menuTitleActive);
        });
    }
    function __setStyleScroll() {
        var scrollBar = null;
        !scrollBar ? scrollBar = new PerfectScrollbar('.faq__list') : $(window).resize(function () { return scrollBar.update(); });
    }

})));

//# sourceMappingURL=script.js.map
