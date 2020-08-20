$(function(){

	$('.review__slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		fade: true,
		prevArrow: '<button class="slider-btn slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="slider-btn slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
	});

	$('.partners__slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button class="slider-btn slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="slider-btn slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
			}
		},
		]
	});

	$('.ask__item-top').on('click', function(){
		$(this).children('.ask__item-show').toggleClass('ask__item-show--active');
		$(this).siblings().slideToggle();
		$(this).parent().toggleClass('ask__item--active')
	});

	$('.header-menu__btn').on('click', function(){
		$(this).toggleClass('header-menu__btn--active');
		$('.menu-mobile').toggleClass('menu-mobile--active');
	});

	AOS.init({
		disable: function () {
			var maxWidth = 1000;
			return window.innerWidth < maxWidth;
		},
		throttleDelay: 99
	});
});
