$('.icon-guanbi').click(function () {
	window.location.href = "index1.html";
})
$('#button').click(function () {
	let phone = $('#text_1').val()
	let password = $('#password_').val()
	var url = 'http://106.13.115.175:8080/elleshop/user/register.do'
	$.ajax({
		url:url,
		type:'post',
		data:{
			password,
			phone
		},
		//请求成功
		success:function (res) {
			console.log(res);
		   
		   
		},
		//请求失败
		error:function (error) {
			console.log(error);
		}
	});


})