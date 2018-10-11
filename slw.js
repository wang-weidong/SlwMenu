/**
 * Slw/SlwPlugins v3.0 2016.8 by CSS WangWeidong
 */

var Slw = {}, SlwPlugins = {};
;
(function() {
	Slw.Utils = {
		uuid : function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		},
		isnull : function(str) {
			return (str == null || (typeof str == 'undefined') || str == '');
		},
		isIE : function() {
			var userAgent = navigator.userAgent;
			if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) return true;
			var isOpera = userAgent.indexOf("Opera") > -1;
			return userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
		},
		ieVersion : function() {
			var userAgent = navigator.userAgent;
			if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) return 11;
			var version = -1;
			var isOpera = userAgent.indexOf("Opera") > -1;
			var ie = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
			if (ie) {
				var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
				reIE.test(userAgent);
				version = parseFloat(RegExp["$1"]);
			}
			return version;
		}
	};
	
	Slw.Event = {
		checkHover : function(e, target) {
			if (Slw.Event.getEvent(e).type == "mouseover") {
				return !Slw.Event.contains(target, Slw.Event.getEvent(e).relatedTarget || Slw.Event.getEvent(e).fromElement) && !((Slw.Event.getEvent(e).relatedTarget || Slw.Event.getEvent(e).fromElement) === target);
			}
			else {
				return !Slw.Event.contains(target, Slw.Event.getEvent(e).relatedTarget || Slw.Event.getEvent(e).toElement) && !((Slw.Event.getEvent(e).relatedTarget || Slw.Event.getEvent(e).toElement) === target);
			}
		},
		contains : function(parentNode, childNode) {
			if (parentNode.contains) {
				return parentNode == childNode || parentNode.contains(childNode);
			}
			else {
				return !!(parentNode.compareDocumentPosition(childNode) & 16);
			}
		},
		onElement : function(e, el) {
			return ($.contains(el, e.target) || $(el).is(e.target));
		},
		getEvent : function(e) {
			return e || window.event;
		},
		hasClass : function(e, className) {
			return $(Slw.Event.getEvent(e).toElement).hasClass(className);
		}
	};
	
	Slw.Element = {
		clear : '<div style="clear:both"></div>'
	};
		
})(jQuery);
