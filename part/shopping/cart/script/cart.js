$(function (){
    // 검색 영역
    $(".icon").click(function (){
        $(".search").toggleClass('active');
        $(".clear").toggleClass('active');
    });
    $(".clear").click(function (){
        $("#mySearch").val("");
    });

    // 스크롤탑 버튼
    $(".scrollTop").click(function (){
        $("html, body").animate({scrollTop:0}, 500);
    });

    // window 스크롤값
    $(window).scroll(function (){
        let wScroll = $(this).scrollTop();
        // console.log(wScroll);
        if(wScroll >= 300){
            $(".scrollTop").addClass('active');
        } else {
            $(".scrollTop").removeClass('active');
        }
    });

    // 장바구니 탭 메뉴
    $(".cart_tab ul li").click(function (){
        $(".cart_tab ul li").removeClass('active');
        $(this).addClass('active');
    });
});