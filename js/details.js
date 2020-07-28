$(function(){
	
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项
	
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
	})
	
	//收藏
	var click = false;
	$(".collect").click(function(){
		if(click){
			$(this).children().attr("src", "img/details/star_white.png");
			click = false;
		}else{
			$(this).children().attr("src", "img/details/star_red.png");
			click = true;
		}
	});
	
	//购买
	$(".alert").hide();
	$(".buy").click(function(){
		$(".alert").show();
	});
	$(".sur").click(function(){
		$(".alert").hide();
	})
	$(".clo").click(function(){
		$(".alert").hide();
	})
	
	$(".size1").click(function(){
		$(this).css("border-color", "#ff0000");
		$(this). siblings(".size1").css("border-color", "#a2a2a2");
	})
	
	
	$(".add").click(function(){
		var num = parseInt($(".num").text());
		var numafter = num + 1;
		$(".num").text(numafter);
	})
	$(".cut").click(function(){
		var num = parseInt($(".num").text());
		var numbefore = num -1;
		if(num == 1){
			$(".num").text(1)
		}else{
			$(".num").text(numbefore);
		}
	})
})