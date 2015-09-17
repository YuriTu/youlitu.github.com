function positionMessage () {
	// body...
	// 向后兼容检查
	if (!document.getElementById||!document.getElementById("message")) {return false};
	var elem = document.getElementById('message');
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	// moveElement("message",125,25,15);
	// 这边直接用原来的elem的原因是elem1并不需要保存这些数据
	var elem = document.getElementById('message2');
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "50px";
	// moveElement("message2",125,125,10);
}

// addLoadEvent(positionMessage());


function moveMessage(){
	// check
	if (!document.getElementById||!document.getElementById("message")) {return false};
	var elem = document.getElementById("message");
	// 获得坐标string类型 需要转化
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	// 如果到达终点就停止
	if(xpos == 200&& ypos == 100){
		return true;
	// 每次以1前进  这样是先水平移动再竖直移动
	}else if(xpos < 200){
		xpos++;
	}else if(xpos > 200){
		xpos--;
	}else if(ypos <100){
		ypos++;
	}else if(ypos >100){
		ypos--;
	}
	// 属性值为 xxpx
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// 每次毫秒
	// var movement = setTimeout("moveMessage()",10);
}

function prepareSlideshow () {
	// body...
	// check method

	if (!document.getElementById ||!document.getElementsByTagName) {return false;};
	// check elem alive
	if (!document.getElementById("linklist")) {return false;};
	// 创建
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","images/topic.png");
	preview.setAttribute("alt","building");
	preview.setAttribute("id","preview");

	slideshow.appendChild(preview);

	// if (!document.getElementById("preview")) {return false;};
	// 确定图片
	// var preview = document.getElementById("preview");
	// preview.style.position = "absolute";
	// preview.style.left = "0px";
	// preview.style.top = "0px";

	// 找到有关链接
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	var link = list.getElementsByTagName('a');
	// 关联效果

	link[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	};
	link[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	link[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}

}
// alert("1");
addLoadEvent(prepareSlideshow ())
