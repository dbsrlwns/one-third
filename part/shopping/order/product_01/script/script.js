$(function (){
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
    $(".cartPopBtn a:last-child").click(function (e){
        e.preventDefault();
        $(".cartPopupBG").css({"display":"none"});
    });

    // 장바구니 팝업 닫기 버튼
    $(".PopClose").click(function (){
        $(".cartPopupBG").css({"display":"none"});
    });

});
