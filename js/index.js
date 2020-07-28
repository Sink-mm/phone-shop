"use strict";

(function() {
	var swiper = new Swiper(".swiper-container", {
		autoplay:true,
		loop: true, // 循环模式选项
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next"
		},
		scrollbar: {
			el: ".swiper-scrollbar"
		}
	});
})();