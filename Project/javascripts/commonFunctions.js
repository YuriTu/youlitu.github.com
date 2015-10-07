// 常用函数

// 多重函数绑定
function addLoadEvent (func) {
	// body...
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

// 在之后插入
function insertAfter(newElement,targetElement) {
	// body...
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		// nextSibling是下一个同级节点
		targetElement.parentNode.insertBefore(newElement,targetElement.nextSibling);

	}
}

// 下一个子元素
function lastCHildElement (parentElement) {
	// body...
	// 取得元素内的所有元素节点，元素节点的最后一个就是
	var parentElementArray = parentElement.getElementsByTagName('*');
	var lastCHildElement = parentElementArray[parentElementArray.length - 1];
	return lastCHildElement;
}

// 下一个元素
function getNextElement (node) {
	// body...
	if (node.nodeType == 1) {
		return node;
	};
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	};
	return null;
}

// js与css结合添加样式-classname方法
function addClass (element,value) {
	// body...
	if (!element.className) {
		element.className = value;
	}else{
		newElement = element.className;
		newElement += " ";
		newElement += value;
		element.className = newElement;
	}
}


// 移动
function moveElement (elementID,final_x,final_y,interval) {
	// body...
	if (!document.getElementById||!document.getElementById(elementID)) {return false};
	var elem = document.getElementById(elementID);
	if (elem.movement) {clearTimeout(elem.movement)};
	if (!elem.style.top) {
		elem.style.top = "0px";
	};
	if (!elem.style.left) {
		elem.style.left = "0px";
	};
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	//  每次以1前进 这样是先水平移动再竖直移动
	// if(xpos == final_x&& ypos == final_y){
	// 	return true;
	// }else if(xpos < final_x){
	// 	xpos++;
	// }else if(xpos > final_x){
	// 	xpos--;
	// }else if(ypos <final_y){
	// 	ypos++;
	// }else if(ypos >final_y){
	// 	ypos--;
	// }
	
	// 这样是直线距离移动
	// 步长，因为有xy两个值，我们并没有要存储这个值得意图，所以必须初始化
	var dist;
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	if(xpos < final_x){
		 dist = Math.ceil((final_x - xpos)/10) ;
		xpos = xpos + dist;
	};
	if(xpos > final_x){
		dist = Math.ceil((xpos - final_x)/10);
		xpos -= dist;
	};

	if(ypos < final_y){
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	};
	if(ypos > final_y){
		dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	};
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// 每次interval毫秒
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	 elem.movement = setTimeout(repeat,interval);

}