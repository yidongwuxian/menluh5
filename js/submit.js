$(function(){
    /*检测弹框可视区高度*/
    var screenHeight = $(window).height();
    $(".modal-content").css('height', screenHeight );
	$(".modal-body .hr-body").css('height', screenHeight/3 );
    $(".modal-body .hr-body a").css('height', screenHeight/3 );
	$(".modal-body .hr-body a>span").css('line-height', screenHeight/3 +'px' );
    /*检测弹框可视区高度 end*/
});
