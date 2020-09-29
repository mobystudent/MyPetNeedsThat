export default class Slider {
	constructor(){
		this.init();
	}

	init(){
		this.sliderPrize = $('.slider--prize .slider__content'),
		this.sliderPost = $('.slider--post .slider__content'),
		this.prizeBreakPoint = 1024,
		this.postBreakPoint = 768;

		this.__slidersList();

		$(window).resize(() => this.__slidersList());
	}

	__slidersList() {
		this.__sliderItem(this.sliderPost, this.postBreakPoint);
		this.__sliderItem(this.sliderPrize, this.prizeBreakPoint);
	}

	__sliderItem(sliderName, breakPoint) {
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
		else if(sliderName.hasClass('slick-initialized') && window.innerWidth >= breakPoint) {
			sliderName.slick('unslick');
		}
	}
}
