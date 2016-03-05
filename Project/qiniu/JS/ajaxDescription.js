jQuery(document).ready(function($) {
	carouselControl();
	downloadButton();
	function carouselControl() {
			var imgElement = $(".c-control").prev().children();
			var imgElementSrc = imgElement.attr('src');

			var srcPosition = imgElementSrc.slice(-5,-4 );
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
	function downloadButton() {
		var src = $("#ablumPhoto").attr('src');
		$(".i-download").attr('href',src);
	}
	// $(".c-control").bind('click', function(event) {
	// 	/* Act on the event */
	// 	var imgElement = $(".c-control").prev().children();
	// 	var imgElementSrc = imgElement.attr('src');

	// 	var srcPosition = imgElementSrc.slice(-5,-4 );
	// 	var newSrcNum = parseInt(srcPosition);
	// 	var newSrc = "";
	// 	// download button
	// 	// $(".i-download").attr('href', imgElementSrc);
	// 	$(".c-left").click(function(event) {			
	// 		newSrcNum--;
	// 		if (newSrcNum <0) {
	// 			alert("这是第一张~");
	// 			newSrcNum++;
	// 		}
	// 		newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
	// 		imgElement.attr('src', newSrc);
	// 		downloadButton();
	// 	});
	// 	$(".c-right").click(function(event) {			
	// 		newSrcNum++;
	// 		if (newSrcNum >9) {
	// 			alert("这是最后一张~");
	// 			newSrcNum--;
	// 		}
	// 		newSrc = "images/pic/img-"+(newSrcNum)+".jpg";
	// 		imgElement.attr('src', newSrc);
	// 		downloadButton();
	// 	});
	// });
});

