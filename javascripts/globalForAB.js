// current
// 把每个标签高亮 为页面添加特有id
function highLighPage () {
	// body...
	// check
	if (!document.getElementsByTagName||!document.getElementById) {return false};
	var headers = document.getElementsByTagName('header');
	if (headers.length  == 0) {return false;};
	var navs = headers[0].getElementsByTagName('nav');
	if (navs.length == 0 ) {return false;};
	// 检查每个a的href与当前页面一致就高亮
	var links = navs[0].getElementsByTagName('a');
	var linkurl;
	for (var i = 0; i < links.length; i++) {
		linkurl = links[i].getAttribute("href");
		// 取得本页惊醒对比
		var currentUrl = window.location.href;
		if (currentUrl.indexOf(linkurl) != -1) {
			links[i].className = "here";
			// 添加id
			var linkText = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linkText);
		};
	};
}
addLoadEvent(highLighPage);

function prepareSlideshow () {
	// body...
	// check
	if(!document.getElementById||!document.getElementsByTagName){return false;};
	if (!document.getElementById("intro")) {return false;};
	// 制造一个placeholder来盛放图片在intr后面
	var intro = document.getElementById('intro');
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	// 加入遮罩
	var frame = document.createElement("img");
	frame.setAttribute("src","./images/frame.png");
	frame.setAttribute("alt","");
	frame.setAttribute("id","frame");
	slideshow.appendChild(frame);

	var preview = document.createElement("img");
	preview.setAttribute("src","./images/slideshow.jpg");
	preview.setAttribute("alt","a glimpse of what awaits you");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	// 移动效果
	var links = document.getElementsByTagName('a');
	var destination;
	// 移动
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseover = function(){
			destination = this.getAttribute("href");
			if (destination.indexOf("javascriptFor12-index.html") != -1) {
				moveElement("preview",-2,0,0,5);
			};
			if (destination.indexOf("javascriptFor12-about.html")!= -1) {
				moveElement("preview",-252,0,5);
			};
			if (destination.indexOf("javascriptFor12-photo.html") != -1) {
				moveElement("preview",-502,0,5);
			};
			if (destination.indexOf("javascriptFor12-live.html") != -1) {
				moveElement("preview",-752,0,5);
			};
			if (destination.indexOf("javascriptFor12-contact.html") != -1) {
				moveElement("preview",-1001,0,5);
			};
		}
	};
}
addLoadEvent(prepareSlideshow);
// page about
function showSection (id) {
	// body...
	// 显示id 隐藏其他
	var sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
		if (sections[i].getAttribute("id") != id) {
			sections[i].style.display = "none";
		}else{
			sections[i].style.display = "block";
		}
	};
}

function prepareInternalnav () {
	// body...
	// 获得nav里面的id值
	if (!document.getElementsByTagName||!document.getElementById) {return false};
	var article = document.getElementsByTagName('article');
	if (article.length == 0) {return false;};
	var navs = article[0].getElementsByTagName("nav");
	if (navs.length == 0) {return false;};
	var nav = navs[0];
	var links = nav.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++) {
		var sectionID = links[i].getAttribute("href").split("#")[1];
		if (!document.getElementById(sectionID)) {continue;};
		document.getElementById(sectionID).style.display = "none";
		links[i].destination = sectionID;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	};
}
addLoadEvent(prepareInternalnav);
// page photo  图片库效果
// 
function preparePlaceHolder () {
	// body...
	if (!document.createElement) {return false};
	if (!document.createTextNode) {return false};
	if (!document.getElementById) {return false};
	if (!document.getElementById("imageGallery")) {return false};
	var placeHolder = document.createElement("img");
	placeHolder.setAttribute("id","placeHolder");
	placeHolder.setAttribute("src","./images/placeholderAB.jpg" );
	placeHolder.setAttribute("alt","placeHolder");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById('imageGallery');
	insertAfter(description,gallery);
	insertAfter(placeHolder,description);
}
function showPic (whichpic) {
	// body...
	// 检查placeHolder
	if (!document.getElementById('placeHolder')) {return false;};
	// 主要功能
	var source = whichpic.getAttribute("href");
	var placeHolder = document.getElementById('placeHolder');
	if (placeHolder.nodeName != "IMG") {return false};
	placeHolder.setAttribute("src",source);
	// 附带功能判断
	if (document.getElementById('description')) {
		if (whichpic.getAttribute("title")) {
			var text = whichpic.getAttribute("title");
		} else{
			var text = ""
		};
		var description = document.getElementById("description");
		if (description.firstChild.nodeValue == 3) {
			description.firstChild.nodeValue = text;
		};
		
	};
	return true;	
}

