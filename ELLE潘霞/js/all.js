//拖拽翻页 点击翻页
var tabItem = $('.top_list li');
var mySwiper = new Swiper('.swiper-container', {
    autoplay: false,
    on: {
        //swiper从当前slide开始过渡到另一个slide时执行
        slideChangeTransitionStart: function() {
            var n = this.activeIndex; //过渡后的slide索引
            changeTab(n);
        }
    }
});
//tab点击切换silde
tabItem.click(function() {
    var ind = $(this).index();
    changeTab(ind);
    mySwiper.slideTo(ind);
});
//头部改变事件
function changeTab(index) {
    tabItem.eq(index).animate({
        fontSize: 0.46 + 'rem',
    }, 430).siblings().stop().animate({
        fontSize: 0.24 + 'rem',
    }, 430);
    tabItem.eq(index).children('a').css({
        color: '#101010'
    }).parent().siblings().children('a').css({
        color: '#999'
    });
    //移动到首页底部出现 其余隐藏
    if (tabItem.eq(index).hasClass('footer_block')) {
        $('#footer').show();
    } else {
        $('#footer').hide();
    }
}
//主页小轮播
$(function() {
    var index = 0;
    $('.car_btn p').click(function() {
        index = $(this).index();
        $('.car_btn p').eq(index).animate({
            width: 0.3 + 'rem',
            height: 0.1 + 'rem',
            borderRadius: 28 + '%'
        }, 600).siblings().stop().animate({
            width: 0.1 + 'rem',
            height: 0.1 + 'rem',
            borderRadius: 50 + '%'
        }, 600);
        $('.car_img').animate({
            top: 0,
            left: -7.2 * index + 'rem'
        }, 600)
    });
    //自动轮播
    let i = 0
    $('.car_btn p').eq(0).css({
        width: 0.3 + 'rem',
        height: 0.1 + 'rem',
        borderRadius: 28 + '%'
    }, 1600)
    let timer = setInterval(auto, 1600);

    function auto() {
        index++;
        i++
        if (index == 4) {
            index = 1;
            $('.car_img').animate({
                'left': 0,
            }, 0);
        }
        if (i == 4) {
            i = 0
        }
        $('.car_img').animate({
            top: 0,
            left: -7.2 * index + 'rem'
        }, 1600);
        $('.car_btn p').eq(i).animate({
            width: 0.3 + 'rem',
            height: 0.1 + 'rem',
            borderRadius: 28 + '%'
        }, 1600).siblings().stop().animate({
            width: 0.1 + 'rem',
            height: 0.1 + 'rem',
            borderRadius: 50 + '%'
        }, 1600);
    };
    //划入停止 划出继续
    $('.x_car').on('touchstart', function() {
        clearInterval(timer)
    });
    $('.x_car').on('touchend', function() {
        timer = setInterval(auto, 1600)
    });
})