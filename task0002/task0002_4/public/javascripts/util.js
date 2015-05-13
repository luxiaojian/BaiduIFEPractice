function isArray(arr) {
  //解决iframe的问题
  //取得对象的一个内部属性[[Class]]，然后依据这个属性，返回一个类似于"[object Array]"的字符串作为结果。
  return Object.prototype.toString.call(o) === '[object Array]';
}


function isFunction(fn) {
  //解决浏览器兼容问题
  return !!fn && !fn.nodeName && fn.constructor != String &&
    fn.constructor != RegExp && fn.constructor != Array &&
    /function/i.test(fn + "");
}


//深度克隆
//javascript克隆对象深度介绍 http://www.jb51.net/article/32015.htm
function cloneObject(obj) {
  var o = obj.constructor === Array ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
    }
  }
  return o;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// 用一个新的数组，把原来数组中不重复的放到这个新的数组中。
function uniqArray(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
function simpleTrim(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) != "" && str.charAt(i) != "/t") {
      break;
    }
  }

  for (var j = str.length - 1; j >= 0; j--) {
    if (str.charAt(j) != "" && str.charAt(j) != "/t") {
      break;
    }
  }

  return str.slice(i + 1, j - 1);
}

//用正则表达式把字符串中的空白字符替换
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
  for (var i in arr) {
    fn(arr[i], i)
  }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  return Object.keys(obj).length;
}

function getObjectLength(obj) {
  var sum = 0;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      sum++;
    }
  }
  return sum;
}

//判断是否为邮箱地址
function isEmail(emailStr) {
  var pattern = /^(\w)+([.-]\w+)*@(\w)+\.\w+$/;
  pattern.test(emailStr);
}
//判断是否为手机号码
//手机号段130~139  145,147 15[012356789] 176,177,178 180~189
function isMobilePhone(phone) {
  var pattern = /^(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/;
  pattern.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  var oldClassName = element.className;
  element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
  var cn = element.className;
  var pattern = new RegExp(/\boldClassName\b/);
  element.className = cn.replace(pattern, "");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  return element.parentNode == siblingsNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
  var pos = {};
  pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
  pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  return pos;
}
// 实现一个简单的Query
function $(selector) {
  var element;
  var arr = selector.split(" ");
  var idExp = /^#[\w-]+$/;
  var classExp = /^\.[\w\-]+$/;
  var attrExp = /^\[[\w\-=]+\]$/;

  for(var i=0;i<arr.length;i++){

    //id选择器
    if(arr[i].search(idExp) != -1){
       var id= arr[i].slice(1);
      element = document.getElementById(id);
    }
    //元素选择器
    else if(arr[i].search(classExp) != -1){
      var classname= arr[i].slice(1);
      element = document.getElementsByClassName(classname)[0];
    }
    //属性选择器
    else if(arr[i].search(attrExp) != -1){
      var index = arr[i].indexOf("=");
      if(index != -1){
        var attr = arr[i].slice(1,index);
        var val = arr[i].slice(index+1,-1);
        element = getElementByAttribute(attr,val);
      }
      else{
        var attr = arr[i].slice(1);
        element = getElementByAttribute(attr,val);
      }
    }
    //元素选择器
    else{
      element =document.getElementsByTagName(arr[i])[0];
    }
  }
  return element;
}

//根据元素的属性名称和值来获取值
function getElementByAttribute(attr,val){
  var allElements = document.getElementsByTagName('*');
  if(val){
    for(var i=0;i<allElements.length;i++){
      if(allElements[i].getAttribute(attr) == val){
        return allElements[i];
      }
    }
  }else{
    for(var i=0;i<allElements.length;i++){
      if(allElements[i].getAttribute(attr)){
        return allElements[i];
      }
    }
  }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
  if (element.addEventListener) {
    element.addEventListener(event, listener)
  } else {
    element.attachEvent("on" + event, listener);
  }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
  if (element.removeEventListener) {
    element.removeEventListener(event, listener);
  } else {
    element.detachEvent("on" + event, listener);
  }
}

// 实现对click事件的绑定
//直接使用上边的addEvent函数
function addClickEvent(element, listener) {
  addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
//直接使用上边的addEvent函数
function addEnterEvent(element, listener) {
  addEvent(element, "keydown", function (event) {
    if (event.keyCode == 13) {
      listener();
    }
  });
}

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {

}


//实现函数对$符号的绑定
$.on = function (selector, event, listener) {
  var element = document.querySelector(selector);
  addEvent(element, event, listener);
  return this;
}

$.un = function (selector, event, listener) {
  var element = document.querySelector(selector);
  removeClass(element, event, listener);
  return this;
}

$.click = function (selector, event, listener) {
  var element = document.querySelector(selector);
  addClickEvent(element, event, listener);
  return this;
}

$.enter = function (selector, event, listener) {
  var element = document.querySelector(selector);
  addEnterEvent(element, listener);
  return this;
}

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
  var useragent = navigator.userAgent;
  if (useragent.indexOf("MSIE") && useragent.indexOf("Trident")) {
    console.log("您的浏览器为IE(8-10)");
  }

}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
  // your implement
  var d = new Date();
  d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000));
  var expires = "expires =" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + expires;
}

// 获取cookie值
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(";");
  for (i = 0; i < ca.length; i++) {
    var a = ca[i];
    while (a.charAt(0) == " ") a = substring(1);
    if (a.indexOf(name) == 0) return a.substring(name.length, a.length);
  }
  return "";

}

//封装一个Ajax方法

function ajax(url, options) {
    // 创建对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {        //兼容 IE5 IE6
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 处理data
    if (options.data) {
        var dataarr = [];
        for (var item in options.data) {
            dataarr.push(item + '=' + options.data[item]);
        }
        var data = dataarr.join('&');
    }

    // 处理type
    if (!options.type) {
        options.type = 'GET';
    }
    options.type = options.type.toUpperCase();

    // 发送请求
    if (options.type === 'GET') {
        var myURL = '';
        if (options.data) {
            myURL = url + '?' + data;
        }
        else {
            myURL = url;
        }
        xmlhttp.open('GET', myURL, true);
        xmlhttp.send();
    }
    else if (options.type === 'POST') {
        xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(data);
    }

    // readyState
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xmlhttp.responseText, xmlhttp.responseXML);
                }
            }
            else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    }
}