//type 类型判断
//


var $type = {
	getType : function(o){
		return Object.prototype.toString.call(o).slice(8, -1)
	},

	isIos: function() {
	    var u = navigator.userAgent;
	    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
	        // return "Android";
	        return false
	    } else if (u.indexOf('iPhone') > -1) {//苹果手机
	        // return "iPhone";
	        return true
	    } else if (u.indexOf('iPad') > -1) {//iPad
	        // return "iPad";
	        return false
	    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
	        // return "Windows Phone";
	        return false
	    }else{
	        return false
	    }
	},

	isPC: function() { //是否为PC端
	    var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone",
	                "SymbianOS", "Windows Phone",
	                "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
	    return flag;
	},

	browserType: function(){
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
	    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
	    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
	    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
	    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
	    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
	    if (isIE) {
	        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	        reIE.test(userAgent);
	        var fIEVersion = parseFloat(RegExp["$1"]);
	        if(fIEVersion == 7) return "IE7"
	        else if(fIEVersion == 8) return "IE8";
	        else if(fIEVersion == 9) return "IE9";
	        else if(fIEVersion == 10) return "IE10";
	        else if(fIEVersion == 11) return "IE11";
	        else return "IE7以下"//IE版本过低
	    }
	    if (isFF) return "FF";
	    if (isOpera) return "Opera";
	    if (isEdge) return "Edge";
	    if (isSafari) return "Safari";
	    if (isChrome) return "Chrome";
	}
}

window.$type = $type;