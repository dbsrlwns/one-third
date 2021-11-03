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

    // 순서 목록
    $(".sequence ul li").click(function (e){
        e.preventDefault();
        $(".sequence ul li").removeClass('active');
        $(this).addClass('active');
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

    // 갤러리 게시판 배열
    let array = [
        ["fabric01/fabric01.html", "삼분의일 매트리스 쿨매트", 99750, 105000, 5],
        ["fabric02/fabric02.html", "삼분의일 제습시트", 60000, 75000, 20],
        ["fabric03/fabric03.html", "삼분의일 방수커버", 36000, 40000, 10]
    ];
    let res = "";
    
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(j == 0){
                res += "<a href='../../shopping/order/" + array[i][j] + "' class='gallery_area'>";
                res += "<div class='img_area'>";
                res += "<div class='img'></div>";
                res += "</div>"
            } else if(j == 1){
                res += "<div class='text'>";
                res += "<p class='title'>" + array[i][j] + "</p>";
            } else if(j == 2){
                res += "<p class='price_area'>";
                res += "<span class='sale numComma'>" + array[i][j] + "</span>";
            } else if(j == 3){
                res += "<span class='consumer numComma'>" + array[i][j] + "</span>";
            } else if(j == 4){
                res += "<span class='percent'>" + array[i][j] + "</span></p>";
                res += "</div>";
            }
        }
        res += "</a>";
    }
    $(".gallery_list").html(res);

        // 갤러리 게시판 천단위 구분
        let numDom = document.getElementsByClassName("numComma");
        let tempNum;
        
        for(let i=0;i<numDom.length;i++){
            tempNum = Number(numDom[i].innerText);
            numDom[i].innerText = tempNum.toLocaleString();
        }
});