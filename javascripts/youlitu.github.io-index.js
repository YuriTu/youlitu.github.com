

  $(document).ready(function(){
    	$(".bg").interactive_bg(); // function call
	});
 
  // change background size on window resize
  	$(window).resize(function() {
      	$(".bg > .ibg-bg").css({
       		width: $(window).outerWidth(),
        	height: $(window).outerHeight()
      })
   })

// 按钮事件
// 
$(function  () {
  // body...
  $("#btn a").click(function() {
    /* Act on the event */
    $(this).addClass('click')
      .attr('backgroundColor', '#666666');
  });
})
