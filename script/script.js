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

    // 스크롤 바텀 표시
    $(window).scroll(function (){
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        
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


    /* 스테디 셀러 영역 슬라이드 */
    let autoSlide = setInterval(steadyNext, 3000);
    let chkSlideBtn = true;
    
    // 자동 슬라이드
    function steadyNext(){
        if(chkSlideBtn){
            chkSlideBtn = false;
            $(".steady_slide .shuttleFrame").stop().animate({
                "margin-left":"-326px"
            },
            300,
            function (){
                $(".steady_slide .shuttleFrame a:first-child").insertAfter(".steady_slide .shuttleFrame a:last-child");
                $(".steady_slide .shuttleFrame").css({"margin-left":"0"});
                chkSlideBtn = true;
            });
        }
    }

    // 이전 버튼 클릭 슬라이드
    $("#steady_seller .inner .prev").click(function (){
        if(chkSlideBtn){
            chkSlideBtn = false;
            $(".steady_slide .shuttleFrame a:last-child").insertBefore(".steady_slide .shuttleFrame a:first-child");
            $(".steady_slide .shuttleFrame").css({"margin-left":"-326px"});
    
            $(".steady_slide .shuttleFrame").stop().animate({ "margin-left":"0" }, 300, function(){
                chkSlideBtn = true;
            });
        }
    });

    // 다음 버튼 클릭 슬라이드
    $("#steady_seller .inner .next").click(function (){
        steadyNext();
    });

    // 마우스 올리면 자동 멈춤
    $("#steady_seller").mouseover(function () {
        clearInterval(autoSlide);            
    });

    // 마우스 나가면 자동 슬라이드  
    $("#steady_seller").mouseout(function () {
        autoSlide = setInterval(steadyNext, 3000);
    });

    /* 베스트 리뷰 영역 슬라이드 */
    let autoSlide2 = setInterval(reviewNext, 3000);
    
    // 자동 슬라이드
    function reviewNext(){
        if(chkSlideBtn){
            chkSlideBtn = false;
            $(".review_slide .shuttleFrame").stop().animate({
                "margin-left":"-430px"
            },
            300,
            function (){
                $(".review_slide .shuttleFrame a:first-child").insertAfter(".review_slide .shuttleFrame a:last-child");
                $(".review_slide .shuttleFrame").css({"margin-left":"0"});
                chkSlideBtn = true;
            });
        }
    }

    // 이전 버튼 클릭 슬라이드
    $("#best_review .inner .prev").click(function (){
        if(chkSlideBtn){
            chkSlideBtn = false;
            $(".review_slide .shuttleFrame a:last-child").insertBefore(".review_slide .shuttleFrame a:first-child");
            $(".review_slide .shuttleFrame").css({"margin-left":"-430px"});
    
            $(".review_slide .shuttleFrame").stop().animate({ "margin-left":"0" }, 300, function(){
                chkSlideBtn = true;
            });
        }
    });

    // 다음 버튼 클릭 슬라이드
    $("#best_review .inner .next").click(function (){
        reviewNext();
    });

    // 마우스 올리면 자동 멈춤
    $("#best_review").mouseover(function () {
        clearInterval(autoSlide2);            
    });
    // 마우스 나가면 자동 슬라이드  
    $("#best_review").mouseout(function () {
        autoSlide2 = setInterval(reviewNext, 3000);
    });


    // 찜하기 버튼
    $("#section2 .btnArea a").click(function (){
        alert("로그인후에 이용해 주시길 바랍니다.");
    });
});

// 메인 전환형 슬라이드
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 1500,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: { 
        delay: 2500,
    }
});