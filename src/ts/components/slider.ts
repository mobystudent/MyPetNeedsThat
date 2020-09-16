export default class Slider {
	private sliderPrize: JQuery<HTMLElement> = $('.slider--prize .slider__content');
	private sliderPost: JQuery<HTMLElement> = $('.slider--post .slider__content');
	private prizeBreakPoint: number = 1024;
	private postBreakPoint: number = 768;

	constructor() {
		this.init();
	}

	private init() {
		this.__slidersList();

		$(window).resize(() => this.__slidersList());
	}

	private __slidersList() {
		this.__sliderItem(this.sliderPost, this.postBreakPoint);
		this.__sliderItem(this.sliderPrize, this.prizeBreakPoint);
	}

	private __sliderItem(sliderName: JQuery<HTMLElement>, breakPoint: number) {
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
}
