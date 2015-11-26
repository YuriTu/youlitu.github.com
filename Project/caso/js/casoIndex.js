// date:2015-11-26;
// author:Yuri;



$(function () {
	// 查找栏的图片轮播
	navBGChange();
	// major 的背景图
	majorBG();



	function majorBG () {
		// row1
		var $law = $("#law").parent("div.col-md-4");
		$law.css('background-image', 'url(./images/major-icon/major-icon-1.jpg)');
		var $CS = $("#CS").parent("div.col-md-4");
		$CS.css('background-image', 'url(./images/major-icon/major-icon-2.jpg)');
		var $engineer = $("#engineer").parent("div.col-md-4");
		$engineer.css('background-image', 'url(./images/major-icon/major-icon-3.jpg)');
		var $arch = $("#arch").parent("div.col-md-4");
		$arch.css('background-image', 'url(./images/major-icon/major-icon-4.jpg)');
		var $art = $("#art").parent("div.col-md-4");
		$art.css('background-image', 'url(./images/major-icon/major-icon-5.jpg)');
		var $business = $("#business").parent("div.col-md-4");
		$business.css('background-image', 'url(./images/major-icon/major-icon-6.jpg)');
	}




	function navBGChange () {
		var navBGNum = 2;
		setInterval(function () {
			
			$("#navBG")
				.animate({opacity:0},500,function () {
					$(this)
						.css('background-image', 'url(./images/navBGSm-'+navBGNum+'.jpg)')
						.animate({opacity:1},500)
				})
			navBGNum++;
			if (navBGNum > 4) {
				navBGNum = 1;
			};
		},5000)
	}
	





})

