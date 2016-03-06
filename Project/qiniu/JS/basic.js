jQuery(document).ready(function($) {
	var clickSrc;
	var countItem = document.getElementsByClassName('item').length;
	// ajax读取详情页
	$("div.item").click(function(event) {
		$('#albumView').load('https://youlitu.github.io/Project/qiniu/ajaxDescription.html');
		clickSrc = $(this).children('img').attr('src');
	});
																				
	// 1.设置定时器，点击item后，把src换了	// 2.应该是因为DOM没有加载完，事件没有绑定上，但是下面的就用on绑定上了不是...	// 3.(╯‵□′)╯︵┻━┻ click都绑定上为什么load就不行啊

	// 新DOM生成后的图片与download按钮的src改变
	$('#albumView')
		.one('click', 'img#albumPhoto', function(event) {
		$("#albumPhoto").attr('src', clickSrc);
		$(".i-download").attr('href',clickSrc);
	})
		.on('click', '.c-control', function(event) {
		event.preventDefault();
		/* Act on the event */
		carouselControl();
	});

	// fix button
	$(".f-fix").click(function(event) {
		if ($(".f-button").is(':hidden')) {
				$("#plusButton")
					.fadeIn('100')
					.animate({"top":"50%"}, '400')
				$("#changeViewButton")
					.fadeIn('100')
					.animate({"top":"65%"}, '400')
			}else{
				$(".f-button")
					.animate({"top":"81%"}, '400')
					.fadeOut('100')					
			}
	});
	// $("f.fix").toggle(function() {
	// 	$("#plusButton").animate({"top":"50%"}, '400')
	// 	$("#changeViewButton").animate({"top":"65%"}, '400')
	// }, function() {
	// 	$(this).prev(".f-button")
	// 		.animate({"top":"81%"}, '400')
	// });
	
	// list view	
	$("#changeViewButton").click(function(event) {
		if ($(".m-container>div").is('div.row')) {
			 $(".row")
				.removeClass('row')
				.addClass('listView')
			$(this).con
		}else{
			$('.listView')
				.addClass('row')
				.removeClass('listView')
		}		 
	});
	
	// fileLoad
	$("#plusButton").click(function(event) {
		$(".mod-modal").fadeIn('400');
	});
	$(".close").click(function(event) {
		$(".mod-modal").fadeOut('400');
	});
	// file
	// fileURI的支持许可
	fileReaderPermission();
	// 多重选择的名称信息
	inputFileSelect();
	// 显示进度条
	fileLoadProgressBar();
	// 显示缩略图
	fileLoadThumb();

	function carouselControl() {
		var imgElement = $(".c-control").prev().children();
		var imgElementSrc = imgElement.attr('src');
		var srcPosition = imgElementSrc.toString().slice(-5,-4 );
		var newSrcNum = parseInt(srcPosition);
		var newSrc = "";
		$(".c-left").click(function(event) {			
			newSrcNum--;
			if (newSrcNum <0) {
				console.log("first photo");
				newSrcNum = countItem-1;
			}
			newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
			imgElement.attr('src', newSrc);
			downloadButton();
		});
		$(".c-right").click(function(event) {			
			newSrcNum++;
			if (newSrcNum >(countItem-1) ) {
				console.log("last photo");
				newSrcNum = 0;
			}
			newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
			imgElement.attr('src', newSrc);
			downloadButton();
		});				
	}	
	function downloadButton() {
		var src = $("#albumPhoto").attr('src');
		$(".i-download").attr('href',src);
	}
});