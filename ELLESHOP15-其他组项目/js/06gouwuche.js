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

$("section :checkbox").click(function() {
    console.log("勾选按钮被点击");
});

console.log($("section figure").length);
// for (let i; i < $('section figure').length; i++) {

// }

// 全局ajax设置
// 为所有的ajax请求都会加上这个请求头
$(document).ajaxSend(function(event, xhr) {
    // token放到请求头中
    xhr.setRequestHeader("token", window.localStorage.getItem("token"));
    // 是否ajax请求
    xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
});

let to = localStorage.getItem("token");
console.log(to);

$.ajax({
    type: "GET",
    url: "http://106.13.115.175:8080/elleshop/showShoppingCart",
    success: function(res) {
        console.log("请求成功");
        console.log(res);
        console.log(res.info);
        console.log(res.info[0]);
        console.log(res.info[0].goodsType);
        console.log(res.info[0].goodsType.goods);

        let html = res.info
            .map(
                v => `
        
        <figure>
            <input type="checkbox">
            <img src="img/gouwuche-pic1.png" alt="">
            <figcaption>
                <h3>
                    ${v.goodsType.goods.goodsName}
                </h3>
                <span>颜色：深蓝色</span>
                <p>尺码：L</p>
                <h4>
                    <i>&yen;299</i>
                    <div class="number">
                        <button class="minus subBtn reduce-btn" data-id="${v.pid}">-</button>
                        <input class=" number form-control input-sm" type="text" data-id="${v.pid}" id="pnumIpt"
                            value=${v.goodsNum}>
                        <button class="add-btn plus addBtn">+</button>
                    </div>
                </h4>
            </figcaption>
        </figure>
        `
            )
            .join("");

        $("section").html(html);

        let pnum = $("#pnumIpt").val();

        Count();
        // $.ajax({
        //     type: "POST",
        //     url: "http://106.13.115.175:8080/elleshop/updateGoodsNum",
        //     data: {
        //         goodsNum: pnum,
        //         goodsTypeId: res.info[0].goodsType
        //     },
        //     success: function (res) {
        //         console.log(res);
        //     }
        // })

        // -
        $(".reduce-btn").click(function() {
            console.log(pnum);
            if ($("#pnumIpt").val() > 1) {
                pnum--;
                $("#pnumIpt").val(pnum);

                let goodsNum = pnum;
                let goodsTypeId = res.info[0].goodsType.goodsTypeId;

                Count();
                $.ajax({
                    type: "POST",
                    url: "http://106.13.115.175:8080/elleshop/updateGoodsNum",
                    data: {
                        goodsNum,
                        goodsTypeId
                    },
                    success: function(res) {
                        console.log(res);
                        console.log(pnum);
                    }
                });
            } else {
                $("#pnumIpt").val(1);
            }
        });

        // +
        $(".add-btn").click(function() {
            console.log(pnum);
            if ($("#pnumIpt").val() > 1) {
                pnum++;
                $("#pnumIpt").val(pnum);

                let goodsNum = pnum;
                let goodsTypeId = res.info[0].goodsType.goodsTypeId;
                console.log(pnum);

                Count();
                $.ajax({
                    type: "POST",
                    url: "http://106.13.115.175:8080/elleshop/updateGoodsNum",
                    data: {
                        goodsNum,
                        goodsTypeId
                    },
                    success: function(res) {
                        console.log(res);
                    }
                });
            } else {
                $("#pnumIpt").val(1);
            }
        });

        function Count() {
            let jiage = pnum * res.info[0].goodsType.price;
            $(".jiage").html("&yen;" + jiage + "元");
            console.log($(".jiage").html());
        }

        // $('.add-btn').click(function () {
        //     console.log(pnum);
        //     if ($('#pnumIpt').val() > 1) {
        //         pnum++;
        //         $('#pnumIpt').val(pnum);
        //     } else {
        //         $('#pnumIpt').val(1);
        //     }
        // })

        // $(document).ready(function () {

        //     /*
        //      * 计算购物车中每一个产品行的金额小计
        //      *
        //      * 参数 row 购物车表格中的行元素tr
        //      *
        //      */
        //     function getSubTotal(row) {
        //         var price = parseFloat($(row).find(".selling-price").data("bind"));
        //         var qty = parseInt($(row).find(":text").val());
        //         var result = price * qty;
        //         $(row).find(".selling-price").text($.formatMoney(price, 2));
        //         $(row).find(".subtotal").text($.formatMoney(result, 2)).data("bind", result
        //             .toFixed(2));
        //     };

        //     /*
        //      * 计算购物车中产品的累计金额
        //      */
        //     function getTotal() {
        //         var qtyTotal = 0;
        //         var itemCount = 0;
        //         var priceTotal = 0;
        //         $(cartTable).find("tr:gt(0)").each(function () {
        //             getSubTotal(this);
        //             if ($(this).find(":checkbox").prop("checked") == true) {
        //                 itemCount++;
        //                 qtyTotal += parseInt($(this).find(":text").val());
        //                 priceTotal += parseFloat($(this).find(".subtotal").data(
        //                     "bind"));
        //             }
        //         });
        //         $("#itemCount").text(itemCount).data("bind", itemCount);
        //         $("#qtyCount").text(qtyTotal).data("bind", qtyTotal);
        //         $("#priceTotal").text($.formatMoney(priceTotal, 2)).data("bind", priceTotal
        //             .toFixed(2));
        //     };

        //     var cartTable = $("#cartTable");

        //     getTotal();

        //     //为数量调整的＋ －号提供单击事件，并重新计算产品小计
        //     /*
        //      * 为购物车中每一行绑定单击事件，以及每行中的输入框绑定键盘事件
        //      * 根据触发事件的元素执行不同动作
        //      *   增加数量
        //      *   减少数量
        //      *   删除产品
        //      *
        //      */
        //     let deleteBtns = document.querySelectorAll('.delete')
        //     let minus = document.querySelectorAll('.minus')
        //     let plus = document.querySelectorAll('.plus')
        //     let pnumIpt = document.querySelectorAll('#pnumIpt')
        //     let addBtns = document.querySelectorAll('.addBtn')
        //     let subBtns = document.querySelectorAll('.subBtn')
        //     let subtotalOne = document.querySelectorAll('.subtotal')

        //     //为每一个勾选框指定单击事件
        //     $(cartTable).find(":checkbox").click(function () {
        //         console.log("勾选被点击");

        //         //全选框单击
        //         if ($(this).hasClass("check-all")) {
        //             var checked = $(this).prop("checked");
        //             $(cartTable).find(".check-one").prop("checked", checked);
        //             getTotal();
        //         }

        //         //如果手工一个一个的点选了所有勾选框，需要自动将“全选”勾上或是取消
        //         var items = cartTable.find("tr:gt(0)");
        //         $(cartTable).find(".check-all").prop("checked", items.find(
        //                 ":checkbox:checked")
        //             .length == items.length);
        //         getTotal();
        //         //设置结算按钮disabled属性
        //         $("#btn_settlement").attr("disabled", items.find(
        //                 ":checkbox:checked").length ==
        //             0);
        //         getTotal();
        //     });

        //     //删除按钮,+,-,小计
        //     for (let i = 0; i < deleteBtns.length; i++) {
        //         deleteBtns[i].onclick = function () {
        //             console.log(this);

        //             //pid商品id
        //             let pid = this.parentNode.getAttribute('data-id')

        //             //uid用户id
        //             let uid = id;
        //             console.log(pid, uid);
        //             axios.get(cartDeleteApi, {
        //                 params: {
        //                     pid,
        //                     uid
        //                 }
        //             }).then(res => {
        //                 console.log(123);
        //                 console.log(res.data);
        //                 // console.log(res.data)
        //                 this.parentNode.parentNode.remove()
        //                 alert('删除成功')
        //                 // cartList = cartList.filter(v => v.pid !=
        //                 //     pid)
        //                 getTotal();
        //                 // countPrice()
        //             }).catch(err => {
        //                 console.log("查询失败");

        //             })
        //         }
        //         //-
        //         subBtns[i].onclick = function () {
        //             let pid = this.getAttribute('data-id')
        //             let uid = id;
        //             let pnum = parseInt(this.nextElementSibling.value)
        //             if (pnum == 1) {
        //                 return;
        //             }
        //             pnum--;
        //             axios.get(cartUpdateApi, {
        //                 params: {
        //                     pid,
        //                     uid,
        //                     pnum
        //                 }
        //             }).then(res => {
        //                 console.log(res.data)
        //                 this.nextElementSibling.value = pnum;
        //                 let obj = cartList.find(v => v.pid == pid)
        //                 obj.pnum = pnum;
        //                 // alert('更新成功')
        //                 console.log(123);
        //                 console.log(this.parentNode.parentNode.parentNode);
        //                 getSubTotal(this.parentNode.parentNode.parentNode)
        //                 countPrice()
        //             }).catch(err => {

        //             })
        //         }

        //         //+
        //         addBtns[i].onclick = function () {
        //             let pid = this.getAttribute('data-id')
        //             let uid = id;
        //             let pnum = parseInt(this.previousElementSibling.value)
        //             pnum++;
        //             axios.get(cartUpdateApi, {
        //                 params: {
        //                     pid,
        //                     uid,
        //                     pnum
        //                 }
        //             }).then(res => {
        //                 console.log(res.data)
        //                 this.previousElementSibling.value = pnum;
        //                 // alert('更新成功')
        //                 //更新 cartList 中数据
        //                 let obj = cartList.find(v => v.pid == pid)
        //                 obj.pnum = pnum;
        //                 console.log(obj)
        //                 console.log(this.parentNode.parentNode.parentNode);
        //                 getSubTotal(this.parentNode.parentNode.parentNode)
        //                 countPrice()
        //             }).catch(err => {

        //             })
        //         }

        //         // $(cartTable).find("tr:gt(0)").each(function() {
        //         //     var input = $(this).find(":text");

        //         //     //为数量输入框添加事件，计算金额小计，并更新总计
        //         //     $(input).keyup(function() {
        //         //         var val = parseInt($(this).val());

        //         //         getSubTotal($(this).parent().parent()); //tr element
        //         //         getTotal();
        //         //     });
        //         // });

        //     }

        // });
    }
});

$(".jiesuan").click(function() {
    location.href = "07jiesuan.html";
});
