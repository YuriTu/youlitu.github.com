
// 全局函数


// sidebar hover高亮事件
$(function  () {
  // sidebar hover高亮事件
  $("#homeList li").hover(function() {
    /* Stuff to do when the mouse enters the element */
    $(this)
      
      .stop(true)
      .animate({"letterSpacing":"5px"}, 500)
      .css('backgroundColor', '#29a3cc');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this)
      
      .stop(true)
      .animate({"letterSpacing":"0px"}, 500)
      .css('backgroundColor', '#0099CC');
  });

  // 点击事件
  // home
  $("#homeList li a").click(function() {
    /* Act on the event */
    var show_width = $("#introduce ul li").width();
    // console.log(show_width);
    $("#introduce ul li[display!=none]")
      .stop(true)  
      .animate({        
        left : show_width +  "px"},
        1000, function() {
        /* stuff to do after animation is complete */
        $(this).css('display', 'none')
        .end();
      });
    // console.log("#page_" + this.id);
    $("#page_" + this.id)
      .fadeIn("fast")
      // .stop(true) 
      .animate({left : "0px"}, 1000)
    $("#navList")
      .css('aria-expanded', 'false');
  });

  // 项目title展示事件  

  // 为各个项目添加样式
  $("#projectOne")
    .attr('title', '这是我的第一个网站项目，是第一次使用HTML + CSS + 原生JS搭建项目，涉及了一些基础的js交互操作，以及基础的项目管理的知识，因为没有做文件压缩图片压缩等优化，所以访问速度较慢。 避免了新手常见的滥用class div 等误区。');
  $("#projectTwo")
    .attr('title', '个人主页的搭建，使用了JQ以及其他插件、库，丰富了网页内容与样式，使用了ECharts搭建文字云，以及Pete Rojwongsuriya的动态背景效果，熟悉和巩固了 JQ 的各种API,为了日后的维护没有压缩各类css和js文件。');
  $("#projectThree")
    .attr('title', '学会使用bootstrap的栅格系统创建响应式页面，在大屏、中屏、小屏有不同的页面，仿照他人的页面进行架设，通过看他人的代码，补足了一些知识漏洞，改善了自己的代码风格，以及对浏览器兼容有了更好的理解。');
  $("#projectFour")
    .attr('title', '公司试用期主页，第一次和设计人员合作，感觉设计很奇怪，字号间距等混乱而不统一，感觉响应式会比较难做。');
    $("#projectFive")
      .attr('title', '学校P2P下载站的优化以及前端重构，第一次开始接触前后端合作');
  // 项目title展示
  
  $("div.projectShow")
    .mouseover(function(event) {
      /* Act on the event */
      // 创建
      // var projectTipId = this.id + "Tip";
      var x = -290,y = 20;
      this.myTitle = this.title;
      this.title = "";
      var projectTip = "<div id = 'projectTip' >" + this.myTitle +"</div>";
      $("#page_project").append(projectTip);
      $("#projectTip")
            .css({
            "top": y+event.pageY + "px",
            "left": x+event.pageX + "px"
        }).show("fast");
      // $("#projectTip").remove();
  })
    .mouseout(function(event) {
        /* Act on the event */
        this.title = this.myTitle;
        $("#projectTip").remove();
    })
    
    .mousemove(function(event) {
        /* Act on the event */
        var x = -290,y = 20;
      $("#projectTip")
            .css({
            "top": y+event.pageY + "px",
            "left": x+event.pageX + "px"
        });
    });


    // contact 页面图标动画
  $("#page_contact div img").rotate({
    bind:{
    mouseover:function(){
      $(this)
        .stop(true)
        .rotate({
        animateTo :360
      })
      $(this)
        .animate({width: "170px", height: "170px"}, "fast")
    },
    mouseout:function(){
      $(this).stop(true)
      $(this).rotate({
        animateTo:0
      })
      $(this)
        .animate({width: "175px", height: "175px"}, "fast")
      }
    }
  });
   
  // 创建返回按钮
  // var $goBackToHomePage = $("<div class='goBackToHomePage'><a href="">GO Back</a></div>");  
  // $('body').append($goBackToHomePage);

 
})