function prepareGallery () {
	// body...
	// 检查
	if (!document.getElementById || !document.getElementsByTagName) {return false};
	if (!document.getElementById('imageGallery')) {return false};

	var gallery = document.getElementById('imageGallery');
	var links = gallery.getElementsByTagName('a');

	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function () {
			// body...
			
			return showPic(this) ? false:true;
		}
		// links[i].onkeypress = links[i].onclick;
	};
}

addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);
//page table 表格效果
// 缩略语列表
// 取得数据
function displayAbbreviations () {
	// body...
	// 兼容性判断
	// 
	if (!document.createElement || !document.getElementsByTagName || !document.createTextNode ) {return false;};
	// if (!document.createElement) {return false;};
	// if (!document.getElementsByTagName) {return false;};
	// if (!document.createTextNode) {return false;};
	// 得到所有abbr
	var abbreviations = document.getElementsByTagName('abbr');
	// 判断是否有abbr存在	
	if (abbreviations.length < 1) {return false;};
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		// 通用的abbr可以有助于理解代码的可读性
		var current_abbr = abbreviations[i];
		// 所有缩略语的解释存为一个数组
		if(current_abbr.childNodes.length < 1){continue;};
		var definition = current_abbr.getAttribute("title")
		// alert(definition)
		// 缩略语的字面 abbreviation的文字节点的值
		var key = current_abbr.lastChild.nodeValue;
		// 将两个数据对应 js数组下标可以不是数字
		defs[key] = definition;
		// 创造表格
		var dlist = document.createElement("dl");
		// for(variable in array)
		// 每一次循环把variable 被 赋值为数组array的第一个元素的下标值
		for (key in defs){
			// 取得下标即是缩写
			var definition = defs[key];
			// 创造dt
			var dtitle = document.createElement("dt");
			var dtitle_text = document.createTextNode(key);
			dtitle.appendChild(dtitle_text);
			// 创造dd
			var ddesc = document.createElement("dd");
			var ddesc_text = document.createTextNode(definition);
			ddesc.appendChild(ddesc_text);
			// 把他们加在dl上
			dlist.appendChild(dtitle);
			dlist.appendChild(ddesc);
		}


		// 把这个列表插入进文档
		var header = document.createElement("h2");
		var header_text = document.createTextNode("abbreviations");
		header.appendChild(header_text);
		var article = document.getElementsByTagName('article');
		if (article.length == 0 ) {return false;};
		var container = article[0];
		container.appendChild(header);
		container.appendChild(dlist);

		}
};
// 斑马线表格效果
function stripeTables () {
	// body...
	// 找到所有table标签

	if (!document.getElementsByTagName) {return false;};
	var table_tag = document.getElementsByTagName("table");
	var odd,rows;
	for (var i = 0; i < table_tag.length; i++) {
		// 初始为false
		odd = false;
		
		rows = table_tag[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			// 第一行是表头所以第二行被设置
			if (odd == true) {
				// rows[j].style.backgroundColor = "#fcc";
				addClass(rows[j],"odd");
				
				// 设置后改变flag
				odd = false;
			}else{
				// 空白后再改回来
				odd = true;
			}
		};
	};
}


// 表格高亮
function highLightRows () {
	// body...
	
	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			// alert("1");
			addClass(this,"highlight")
		}
		rows[i].onmouseout = function(){
			// alert("1");
			this.className = this.oldClassName;
		}
	};
}

addLoadEvent(stripeTables);
addLoadEvent(highLightRows);
// addLoadEvent(displayAbbreviations);

function focusLabels () {
	// body...
	
	var labels = document.getElementsByTagName('label');
	for (var i = 0; i < label.length; i++) {
		if (!label.getAttribute("for")) {continue};
		label[i].onclick = function(){
			var valueFor = this.getAttribute("for");
			if (!document.getElementById(valueFor)) {return false;};
			var element = document.getElementById(valueFor);
			element.focus();
		}
	};
}
function isFilled (field) {
	// body...
	if (field.value.replace(' ','').length == 0) {return false;};
	var placeHolder = field.placeHolder || field.getAttribute('placeHolder');
}

function validateForm (whichform) {
	// body...
	check
	for (var i = 0; i < whichform.element.length; i++) {
		var element = whichform.element[i];
		if (element.required == "required") {
			if(!isFilled(element)){
				alert("Place fill in the "+element.name+"field");
				return false;
			}
		};
	};
	return true;
}