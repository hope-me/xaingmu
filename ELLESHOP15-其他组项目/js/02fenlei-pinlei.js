// class MyVueRouter {
//     constructor({
//         routes
//     }) {
//         // 监听hashchange 变化，一旦有变化，意味着可能要改变页面显示的内容
//         window.addEventListener("hashchange", () => {
//             // 获取变化以后的hash
//             let nowHash = window.location.hash;
//             console.log(nowHash, routes)
//             // 去路由配置中查找是否配置过这个路由，并找到这个路由配置
//             let routeConfig = routes.find((item, index) => {
//                 return nowHash == (item.path);
//             });
//             console.log(routeConfig)
//             if (routeConfig) {
//                 // 如果存在这个配置 就把配置中要显示的内容显示到页面上
//                 document.querySelector("#router-view").innerHTML = routeConfig.page;
//             }
//         });
//     }

// }

// let html = `<p>我是首页</p>
//             <a href="#"><ul>
//                 <li>123</li>
//                 <li>123</li>
//                 <li>123</li>
//             </ul></a>
//         `
// let html2 = `<h1>我是新闻</h1>`
// let html3 = `<h1>我是购物</h1>`
// let html4 = `<h1>我是游戏</h1>`

// let router = new MyVueRouter({
//     routes: [{
//         path: '#/home',
//         page: html
//     }, {
//         path: '#/news',
//         page: html2
//     }]
// })
// 路由测试结束
// -----------

// 品牌馆跳转
$(".list1 li:eq(1)").click(function() {
    location.href = "03pinlei-pinpaiguan.html";
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

// 等待接口，请求成功，获取图片和标题

// 等待接口

$.ajax({
    type: "GET",
    url: "http://106.13.115.175:8080/elleshop/category/categoryList.do",
    data: "",
    dataType: "json",
    success: function(res) {
        console.log(res);
        console.log(res.info);
        console.log(res.info[0].classList);
        console.log(res.info[0].classList[0]);
        console.log(res.info[0].classList[0].kindList[0]);
        console.log(res.info[0].classList[0].kindList[0].kindId);
        console.log(res.info[0].classList[0].kindList[1].kindId);

        // 裙装
        let html = res.info[0].classList[0].kindList
            .map(
                v => `
        <dl>
                   <dt><a style="color:#101010" href="04banner-tiaozhuan.html?classid=${v.classId}" data-id=${v.kindId}> <img src="${v.imgUrl}" alt=""> </a></dt>
                   <dd>${v.kindName}</dd>
             </dl>
        `
            )
            .join("");
        $(".right .list1").html(html);

        // 上装
        let html2 = res.info[0].classList[1].kindList
            .map(
                v => `
        <dl>
                   <dt><a style="color:#101010" href="04banner-tiaozhuan.html?classid=${v.classId}" data-id=${v.kindId}><img src="${v.imgUrl}" alt=""></a></dt>
                   <dd>${v.kindName}</dd>
             </dl>
        `
            )
            .join("");
        $(".right .list2").html(html2);

        //裤子
        let html3 = res.info[0].classList[2].kindList
            .map(
                v => `
        <dl>
                   <dt><a style="color:#101010" href="04banner-tiaozhuan.html?classid=${v.classId}" data-id=${v.kindId}><img src="${v.imgUrl}" alt=""></a></dt>
                   <dd>${v.kindName}</dd>
             </dl>
        `
            )
            .join("");
        $(".right .list3").html(html3);
    }
});

// let html = res.info.map(v => `
//         <dl>
//             <dt><img src=${v} alt=""></dt>
//             <dd>${v}</dd>
//         </dl>
// `).join('');

// $('.right .list1').html(html);
