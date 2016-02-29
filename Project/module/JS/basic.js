$(function () {
	// dropdown-menu
	dropdown();


	// method
	function dropdown() {
		$(".nav-title").bind('click', function() {
			var $dropdown = $(this).next(".dropdown-menu");
			var $caret = $(this).children('.caret');
			if ($dropdown.hasClass('block')) {
				$dropdown.removeClass('block');
				$caret.removeClass('active');
			}else{
				$dropdown.addClass('block');
				$caret.addClass('active');
			}
		});
	}
	
})
