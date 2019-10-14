$("#share").click(function() {
    $(".fenxiang").show();
    $(".zhezhao").show();
    $(".cancle").click(function() {
        $(".fenxiang").hide();
        $(".zhezhao").hide();
    });
});

// 全局ajax设置
// 为所有的ajax请求都会加上这个请求头
$(document).ajaxSend(function(event, xhr) {
    // token放到请求头中
    xhr.setRequestHeader("token", window.localStorage.getItem("token"));
    // 是否ajax请求
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
});

$(".icon-fanhui").click(function() {
    location.href = "04banner-tiaozhuan.html";
});

if (localStorage.getItem("token") || 1) {
    let obj2 = parseQuery(location.search.slice(1));
    console.log(obj2); //pid = 1

    $(".buy-it").click(function() {
        console.log(123);

        // 显示和隐藏弹出框
        $(".zhezhao-2").show();
        $(".buy-tanchuang").show();
        $(".cancle-buy").click(function() {
            $(".buy-tanchuang").hide();
            $(".zhezhao-2").hide();
        });
        // 加减
        $(".reduce-btn").click(function() {});
        $(".add-cart").click(function() {
            $.ajax({
                type: "POST",
                url: "http://106.13.115.175:8080/elleshop/addGoodsToCart",
                data: {
                    goodsNum: 1,
                    goodsTypeId: 1
                },
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    location.href = "06gouwuche.html";
                }
            });
        });
    });
}
