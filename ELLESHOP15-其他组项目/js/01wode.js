console.log("加载完成");

// 全局ajax设置
// 为所有的ajax请求都会加上这个请求头
$(document).ajaxSend(function(event, xhr) {
    // token放到请求头中
    xhr.setRequestHeader("token", window.localStorage.getItem("token"));
    // 是否ajax请求
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
});

$.ajax({
    type: "POST",
    url: "http://106.13.115.175:8080/elleshop/user/message.do",
    dataType: "json",
    success: function(res) {
        console.log("查询成功");
        console.log(res);
        console.log(res.info);
        // 我的头部信息，头像，用户名，成长值
        let obj = res.info;
        let html = `
            <dl>
                <dd>
                    <img src=${obj.photoUrl} alt="">
                </dd>
                <dt>
                    <span>${obj.username}</span>
                    <p>Svip会员|成长值：2</p>
                </dt>
            </dl>
            `;
        $(".toubu").html(html);
    }
});

let uid = null;
let token = Cookies.get("token");

// $.ajax({
//     type: "GET",
//     url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
//     data: "uid=123,token=asd",
//     dataType: "json",
//     success: function (res) {
//         console.log("查询成功");
//         console.log(res);
//         console.log(res.data);

//     }
// });
// // 账户余额
// $.ajax({
//     type: "GET",
//     url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
//     data: "uid=123,token=asd",
//     dataType: "dataType",
//     success: function (response) {
//         console.log("查询成功");

//     }
// });

// 底部导航
// 主页
$(".icon-zhuye").click(function() {
    location.href = "jingpin.html";
});
// 搜索分类
$(".icon-sousuo").click(function() {
    location.href = "02fenlei-pinlei.html";
});
// 时尚头条
$(".shishang").click(function() {
    location.href = "index00.html";
});
// 购物车
$(".icon-gouwuche").click(function() {
    location.href = "06gouwuche.html";
});
// 我的
$(".icon-weibiaoti-").click(function() {
    location.href = "01wode.html";
});
