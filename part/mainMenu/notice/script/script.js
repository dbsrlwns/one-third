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

    // 공지사항 게시판
    let array = [
        ["일반", "[공지] 삼분의일 가격 인상 안내 (08. 02~)", "2021.07.23", "164"],
        ["일반", "A/B 타입 매트리스가 새 버전으로 찾아옵니다.", "2021.02.15", "145"],
        ["일반", "고객센터 10월 8일(목) 휴무 안내 및 운영시간 변경", "2020.10.06", "29"],
        ["일반", "추석 배송 안내", "2020.09.18", "43"],
        ["배송지연", "토퍼 제품 택배사 변경 및 배송 지연 안내", "2020.09.16", "27"],
        ["배송지연", "바닥토퍼 슈퍼싱글(SS) 제품 출고일정 안내", "2020.09.11", "24"],
        ["배송지연", "코로나 및 태풍으로 인한 택배 배송 일정 안내", "2020.09.02", "14"],
        ["상품", "삼분의일 침대토퍼 겉커버 추가 배송 공지", "2020.08.14", "37"],
        ["일반", "2020년 8월 고객센터 휴무 및 택배 배송 안내", "2020.08.05", "43"],
        ["일반", "방수커버 재입고 안내", "2020.06.07", "402"],
        ["상품", "라돈 관련 안내", "2018.05.18", "926"],
    ]; 
    let res = "";
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(j == 0){
                res += "<tr><td>" + array[i][j] + "</td>";
            } else if(j == 1){
                res += "<td><a href='#'>" + array[i][j] + "</a></td>";
            } else if(j == 2){
                res += "<td>" + array[i][j] + "</td>";
            } else if(j == 3){
                res += "<td>" + array[i][j] + "</td>";
                res += "</tr>"
            }
        }
    }
    $(".noticeTbody").html(res);

    // 공지사항 검색 기능
    $(".textSearchArea button").click(function (){
        let k = $("#textSearch").val();
        // console.log(k);
        $("tr").hide();
        var temp = $("tr:contains('" + k + "')");
        $(temp).show();
    });
});