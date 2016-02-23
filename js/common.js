$(function(){
	//鼠标滚动,顶部导航菜单变为固定在顶部显示
	var hdNav = $(".m_tt");
	$(window).bind('scroll', function() {
	      if ( $(document).scrollTop()>100 ) {
	        hdNav.addClass("fixed");
	      }else{
	        hdNav.removeClass("fixed");
	      }
    });

	/*下载APP*/
	var browser = {
		versions: function() {
			var u = navigator.userAgent, app = navigator.appVersion;
			return {
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
				android: u.indexOf('Android') > -1, 
				iPhone: u.indexOf('iPhone') > -1  
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}

	var qcode = $("#downloadBtn");

	qcode.click(function(){
		if (browser.versions.ios || browser.versions.iPhone) {
			window.location.href="https://itunes.apple.com/cn/app/rar-jie-ya-wang-hao-yong-mian/id1071663619?mt=12";
		}
		else if (browser.versions.android) {
			window.location.href="http://xxx/xxx.apk";
		}
	});
	/*下载APP end*/

	/*检测弹框可视区高度*/
    var screenHeight = $(window).height();
    $(".modal-content").css('height', screenHeight );
    $("#tabCarousel1 .carousel-inner").css('height', screenHeight -83 +'px' );
	$("#tabCarousel2 .carousel-inner").css('height', screenHeight -83 +'px' );

	$("#tabCarousel3 .carousel-inner").css('height', screenHeight -83 +'px' );
	$("#tabCarousel4 .carousel-inner").css('height', screenHeight -83 +'px' );

	$("#tabCarousel5 .carousel-inner").css('height', screenHeight -83 +'px' );
	$("#tabCarousel6 .carousel-inner").css('height', screenHeight -83 +'px' );
    /*检测弹框可视区高度 end*/

});