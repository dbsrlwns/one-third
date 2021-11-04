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
    
    // 이미지 줌 효과
    $(".bigImg").elevateZoom({
        zoomWindowWidth:400,
        zoomWindowHeight:400,
        scrollZoom : true
    });
    
    // 서브 이미지 클릭 시 메인 이미지 변경
    $(".thumbImg").click(function (){
        let src = $(this).attr('src');
        $(".bigImg").attr('src', src);
        $(".bigImg").attr('data-zoom-image', src);
    });

    // 상품정보 이름 바꾸기
    let title = $(".infoArea h2").text();
    $(".product_title").text(title);

    // ----- 가격 계산 --------
    let count = $(".count").val();
    let price = $(".price").text();
    let totalPrice = $(".total_price").text();
    let totalCount = $(".total_count").text();
    $(".list_price").text(price);
    price = price.replace(/,/g, "");  // 천단위 구분 쉼표 공백으로 변환
    
    // 주문 수량 증가 버튼
    $(".increase").click(function (e){
        e.preventDefault();
        fnIncrease();
    });
    
    function fnIncrease() {
        if(count >= 20){
            alert("최대 주문수량은 20개 입니다.");
        } else {
            count++;
            $(".count").val(count);
        }
        fnPrice();
    }

    // 주문 수량 감소 버튼
    $(".decrease").click(function (e){
        e.preventDefault();
        fnDecrease();
    });

    function fnDecrease() {
        if(count <= 1){
            alert("최소 주문수량은 1개 입니다.");
        } else {
            count--;
            $(".count").val(count);
        }
        fnPrice();
    }

    function fnPrice(){
        // 개수에 따른 가격 변경
        let sum = price * count;
        sum = sum.toLocaleString();
        $(".list_price").text(sum);
        $(".total_price").text(sum);
        $(".total_count").text(count);
    }
    

    // 리스트 추가 
    $("#product_option").change(function (){
        fnOption();
    });
    
    function fnOption(){
        var val = $("#product_option").val();

        if(val == 2){
            $(".option_tbl").css({"display":"block"});
            let sum = price * count;
            sum = sum.toLocaleString();
            $(".list_price").text(sum);
            $(".total_price").text(sum);
            $(".total_count").text(count);
        }
    }

    // 리스트 삭제
    $(".list_delete img").click(function (){
        $(".option_tbl").css({"display":"none"});
        $(".total_price").text(totalPrice);
        $(".total_count").text(totalCount);
    
        $("#product_option").val(0);
    });



    // 장바구니 버튼
    $(".cartBtn a").click(function (e){
        e.preventDefault();
        var val = $('#product_option').val();
        
        if(val == 0){
            alert("필수 옵션을 선택해주세요.");
            $("#product_option").focus();
        } else {
            $(".cartPopupBG").css({"display":"block"});
        }
    });
    
    // 바로 구매하기 버튼
    $(".purchaseBtn").click(function (e){
        var val = $('#product_option').val();
        
        if(val == 0){
            alert("필수 옵션을 선택해주세요.");
            $("#product_option").focus();
            e.preventDefault();
        } else {
            alert("로그인 후에 이용해 주시기 바랍니다.");
        }
    });

    // 관심상품등록 버튼
    $(".interestedBtn").click(function (){
        alert("로그인 후에 이용해 주시기 바랍니다.");
    });

    // 쇼핑 계속하기 버튼
    $(".cartPopBtn a:first-child").click(function (e){
        e.preventDefault();
        $(".cartPopupBG").css({"display":"none"});
    });

    // 장바구니 팝업 닫기 버튼
    $(".PopClose").click(function (){
        $(".cartPopupBG").css({"display":"none"});
        $(".review_popupBG").css({"display":"none"});
    });

    // 리뷰 이미지 팝업 
    $(".review_img").click(function (){
        $(".review_popupBG").css({"display":"block"});
        let reviewImg = $(this).children("img").attr('src');
        let reviewAlt = $(this).children("img").attr('alt');
        let popupImg = $(".mainImg").children("img").attr('src');
        let popupAlt = $(".mainImg").children("img").attr('alt');
        let popupTitle = $(".infoArea").children("h2").text();
        let rating = $(this).parent("div").parent("div").siblings("div").children("span").text();
        let popText = $(this).siblings("p").text();
        let write = $(this).parent("div").siblings("div.user").children("ul").children("li:first-child").children("span").text();
        let date = $(this).parent("div").siblings("div.user").children("ul").children("li:last-child").children("span").text();

        $(".reviewPop_img").children("img").attr('src', reviewImg);
        $(".reviewPop_img").children("img").attr('alt', reviewAlt);
        $(".popup_img").children("img").attr('src', popupImg);
        $(".popup_img").children("img").attr('alt', popupAlt);
        $(".pop_title").children("p").text(popupTitle);
        $(".pop_title").children("span").text(rating);
        $(".pop_title").children("ul").children("li:first-child").text(write);
        $(".pop_title").children("ul").children("li:last-child").text(date);
        $(".pop_text").children("p").text(popText);
    });

    // 베스트 리뷰 다음 슬라이드
    $(".rating_right .next").click(function (){
        $(".shuttleFrame").stop().animate({
            "margin-left":"-111px"
        },
        1000,
        function (){
            $(".shuttleFrame>a:first-child").insertAfter(".shuttleFrame>a:last-child");
            $(".shuttleFrame").css({
                "margin-left":"0"
            });
        });
    });

    // 베스트 리뷰 이전 슬라이드
    $(".rating_right .prev").click(function (){
        $(".shuttleFrame").stop().css({"margin-left": "-111px"});
        $(".shuttleFrame>a:last-child").insertBefore(".shuttleFrame>a:first-child");
        $(".shuttleFrame").animate({
            "margin-left":"0"
        },
        1000);
    });

    // 인디케이터 버튼
    $(".index a").click(function (e){
        e.preventDefault();
        $(".index a").removeClass('active');
        $(this).addClass('active');
    });
    $(".first").click(function (e){
        e.preventDefault();
        $(".index a").removeClass('active');
        $(".index li:first-child a").addClass('active');
    });
    $(".last").click(function (e){
        e.preventDefault();
        $(".index a").removeClass('active');
        $(".index li:last-child a").addClass('active');
    });
    $(".prev, .next").click(function (e){
        e.preventDefault();
    });

    // Q&A 비밀글
    $(".secret").click(function (e){
        e.preventDefault();
        alert("비공개 문의내역은 작성자 본인만 확인하실 수 있습니다.");
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

    // 리뷰 영역 탭 버튼
    $(".review_tab li").click(function (){
        $(".review_tab li").removeClass('active');
        $(this).addClass('active');
    });

    // 좋아요 버튼
    $(".like a").click(function (e){
        e.preventDefault();
        $(this).toggleClass('active');

        let attr = $(this).attr("class");
        let likeNum = $(this).siblings("span").text();
        likeNum = parseInt(likeNum);

        if(attr == 'active'){
            likeNum = likeNum + 1;
        } else {
            likeNum = likeNum - 1;
        }
        $(this).siblings("span").text(likeNum);
    });

    // QnA 답변
    $(".QnA_tbl tbody tr:nth-child(1) a").click(function (e){
        e.preventDefault();
        $(".ac1").toggleClass('active');
    });

    $(".QnA_tbl tbody tr:nth-child(3) a").click(function (e){
        e.preventDefault();
        $(".ac2").toggleClass('active');
    });
});
