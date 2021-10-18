$(function (){
    $(".icon").click(function (){
        $(".search").toggleClass('active');
    });
    $(".clear").click(function (){
        $("#mySearch").val("");
    });
});
