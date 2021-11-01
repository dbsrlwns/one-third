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

    // 해외배송상품
    $(".cart_tab li:first-child").click(function (){
        $(".empty").css({"display":"none"});
        $("#cartArea").css({"display":"table"});
    });

    $(".cart_tab li:last-child").click(function (){
        $(".empty").css({"display":"block"});
        $("#cartArea").css({"display":"none"});
    });

    // 장바구니 탭 메뉴
    $(".cart_tab ul li").click(function (){
        $(".cart_tab ul li").removeClass('active');
        $(this).addClass('active');
    });

    // 체크박스 모두 선택
    $("#chkAll").click(function (){
        $(".goodsChk").prop('checked', this.checked);
    });

    // 체크박스 역선택
    let wholeChk = false;

    $(".goodsChk").click(function (){
        let len = $(".goodsChk").length;
        let trueCnt = 0;

        for(let i=0;i<len;i++){
            let revChkTF = $(".goodsChk").eq(i).prop('checked');
            if(revChkTF){
                trueCnt++;
            }
        }
        if(trueCnt == len){
            wholeChk = true;
        } else {
            wholeChk = false;
        }
        $("#chkAll").prop('checked', wholeChk);
    });
    
    // 판매가 천단위 표시
    let price = $(".numComma").text();
    price = price.replace(/,/g, "");
    price = parseInt(price);
    console.log(price);
    price = price.toLocaleString();
    $(".numComma").text(price);
    $(".priceSum").text(price);
    
    
    // 수량 증가 버튼
    let count = $(".count").val();
    count = parseInt(count);
    
    $(".increase").click(function (){
        if(count >= 20){
            alert("최대 주문수량은 20개 입니다.");
        } else {
            count++;
            $(".count").val(count);
        }
    });
    
    // 수량 감소 버튼
    $(".decrease").click(function (){
        if(count <= 1){
            alert("최소 주문수량은 1개 입니다.");
        } else {
            count--;
            $(".count").val(count);
        }
    });
    
});
