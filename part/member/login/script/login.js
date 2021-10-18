$(function (){
    // 검색 영역
    $(".icon").click(function (){
        $(".search").toggleClass('active');
        $(".clear").toggleClass('active');
    });
    $(".clear").click(function (){
        $("#mySearch").val("");
    });

    // 로그인 탭 버튼
    $(".tabs_button li").click(function (){
        $(".tabs_button li").removeClass('active');
        $(this).addClass('active');
    });

    // 회원
    $(".tabs_button li:first-child").click(function (){
        $(".non-member").css({"display":"none"});
        $(".member").css({"display":"block"});
    });

    // 비회원
    $(".tabs_button li:last-child").click(function (){
        $(".member").css({"display":"none"});
        $(".non-member").css({"display":"block"});
    });

    // 유효성 검사
    $(".loginBtn").click(function (){
        let id = $("#id").val();
        let pw = $("#pw").val();
        
        if(id == ""){
            alert("아이디를 입력해 주세요.");
            $("#id").focus();
        } else if(pw == ""){
            alert("비밀번호를 입력해 주세요.");
            $("#pw").focus();
        } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            $("#id").val("");
            $("#pw").val("");
            $("#id").focus();
            // $("form").submit();
        }
    });

    // 페이스북 윈도우 창
    $(".facebook").click(function (){
        let url = "https://www.facebook.com/login.php?skip_api_login=1&api_key=705534492950181&kid_directed_site=0&app_id=705534492950181&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D705534492950181%26scope%3Dpublic_profile%252C%2Bemail%26state%3D0db45046525b0dcb733d9752631ecfc6f29ca73ec6032659c9fb7e40ac91280102a958044486235cb4703ecc60abacd6dc0f7a5c774e2ff9dc62a56cf47c4eea0cd78f011cc239760ec1e017073be82db64a39e10196624dfaebdc3dd04bc61d2c8c32c267c4a6c0c0669b631b71937910ee3ea741df7aa2f9c6e207956bbe0e%26redirect_uri%3Dhttps%253A%252F%252Fwww.look-n-fit.com%252FApi%252FMember%252FOauth2ClientCallback%252Ffacebook%252F%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D01bc16c5-7043-414e-85aa-77f1e1872811%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.look-n-fit.com%2FApi%2FMember%2FOauth2ClientCallback%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D0db45046525b0dcb733d9752631ecfc6f29ca73ec6032659c9fb7e40ac91280102a958044486235cb4703ecc60abacd6dc0f7a5c774e2ff9dc62a56cf47c4eea0cd78f011cc239760ec1e017073be82db64a39e10196624dfaebdc3dd04bc61d2c8c32c267c4a6c0c0669b631b71937910ee3ea741df7aa2f9c6e207956bbe0e%23_%3D_&display=page&locale=ko_KR&pl_dbl=0";
        let name = "facebook";
        let size = "width=650, height=630, top=150, left=600";
        window.open(url, name, size);
    });

    // 카카오 윈도우 창
    $(".kakao").click(function (){
        let url = "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.look-n-fit.com%252FApi%252FMember%252FOauth2ClientCallback%252Fkakao%252F%26client_id%3D8bca9a0001e08bf1d184ba6d6ad9f9ac";
        let name = "kakao";
        let size = "width=450, height=500, top=250, left=750";
        window.open(url, name, size);
    });
});