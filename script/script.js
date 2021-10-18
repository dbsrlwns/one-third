$(function (){
    // 검색 영역
    $(".icon").click(function (){
        $(".search").toggleClass('active');
        $(".clear").toggleClass('active');
    });
    $(".clear").click(function (){
        $("#mySearch").val("");
    });

    
    // 전환형 슬라이드 쇼 
    function fnSlide() {
        $("#mainSlide a:first-child").fadeOut(
            2000,
            function() {
                $("#mainSlide a:first-child").insertAfter("#mainSlide a:last-child");
            }
            );
        $("#mainSlide a:nth-child(2)").fadeIn(2000);
    }
    setInterval(fnSlide, 4000);

    // 스크롤 바텀 표시
    $(window).scroll(function (){
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom);
    });
    
});
