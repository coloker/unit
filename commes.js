//设置cookie
function setCookie(key,value,day){
	var d = new Date();
	d.setDate(d.getDate()+day);
	document.cookie = key+"="+value+";expires="+d+";path=/";
}
//删除cookie
function removeCookie(key){
	setCookie(key,1,-1);
}
//获取cookie
function getCookie(key){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == key){
			return arr[i].split("=")[1];
		}
	}
	return null;
}
//阻止事件冒泡
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation()
	}else{
		e.cancelBubble = true;
	}
}
//阻止默认事件
function stopDefault(e){
	if(e.preventDefault){
		e.preventDefault()
	}else{
		e.returnValue = false;
	}
}
//事件监听绑定、删除
var eventListen = {
	add:function(ele,myeve,fn){
		if(ele.addEventListener){
			ele.addEventListener(myeve,fn,false);
		}else if(ele.attachEvent){
			ele.attachEvent("on"+myeve,fn);
		}else{
			ele["on"+myeve] = fn;
		}
	},
	remove:function(ele,myeve,fn){
		if(ele.removeEventListener){
			ele.removeEventListener(myeve,fn);
		}else if(ele.detachEvent){
			ele.detachEvent("on"+myeve,fn);
		}else{
			ele["on"+myeve] = null;
		}
	}
}


