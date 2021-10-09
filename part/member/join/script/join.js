$(function () {
    // 전체선택
    $("#allChk").click(function (){
        $(".ag").prop('checked', this.checked);
    
        // let chkValue = $(this).prop('checked');
        // $(".ag").prop("checked", chkValue);
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

        // 배열없이 선택방법
        // let chkTF = false;
        // let dom = document.getElementsByClassName("ag");
        // let chk1 = dom[0].checked;
        // let chk2 = dom[1].checked;

        // if(chk1 && chk2){
        //     chkTF = true;
        // }
        // $("#allChk").prop('checked', chkTF);
    });


    // 우편번호 레이어팝업 시작
    $("#zipcodeBtn").click(function(e) {
        e.preventDefault();
        $("#zipcodePopup").css({ "display": "block" });
    });

    // 새 우편번호 <=> 구) 우편번호 멀티탭 전환 시작
    $("#zipcodeTabArea").children("button").click(function () {

        // 탭버튼 스타일 전환 시작
        $("#zipcodeTabArea").children("button")
                            .removeClass("tabSelected");
        $(this).addClass("tabSelected");
        // 탭버튼 스타일 전환 끝

        // 지번/도로명 입력 힌트 안내문 시작
        let roadNameHint = "";
        let dataZipLink = $(this).attr("data-ziplink");
        dataZipLink = dataZipLink.trim();
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
            $("#zipcodePopup #oldAddr button")
                    .removeClass("subTabSelected");
            $(this).addClass("subTabSelected");
        });
        // 지번주소/도로명주소 서브버튼 멀티탭 끝

    });
        // 새 우편번호 <=> 구) 우편번호 멀티탭 전환 끝


    // 우편번호 레이어팝업 끝
});

// 우편번호 검색 레이어 닫기 시작
function fnClose() {
    document.getElementById("zipcodePopup").style.display = "none";
}