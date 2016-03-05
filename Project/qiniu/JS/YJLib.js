// Yuri's library for jQ&&js
// version:0.0.4

// @group js

// 1.基础常用函数

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


// ajax
function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function(){
			try{return new ActiveXObject("Msml2.XMLHTTP.6.0")}
				catch(e){}
			try{return new ActiveXObject("Msml2.XMLHTTP.3.0")}
				catch(e){}
			try{return new ActiveXObject("Msml2.XMLHTTP")}
				catch(e){}
			return false;
		}
	}
	return new XMLHttpRequest();
}
function getNewContent() {
	var request = getHTTPObject();// new XHR
	if (request) {
		request.open("GET","testbox.html",true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.creatTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		}
		request.send(null);
	}else{
		alert('sorry,your browser doesn\'t support XMLHttpRequest');
	}
}
// 浏览器是否支持DOM2/DOM3的事件
function isDOMeventSupport(whatEvent,rank) {
	// String HTMLEvents,String 2.0
	// String UIEvent ,String 3.0
	var isSupported = document.implementation.hasFeature(whatEvent,rank);
	return isSupported;
}


// 2.组件

// @file API

// 检查file api 是否可用
function fileReaderPermission() {	
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// all api are supported
	}else{
		alert("The File APIs are not fully supported in this browser.")
	}
}

// input-flie 选择 显示详细信息
function inputFileSelect() {
	// 添加事件...可以再抽象一下
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	function handleFileSelect(evt) {
		// file list object
		var files = evt.target.files;
		// files is a fileslist of file objects .list some properties
		var output = [];
		    for (var i = 0, f; f = files[i]; i++) {
		    	// 文件名 MIME类型 size 最后修改时间
		      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
		                  f.size, ' bytes, last modified: ',
		                  f.lastModifiedDate.toLocaleDateString(), '</li>');
		    }
		    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';		  		  
	}
}
// 判断有多少文件传入并创建进度条
function howManyFile() {
	document.getElementById('files').addEventListener('change',countFile,false);
	function countFile(event) {
		var files = event.target.files,
				i = 0,
				len = files.length;
		return len;		
	}
}

// 单个文件读取并创建进度条
function fileLoadProgressBar() {
		var reader;
	  var progress = document.querySelector('.percent');
	  document.getElementById('files').addEventListener('change', handleFileSelect, false);

	  function handleFileSelect(evt) {
	    // Reset progress indicator on new file selection.
	    progress.style.width = '0%';
	    progress.textContent = '0%';

	    reader = new FileReader();
	    reader.onerror = errorHandler;
	    reader.onprogress = updateProgress;
	    reader.onabort = function(e) {
	      alert('File read cancelled');
	    };
	    reader.onloadstart = function(e) {
	      document.getElementById('progressBar').className = 'loading';
	    };
	    reader.onload = function(e) {
	      // Ensure that the progress bar displays 100% at the end.
	      progress.style.width = '100%';
	      progress.textContent = '100%';
	      setTimeout("document.getElementById('progressBar').className='';", 2000);
	    }

	    // Read in the image file as a binary string.
	    reader.readAsBinaryString(evt.target.files[0]);
	  }

	  function abortRead() {
	    reader.abort();
	  }

	  function errorHandler(evt) {
	    switch(evt.target.error.code) {
	      case evt.target.error.NOT_FOUND_ERR:
	        alert('File Not Found!');
	        break;
	      case evt.target.error.NOT_READABLE_ERR:
	        alert('File is not readable');
	        break;
	      case evt.target.error.ABORT_ERR:
	        break; // noop
	      default:
	        alert('An error occurred reading this file.');
	    };
	  }

	  function updateProgress(evt) {
	    // evt is an ProgressEvent.
	    if (evt.lengthComputable) {
	      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
	      // Increase the progress bar length.
	      if (percentLoaded < 100) {
	        progress.style.width = percentLoaded + '%';
	        progress.textContent = percentLoaded + '%';
	      }
	    }
	  }
}
// 缩略图显示
function fileLoadThumb() {
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	function handleFileSelect(evt) {
	    var files = evt.target.files; // FileList object

	    // Loop through the FileList and render image files as thumbnails.
	    for (var i = 0, f; f = files[i]; i++) {

	      // Only process image files.
	      if (!f.type.match('image.*')) {
	        continue;
	      }

	      var reader = new FileReader();

	      // Closure to capture the file information.
	      reader.onload = (function(theFile) {
	        return function(e) {
	          // Render thumbnail.
	          var span = document.createElement('span');
	          span.innerHTML = ['<img class="thumb" src="', e.target.result,
	                            '" title="', escape(theFile.name), '"/>'].join('');
	          document.getElementById('list').insertBefore(span, null);
	        };
	      })(f);

	      // Read in the image file as a data URL.
	      reader.readAsDataURL(f);
	    }
	  }
}

// 3.模组

// 3.1打分系统
function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
}



// @group JQ

// 1.背景图的动画效果
function BGChange () {
	var BGNum = 2;
	setInterval(function () {	
		// 作为背景图的容器 要求 脱离文档流 z-index 不挡其他元素		
		$("#BG")
			.animate({opacity:0},500,function () {
				$(this)
					// 背景图的命名规则为 BGPic-数字.jpg
					.css('background-image', 'url(./images/BGPic-'+BGNum+'.jpg)')
					.animate({opacity:1},500)
			})
		BGNum++;
		if (BGNum > 4) {
			BGNum = 1;
		};
	},5000)
}