// 品牌馆跳转
$(".list1 li:eq(0)").click(function() {
    location.href = "02fenlei-pinlei.html";
});

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

// 等待接口，放入图标
// ------------------

$.ajax({
    type: "GET",
    url: "http://106.13.115.175:8080/elleshop/showBrandByPopular",
    dataType: "json",
    data: "",
    success: function(res) {
        console.log(res);
        console.log(res.info);

        // 分类
        let goodsList = res.info
            .map(
                v => `
                <dl>
                    <dt><img src="${v.brandLogoUrl}" alt=""></dt>
                    <dd></dd>
                </dl>
            `
            )
            .join("");
        $(".right .list1").html(goodsList);
    }
});
