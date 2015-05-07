/**
 * Created by luhuijian on 15/5/7.
 */

function countTime(){
  //取到输入的值，做处理：1.除掉多余的空格 2.分割成年，月，日的格式
  //如果输入格式错误要给出错误提示，格式正确，删除上一次输出的时间
  //把输入的时间按照年，月，日，时，分，秒设置到截止时间endDate
  //取出现在的时间，把现在的时间和结束的时间进行比较，如果出错，输出错误信息
  //把时间差分别转换成年，月，日，时，分，秒的格式。在文档中创建DOM输出倒计时时间
  //设置定时器，每一秒执行一次

  var text = $("#time").value;
  text = trim(text); //去掉输入字符间的多余空格
  var time = text.split("-");//把——作为分割符号，把输入的时间分割成年，月，日的格式

  if(time.length !==3){
    $(".error").innerHTML="请按照特定的格式YYYY-MM-DD输入年月日";
  }else{
    if($('.result')){
      $('.container').removeChild($('.result'));
    }

    var t = setTimeout('countTime()', 1000);
    var endDate = new Date();
    endDate.setFullYear(time[0],time[1]-1,time[2]);
    endDate.setHours(0,0,0,0);

    var thisDate = new Date();
    var diff = endDate - thisDate;
    if(diff<0){
      console.log(diff);
      $(".error").innerHTML ="请输入一个将来的时间";
      clearTimeout(t);
      return;
    }

    var c_day = diff/(24*60*60*1000);
    var day = Math.floor(c_day);
    var c_hour = (c_day-day)*24;
    var hour = Math.floor(c_hour);
    var c_minute = (c_hour-hour)*60;
    var minute = Math.floor(c_minute);
    var c_second = (c_minute-minute)*60;
    var second = Math.floor(c_second);

    var result = document.createElement('div');
    result.className = 'result';
    $('.container').appendChild(result);
    var h3 = document.createElement('h3');
    h3.innerHTML="倒计时";
    result.appendChild(h3);
    var ptime = document.createElement('p');
    ptime.innerHTML= '距离最终时间'+ time[0] +"年" + time[1] + "月" + time[2] +"日还有" +day +"天" +hour +"小时" + minute +"分钟" +second +"秒";
    result.appendChild(ptime);
  }
}
