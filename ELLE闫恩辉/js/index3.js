$('.icon-guanbi').click(function () {
	window.location.href = "index1.html";
})
$('#button').click(function () {
	let phone = $('#text_1').val()
	let password = $('#password_').val()
	var url = 'http://106.13.115.175:8080/elleshop/user/login.do'
	$.ajax({
		url: url,
		type: 'post',
		data: {
			password,
			phone
		},
		//请求成功
		success: function (res) {
			console.log(res);
			console.log(res.info)
			//输入正确
			if (res.code == 0) {
				let token = res.info
				window.localStorage.setItem("token", token)
				window.location.href = "../ELLE丁涛/wode.html"
			}
		},
		//请求失败
		error: function (error) {
			console.log(error);
		}
	});


})
// // 为所有的ajax请求都会加上这个请求头
// $(document).ajaxSend(function (event, xhr) {
// 	// token放到请求头中
//    xhr.setRequestHeader("token", window.localStorage.getItem("token")) ; 
// 	// 是否ajax请求
// 	xhr.setRequestHeader("x-requested-with", "XMLHttpRequest") ; 
// });