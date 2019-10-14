$(function() {
    //生成
    $("#Tj").click(function() {
            var a = $("#username").val()
            var b = $("#pasd").val()
            var c = $("#rido").find("input[type='radio']:checked").val();
            var d = $("#disabledSelect").val()
            var data = JSON.parse(localStorage.getItem("name"))
            if (data == null) {
                var arr = [];
                var e = 0;
                e++
                arr.push({ e, a, b, c, d })
                localStorage.setItem("name", JSON.stringify(arr))
            } else {

                if (data[data.length - 1] == undefined) {
                    e = 0
                } else {
                    e = data[data.length - 1].e
                }
                e++
                data.push({ e, a, b, c, d })
                localStorage.setItem("name", JSON.stringify(data))
            }
            show();
            alert("成功")
        })
        //展示
    function show() {
        var data = JSON.parse(localStorage.getItem("name"))
        var str = ""
        if (data == null) {
            str += "<h3>没有数据</h3>"
            $("#xzc").html(str);
            return
        }
        for (var i = 0; i < data.length; i++) {
            str += `<tr class="text-center middle" data-id ="${data[i].e}">
				<th class="col-md-1 text-center index1">${i}</th>
				<th class="col-md-3 text-center"  text-center ">${data[i].a}</th>
				<th class="col-md-2 text-center" >
					<button type="button" class="btn btn-primary antu" data-toggle="modal" data-target="#chakan">查看</button>
				</th>
				<th class="col-md-2 text-center">
				<button type="button" class="btn btn-md btn-danger  dell">删除</button>
				</th>
				<th class="col-md-2 text-center">
				<button type="button" class="btn btn-success modification" data-toggle="modal" data-target="#myModal">修改</button>
				</th>
				</tr>`
        }
        $("#xzc").html(str);
        //查看
        $(".antu").click(function() {
            var index = $(this).parents("tr").find(".index1").html()
            showitem(index)
        })

        //删除
        $(".dell").click(function() {
            var index = $(this).parents("tr").attr("data-id")
            var data = JSON.parse(localStorage.getItem("name"));
            for (var i = 0; i < data.length; i++) {
                if (data[i].e == index) {
                    data.splice(i, 1)
                    localStorage.setItem("name", JSON.stringify(data))
                }
            }
            $(this).parents("tr").remove();
            location.reload()
        })

        //修改
        $(".modification").click(function() {
            var index = $(this).parents("tr").attr("data-id")
            var data1 = JSON.parse(localStorage.getItem("name"));
            var index1;
            $.each(data, function(i) {
                if (data1[i].e == index) {
                    index1 = i
                }
            })
            $("#name1").attr("placeholder", data1[index1].a)
            $("#password").attr("placeholder", data1[index1].b)
            $("#disabledSelect1").val(data1[index1].d)
            $("#tijiao").click(function() {
                data1[index1].a = $("#name1").val() == "" ? data1[index1].a : $("#name1").val()
                data1[index1].b = $("#password").val() == "" ? data1[index1].b : $("#password").val()
                data1[index1].d = $("#disabledSelect1").val() == "" ? data1[index1].d : $("#disabledSelect1").val()
                console.log(data1[index1].a, data1[index1].d, data1[index1].b)
                data1[index1] = data1[index1]
                localStorage.setItem("name", JSON.stringify(data1))
                show();
                alert("成功")
                location.reload()
            })
        })

        //搜索
        $("#search").click(function() {
            var search = $("#search_text").val()
            var flag = false;
            var a;
            var data = JSON.parse(localStorage.getItem("name"))
            $.each(data, function(i) { if (data[i].a == search) { flag = true;
                    a = i; } })
            if (flag == true) {
                $("#search").attr("data-toggle", "modal")
                showitem(a)
            } else {
                $("#search").removeAttr("data-toggle")
                alert("没有该用户")
            }
        })
    }
    show();
    //版本生成 查看模态框
    function showitem(num) {
        var data = JSON.parse(localStorage.getItem("name"))
        var sttr = "";
        sttr += `<div class="row">
				    <div class="col-lg-6 col-lg-offset-1">
				      	<h4><span>name:</span>${data[num].a}</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-lg-offset-1">
					    <h4><span>password:</span>${data[num].b}</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-lg-offset-1">
					    <h4><span>sex:</span>${data[num].c}</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-lg-offset-1">
				      	<h4><span>profession:</span>${data[num].d}</h4>
					</div>
				</div>`
        $(".conent").html(sttr)
    }
})