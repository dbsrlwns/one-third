$(function () {
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

    // 유효성 검사
    let desc = $(this).siblings("b").text();
    
    $("#id").keyup(function (){
        let memChk = ["rjswmr","rjswmr1"];
        let id = $(this).val();
        let chkTF = true;
        let regExp = /[^a-z|A-Z|0-9]/;
        id = id.trim();

        if(id == ""){
            desc = "아이디를 입력해 주세요.";
            $(this).siblings("b").removeClass('on');
        } else if(id.length < 4 | id.length > 16){
            desc = "아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.";
            $(this).siblings("b").removeClass('on');
        } else if(regExp.test(id)){
            desc = "특수문자나 한글이 포함된 아이디는 사용할 수 없습니다.";
            $(this).siblings("b").removeClass('on');
        } else {
            desc = id + "는 사용 가능한 아이디입니다.";
            $(this).siblings("b").addClass('on');
        }
        $.each(memChk, function (i, v) {

            if (id == v) {
                desc = "이미 사용중인 아이디입니다.";
                $("#id").siblings("b").removeClass('on');
                chkTF = false;
            }

        });
        $(this).siblings("b").text(desc);

    });

    $("#password").keyup(function (){
        let pw = $(this).val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if(pw.length < 10 | pw.length > 16){
            desc = "비밀번호는 10 ~ 16자 이내로 입력해 주세요.";
        } else if(pw.search(/\s/) != -1 || num < 0 || eng < 0 || spe < 0){
            desc = "영문, 숫자, 특수문자를 혼합하여 입력해 주세요.";
        } else {
            desc = "";
        }
        $(this).siblings("b").text(desc);
    });

    $("#password_chk").keyup(function (){
        let pw = $("#password").val();
        let pwChk = $("#password_chk").val();
        if(pw == pwChk){
            desc = "";
        } else if(pwChk == ""){
            desc = "";
        } else {
            desc = "비밀번호가 일치하지 않습니다.";
        }
        $(this).siblings("b").text(desc);
    });

    $(".join_btn").click(function (){
        let a = $("#id").siblings("b").attr("class");
        let b = $("#password").siblings("b").text();
        let c = $("#password_chk").siblings("b").text();
        
        if(a != "on"){
            alert("아이디를 확인해주세요.");
            $("#id").focus();
            return false;
        } else if(b != ""){
            alert("비밀번호를 확인해주세요.");
            $("#password").focus();
            return false;
        } else if(c != ""){
            alert("비밀번호가 일치하지 않습니다.");
            $("#password_chk").focus();
            return false;
        }
    }); 

    
    // 전체선택
    $("#allChk").click(function (){
        $(".ag").prop('checked', this.checked);
    });
    
    let wholeChk = false;
    // 역선택
    $('.ag').click(function (){
        let len = $('.ag').length;
        let trueCnt = 0;
    
        for(let i=0;i<len;i++){
            let revChkTF = $(".ag").eq(i).prop("checked");
            if(revChkTF){
                trueCnt++;
            }
        }
        if(trueCnt == len){
            wholeChk = true;
        } else {
            wholeChk = false;
        }
        $("#allChk").prop("checked", wholeChk);
    });


    // 우편번호 레이어팝업 시작
    $("#zipcodeBtn").click(function(e) {
        e.preventDefault();
        $("#zipcodePopup").css({ "display": "block" });
    });

    // 새 우편번호 <=> 구) 우편번호 멀티탭 전환 시작
    $("#zipcodeTabArea").children("button").click(function () {

        // 탭버튼 스타일 전환 시작
        $("#zipcodeTabArea").children("button").removeClass("tabSelected");
        $(this).addClass("tabSelected");
        // 탭버튼 스타일 전환 끝

        // 지번/도로명 입력 힌트 안내문 시작
        let dataZipLink = $(this).attr("data-ziplink");
        dataZipLink = dataZipLink.trim();
        let roadNameHint = "";
        if (dataZipLink == "newZipcode") {
            roadNameHint = "도로명+건물번호(예:테헤란로5) | 읍/면/동/리+지번(예:서린동 154)"; 
            $("#oldAddr").css({"display": "none"});

        } else {
            roadNameHint = "도로명+건물번호(예:테헤란로5) | 읍/면/동/리+지번(예:상암동 1000)"; 
            $("#oldAddr").css({"display": "block"});
        }

        $("#addressHint").text(roadNameHint);
        // 지번/도로명 입력 힌트 안내문 끝

        // 지번주소/도로명주소 서브버튼 멀티탭 시작


        $("#zipcodePopup #oldAddr button").click(function(){
            $("#zipcodePopup #oldAddr button").removeClass("subTabSelected");
            $(this).addClass("subTabSelected");
        });
        // 지번주소/도로명주소 서브버튼 멀티탭 끝
    });
        // 새 우편번호 <=> 구) 우편번호 멀티탭 전환 끝

    // 우편번호 레이어팝업 끝
});

// 우편번호 검색 레이어 닫기
function fnClose() {
    document.getElementById("zipcodePopup").style.display = "none";
}