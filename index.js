const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 1500,
	keyboard: true,
	mousewheel: true,
	longSwipesRatio: 0.1,
	
})
