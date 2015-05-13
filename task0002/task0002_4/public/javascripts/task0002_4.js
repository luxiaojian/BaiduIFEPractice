//思路: 1.对输入框进行监听，获取内容并且显示 2.鼠标事件 click,mouseover,mouseout

var myText = $('#myText');
var prompt = $('#wrap');
var list = $('#wrap').getElementsByTagName('li');
var result = [];

window.onload = function(){
	for(var i=0; i<list.length; i++){

	}
}

function showContent(value,e){
	if(window.event){
		var keynum = e.keyCode;
	}else if(e.which){
		var keynum = e.which;
	}
	if(keynum !== 38&& keynum !== 40&&keynum !== 13){
		ajax(
			'/',
			{
				data: {
					q:value
				},
				onsuccess: function(responseText,xhr){
					clear();
					list[0].innerHTML = value;
					if(responseText){
						prompt.style.display = 'block';
						result = responseText.replace(/\s+/g,'').split(',');
						for(var i = 0; i<result.length; i++){
							list[i+1].innerHTML= result[i];
						}
					}else{
						prompt.style.display = 'none';
					}
				}
			}
		);
	}

}

//把列表li标签中内容全部设置为空，重置第一个li的类名为choose,把reuslt结果置为空，把列表设置为不可见
function clear(){
	for(var i =0; i<list.length; i++){
		list[i].innerHTML = '';
	}
	$('.choose').className = '';
	list[0].className = 'choose';
	result.length = 0;
	prompt.style.display = 'none';
}
