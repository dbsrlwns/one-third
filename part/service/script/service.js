$(function (){
    // 검색 영역
    $(".icon").click(function (){
        $(".search").toggleClass('active');
        $(".clear").toggleClass('active');
    });
    $(".clear").click(function (){
        $("#mySearch").val("");
    });

    // 마이페이지
    $("#lnbMenu li:last-child").click(function(){
        alert("로그인후에 이용해 주시길 바랍니다.");
    });

    // 약관 Gnb
    $(".termsGnb li").click(function (){
        $(".termsGnb li").removeClass('active');
        $(this).addClass('active');
    });

    // 약관 Lnb
    $(".trensLnb li").click(function (){
        $(".trensLnb li").removeClass('active');
        $(this).addClass('active');
    });

    // 스크롤 바텀 표시
    $(window).scroll(function (){
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom);
        if(scrollBottom < 286){
            $(".scrollTop").addClass('on');
        } else {
            $(".scrollTop").removeClass('on');
        }
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
});