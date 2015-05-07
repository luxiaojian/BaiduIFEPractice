/**
 * Created by luhuijian on 15/5/5.
 */
//取到输入框中输入的值，进行去空字符，去掉除了，.。等等分隔符号，去重
//对输入的字符进行限制，如果输入字符长度给出提示
//创建段落输出,循环输出爱好

//第一阶段
function show1() {
  var text = $('#hobby').value;
  text = text.replace(/[\s,，]+/g, ' ');
  var hobby = text.split(" ");
  console.log(hobby);
  hobby = uniqArray(hobby);
  $('.error').innerHTML = "";
  if ($('.result')) {
    $('.container').removeChild($('.result'));
  }
  var result = document.createElement('div');
  result.className = 'result';
  $('.container').appendChild(result);
  var h3 = document.createElement('h3');
  h3.innerHTML = '您的爱好有:';
  result.appendChild(h3);
  for (var i = 0; i < hobby.length; i++) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    result.appendChild(radio);
    var data = document.createTextNode(hobby[i] + '');
    result.appendChild(data);
  }
}

//第二阶段
function show2() {
  var text = $('#hobby2').value;
  text = text.replace(/[\s,，；;\.]+/g, ' ');
  var hobby = text.split(" ");
  console.log(hobby);
  hobby = uniqArray(hobby);
  $('.error').innerHTML = "";
  if ($('.result2')) {
    $('.container2').removeChild($('.result2'));
  }
  var result = document.createElement('div');
  result.className = 'result2';
  $('.container2').appendChild(result);
  var h3 = document.createElement('h3');
  h3.innerHTML = '您的爱好有:';
  result.appendChild(h3);
  for (var i = 0; i < hobby.length; i++) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    result.appendChild(radio);
    var data = document.createTextNode(hobby[i] + '');
    result.appendChild(data);
  }
}

function show3() {
  var text = $('#hobby3').value;
  text = text.replace(/[\s,，；;`]+/g, " ");
  var hobby = text.split(' ');
  //console.log(hobby);
  hobby = uniqArray(hobby);
  console.log(hobby.length);
  if (hobby.length < 1) {
    $('.error').innerHTML = "请至少输入一个爱好！";
  }
  else if (hobby.length > 10) {
    $('.error').innerHTML = '爱好数量不能超过10个';
  }
  else {
    $('.error').innerHTML = " ";
    if ($('.result3')) {
      $('.container3').removeChild($('.result3'));
    }
    var result = document.createElement('div');
    result.className = 'result3';
    $('.container3').appendChild(result);
    var h3 = document.createElement('h3');
    h3.innerHTML = '您的爱好有:';
    result.appendChild(h3);
    for (var i = 0; i < hobby.length; i++) {
      var radio = document.createElement('input');
      radio.type = 'radio';
      result.appendChild(radio);
      var data = document.createTextNode(hobby[i] + '');
      result.appendChild(data);
    }
  }
}
