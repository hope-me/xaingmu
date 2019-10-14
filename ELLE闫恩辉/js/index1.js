var elem = document.getElementById('jiaodiantu');
window.mySwipe = Swipe(elem, {
	//1s一次轮播
	callback: function(index, element) {
		$(".xiaoyuandian li").eq(index).addClass("cur").siblings().removeClass("cur");
	}
});
$(".xiaoyuandian li").click(
	function() {
		mySwipe.slide($(this).index());
	}
);
$('#btn_').click(function() {
	window.location.href = "index2.html";
})
$('#btn__').click(function() {
	window.location.href = "index3.html";
})