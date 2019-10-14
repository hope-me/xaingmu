console.log("加载完毕");

let titleHtml = `
        <img src="img/banner-tiaozhuan.png" alt="">
        <img src="" alt="">
        <h3>Monochromatic Xu</h3>
        <p><span class="iconfont icon-xihuan1"></span>9892</p>
        <span class="iconfont icon-fenxiang"></span>
    `;

$(".title").html(titleHtml);

$(".icon-fanhui").click(function() {
    location.href = "03pinlei-pinpaiguan.html";
});

$.ajax({
    type: "GET",
    url: "http://106.13.115.175:8080/elleshop/goods/findGoodsByBrandId.do",
    data: "brandId=1",
    dataType: "json",
    success: function(res) {
        console.log(res);
        console.log(res.info);
        console.log(res.info[0]);

        let obj2 = parseQuery(location.search.slice(1));
        console.log(obj2);

        let obj = res.info[0];
        let html = `
            <figure>
            <a style="color:#101010" href="05xiangqing.html?pid=${obj.goodsId}" data-id=${obj.goodsId}>
            <img src="img/banner-tiaozhuan-pic1.png" alt=""></a>
                
                <figcaption>
                    <h3>Monochromatic Xu</h3>
                    <span>${obj.goodsMsg}</span>
                    <span>&yen;${obj.maxPrice}</span>
                    <span class="iconfont icon-xihuan1"></span>
                </figcaption>
            </figure>
            <figure>
            <a style="color:#101010" href="05xiangqing.html?pid=${obj.goodsId}" data-id=${obj.goodsId}>
            <img src="img/banner-tiaozhuan-pic1.png" alt=""></a>
                
                <figcaption>
                    <h3>Monochromatic Xu</h3>
                    <span>${obj.goodsMsg}</span>
                    <span>&yen;${obj.maxPrice}</span>
                    <span class="iconfont icon-xihuan1"></span>
                </figcaption>
            </figure>
            <figure>
            <a style="color:#101010" href="05xiangqing.html?pid=${obj.goodsId}" data-id=${obj.goodsId}>
            <img src="img/banner-tiaozhuan-pic1.png" alt=""></a>
                
                <figcaption>
                    <h3>Monochromatic Xu</h3>
                    <span>${obj.goodsMsg}</span>
                    <span>&yen;${obj.maxPrice}</span>
                    <span class="iconfont icon-xihuan1"></span>
                </figcaption>
            </figure>
            <figure>
            <a style="color:#101010" href="05xiangqing.html?pid=${obj.goodsId}" data-id=${obj.goodsId}>
            <img src="img/banner-tiaozhuan-pic1.png" alt=""></a>
                
                <figcaption>
                    <h3>Monochromatic Xu</h3>
                    <span>${obj.goodsMsg}</span>
                    <span>&yen;${obj.maxPrice}</span>
                    <span class="iconfont icon-xihuan1"></span>
                </figcaption>
            </figure>
        `;

        $("section .f4").html(html);
    }
});
