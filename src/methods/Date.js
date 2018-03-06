/**
 * 时间方法 by ying 
 */
var date = new function(){
	var now = new Date();
	/**
	 * 格式化时间
	 * 
	 * @param  {time} 时间
	 * @param  {cFormat} 格式
	 * @return {String} 字符串
	 *
	 * @example _getDate('formatDate'||'date'||'time', {Date} ,'y-m-d h:i:s') // -> 2018-01-29 00:00:00
	 */
	var _getDate = function(type, time, cFormat){
		if(['formatDate','date','time'].indexOf(type) < 0) return;
		var _this = time || now;
		var _cFormat = {
			'formatDate': 'y-m-d h:i:s',
			'date': 'y-m-d',
			'time': 'h:i:s'
		}
		var _type = {
			'formatDate': {
				'y': _this.getFullYear(),
				'm': _this.getMonth()+1,
				'd': _this.getDate(),
				'h': _this.getHours(),
				'i': _this.getMinutes(),
				's': _this.getSeconds()
			},
			'date': {
				'y': _this.getFullYear(),
				'm': _this.getMonth()+1,
				'd': _this.getDate()
			},
			'time': {
				'h': _this.getHours(),
				'i': _this.getMinutes(),
				's': _this.getSeconds()
			}
		}
		var _fmt = _type[type];
		var _format = cFormat || _cFormat[type];
		for(var i in _fmt){
			var _t = _fmt[i].toString().replace(/^([0-9]{1})$/,'0$1');
			_format = _format.replace(i, _t);
		}
		return _format;
	}

	var _addDay= function(time, days){
		if(!time) return;
		return new Date(time.getTime()+days*24*60*60*1e3);
	}

	return {
		_getDate  :   _getDate,
		_addDay   :    _addDay
	}
}


Date.prototype.$formatDate = function(cFormat){
	console.log('@param  {cFormat} 格式, "y-m-d h:i:s"');
	return date._getDate('formatDate', this, cFormat);
};

Date.prototype.$getDate = function(cFormat){
	console.log('@param  {cFormat} 格式, "y-m-d"');
	return date._getDate('date', this, cFormat);
};

Date.prototype.$getTime = function(cFormat){
	console.log('@param  {cFormat} 格式, "h:i:s"');
	return date._getDate('time', this, cFormat);
};

Date.prototype.$addDay = function(days){
	console.log('@param  {days} 天数');
	return date._addDay(this, days);
};