$(function (){
    $(".cart_tab ul li").click(function (){
        $(".cart_tab ul li").removeClass('active');
        $(this).addClass('active');
    });
});