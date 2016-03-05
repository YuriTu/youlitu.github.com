jQuery(document).ready(function($) {
	var clickSrc;
	$("div.item").click(function(event) {
		$('#albumView').load('https://youlitu.github.io/Project/qiniu/ajaxDescription.html');
		clickSrc = $(this).children('img').attr('src');
		alert(clickSrc);
		// $("#albumPhoto").attr('src', clickSrc);
	});
	$("#albumView").on('load', '#albumPhoto', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("#albumPhoto").attr('src', clickSrc);
	});
	// $(".c-carousel")
	// 	.load(function() {
	// 		 Act on the event 
	// 		$("#albumPhoto").attr('src', clickSrc);
	// 	});
	$(document).on('click', '.c-control', function(event) {
		event.preventDefault();
		/* Act on the event */
		carouselControl();
		// downloadButton();
	});
	$(document).on('click', '.i-download', function(event) {
		// event.preventDefault();
		/* Act on the event */
		downloadButton();
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
	
	// carouselControl();
	// downloadButton();
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
		// download button
		// $(".i-download").attr('href', imgElementSrc);
		$(".c-left").click(function(event) {			
			newSrcNum--;
			if (newSrcNum <0) {
				alert("这是第一张~");
				newSrcNum++;
			}
			newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
			imgElement.attr('src', newSrc);
			downloadButton();
		});
		$(".c-right").click(function(event) {			
			newSrcNum++;
			if (newSrcNum >9) {
				alert("这是最后一张~");
				newSrcNum--;
			}
			newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
			imgElement.attr('src', newSrc);
			downloadButton();
		});
				
	}
	// $(".i-download").bind('click', function downloadButton(event) {
	// 	var src = $("#albumPhoto").attr('src');
	// 	$(".i-download").attr('href',src);
	// });
	function downloadButton() {
		var src = $("#albumPhoto").attr('src');
		$(".i-download").attr('href',src);
	}
});