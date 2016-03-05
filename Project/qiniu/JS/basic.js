jQuery(document).ready(function($) {
	$("#send").click(function(event) {
		$("#albumView").load("ajaxDescription.html");
	});
	// m-container c-carousel c-control
	$(".c-left").click(function(event) {
		$()
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

	fileReaderPermission();
	inputFileSelect();
	fileLoadProgressBar();
	fileLoadThumb();
		

	

});