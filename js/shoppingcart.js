$(function(){
	
	$(".add").click(function(){
		var num = parseInt($(this).siblings(".num").text());
		var numafter = num + 1;
		$(this).siblings(".num").text(numafter);
	})
	$(".cut").click(function(){
		var num = parseInt($(this).siblings(".num").text());
		var numbefore = num -1;
		if(num == 1){
			$(this).siblings(".num").text(1)
		}else{
			$(this).siblings(".num").text(numbefore);
		}
	})
})