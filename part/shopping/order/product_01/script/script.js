$(function (){
    $(".bigImg").elevateZoom({
        zoomWindowWidth:400,
        zoomWindowHeight:400,
        scrollZoom : true
    });

    $(".thumbImg").click(function (){
        let src = $(this).attr('src');
        $(".bigImg").attr('src', src);
        $(".bigImg").attr('data-zoom-image', src);
    });
});