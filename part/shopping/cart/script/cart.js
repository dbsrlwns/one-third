$(function () {
    // 검색 영역
    $(".icon").click(function () {
        $(".search").toggleClass('active');
        $(".clear").toggleClass('active');
    });
    $(".clear").click(function () {
        $("#mySearch").val("");
    });

    // 마이페이지
    $("#lnbMenu li:last-child").click(function () {
        alert("로그인후에 이용해 주시길 바랍니다.");
    });

    // 스크롤탑 버튼
    $(".scrollTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    // window 스크롤값
    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();
        // console.log(wScroll);
        if (wScroll >= 300) {
            $(".scrollTop").addClass('active');
        } else {
            $(".scrollTop").removeClass('active');
        }
    });

    // 해외배송상품
    $(".cart_tab li:first-child").click(function () {
        let listCnt = $("#cartArea tbody tr").length;
        if (listCnt == 0) {
            $(".empty").css({
                "display": "block"
            });
        } else {
            $(".empty").css({"display": "none"});
            $("#cartArea").css({"display": "table"});
            $("#totalPayment").css({"display":"table"});
            $(".allDelete").css({"display":"block"});
        }
    });

    $(".cart_tab li:last-child").click(function () {
        $(".empty").css({"display": "block"});
        $("#cartArea").css({"display": "none"});
        $("#totalPayment").css({"display":"none"});
        $(".allDelete").css({"display":"none"});
    });

    // 장바구니 탭 메뉴
    $(".cart_tab ul li").click(function () {
        $(".cart_tab ul li").removeClass('active');
        $(this).addClass('active');
    });

    // 체크박스 모두 선택
    $("#chkAll").click(function () {
        $(".goodsChk").prop('checked', this.checked);
    });

    // 체크박스 역선택
    let wholeChk = false;

    $(".goodsChk").click(function () {
        let len = $(".goodsChk").length;
        let trueCnt = 0;

        for (let i = 0; i < len; i++) {
            let revChkTF = $(".goodsChk").eq(i).prop('checked');
            if (revChkTF) {
                trueCnt++;
            }
        }
        if (trueCnt == len) {
            wholeChk = true;
        } else {
            wholeChk = false;
        }
        $("#chkAll").prop('checked', wholeChk);
    });

    // 상품 개수 표시
    function fnGoodsCnt() {
        let listCnt = $("#cartArea tbody tr").length;
        $(".goodsCnt").text(listCnt);
    }
    fnGoodsCnt();

    // 판매가 천단위 표시
    let price = $(".listPrice1").text();
    price = price.replace(/,/g, "");
    price = parseInt(price);
    price = price.toLocaleString();
    $(".sum1").text(price);

    // 수량 증가 버튼
    $("#cartArea tbody tr:first-child .increase").click(function () {
        let count = $(".cnt1").val();

        if (count >= 20) {
            alert("최대 주문수량은 20개 입니다.");
        } else {
            count++;
            $(".cnt1").val(count);
        }
        count = parseInt(count);
        price = price.replace(/,/g, "");
        let sum = price * count;
        sum = sum.toLocaleString();
        $(".sum1").text(sum);
    });

    // 수량 감소 버튼
    $("#cartArea tbody tr:first-child .decrease").click(function () {
        let count = $(".cnt1").val();
        
        if (count <= 1) {
            alert("최소 주문수량은 1개 입니다.");
        } else {
            count--;
            $(".cnt1").val(count);
        }
        price = price.replace(/,/g, "");
        let sum = price * count;
        sum = sum.toLocaleString();
        $(".sum1").text(sum);
    });

    // 판매가 천단위 표시
    let price2 = $(".listPrice2").text();
    price2 = price2.replace(/,/g, "");
    price2 = parseInt(price2);
    price2 = price2.toLocaleString();
    $(".sum2").text(price2);

    // 수량 증가 버튼
    $("#cartArea tbody tr:last-child .increase").click(function () {
        let count = $(".cnt2").val();

        if (count >= 20) {
            alert("최대 주문수량은 20개 입니다.");
        } else {
            count++;
            $(".cnt2").val(count);
        }
        count = parseInt(count);
        price2 = price2.replace(/,/g, "");
        let sum = price2 * count;
        sum = sum.toLocaleString();
        $(".sum2").text(sum);
    });

    // 수량 감소 버튼
    $("#cartArea tbody tr:last-child .decrease").click(function () {
        let count = $(".cnt2").val();
        
        if (count <= 1) {
            alert("최소 주문수량은 1개 입니다.");
        } else {
            count--;
            $(".cnt2").val(count);
        }
        price2 = price2.replace(/,/g, "");
        let sum = price2 * count;
        sum = sum.toLocaleString();
        $(".sum2").text(sum);
    });

    $(".increase").click(function(){
        fnTotalPrice();
    });

    $(".decrease").click(function(){
        fnTotalPrice();
    });

    function fnTotalPrice(){
        let listCnt = $("#cartArea tbody tr").length;
        console.log(listCnt);
        if(listCnt == 2){
            let sum1 = $(".sum1").text();
            let sum2 = $(".sum2").text();
            sum1 = sum1.replace(/,/g, "");
            sum1 = parseInt(sum1);
            sum2 = sum2.replace(/,/g, "");
            sum2 = parseInt(sum2);
            total = sum1 + sum2;
            total = total.toLocaleString();
            $(".totalPrice").text(total);
        } else {
            let a = $("#cartArea tbody tr:first-child").children(".priceSum").text();
            $(".totalPrice").text(a);
        }
    }
    fnTotalPrice();

    // 주문, 관심상품 버튼
    $(".order").click(function () {
        let url = "../../member/login/login.html";
        alert("로그인후에 이용해 주시길 바랍니다.");
        $(location).attr('href', url);
    });

    // 삭제 버튼
    $(".delete").click(function () {
        let listDel = confirm("선택하신 상품을 삭제하시겠습니까?");
        let list = $(this).parent("td").parent("tr");
        if(listDel){
            list.remove();
        } else {
            return false;
        }
        fnGoodsCnt();

        // 상품 리스트 없을 시
        let listCnt = $("#cartArea tbody tr").length;
        
        if (listCnt == 0) {
            $(".empty").css({"display": "block"});
            $("#cartArea").remove();
            $("#totalPayment").remove();
            $(".allDelete").remove();
        }

        // 삭제 시 가격 빼기
        let price = $(this).parent("td").siblings(".priceSum").text();
        price = price.replace(/,/g, "");
        price = parseInt(price);
        let totalPrice = $(".totalPrice").eq(1).text();
        totalPrice = totalPrice.replace(/,/g, "");
        totalPrice = parseInt(totalPrice);
        let sumPrice = totalPrice - price;
        sumPrice = sumPrice.toLocaleString();
        $(".totalPrice").text(sumPrice);
    });

    // 장바구니 전체 삭제
    $(".allDelete").click(function (){
        let cartEmpty = confirm("장바구니를 비우시겠습니까?");
        if(cartEmpty){
            $("#cartArea").remove();
            $(this).remove();
            $("#totalPayment").remove();
            $(".empty").css({"display":"block"});
            $(".goodsCnt").text(0);
        } else {
            return false;
        }
    });

    // 쇼핑 계속하기
    $(".shopContinue").click(function (){
        let url = "../../mainMenu/allProducts/allProducts.html";
        $(location).attr('href', url);
    });

    // 전체 상품 주문
    $(".allGoods").click(function (){
        $("#chkAll").prop('checked', true);
        $(".goodsChk").prop('checked', true);
        let url = "../../member/login/login.html";
        let goodsChk = $(".goodsChk").prop('checked');
        
        if(goodsChk){
            $(location).attr('href', url);
        } else {
            alert("선택된 상품이 없습니다.");
        }
    });

    // 선택 상품 주문
    $(".selectGoods").click(function (){
        let chkboxCnt = $(".goodsChk:checked").length;
        if(chkboxCnt > 0){
            let url = "../../member/login/login.html";
            $(location).attr('href', url);
        } else {
            alert("선택된 상품이 없습니다.");
        }
    });
});