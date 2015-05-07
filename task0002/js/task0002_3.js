/**
 * Created by luhuijian on 15/5/6.
 */

window.onload= function(){
  var container =$("#container");//最外层的容器
  var list = $("#list");//图片的容器
  var buttons = document.getElementsByTagName("span");//原点计数器
  var index = 1;
  var animated = false;
  var timer;

  //移动图片
  function animate(offset) {
    if(offset == 0){
      return;
    }
    var newleft = parseInt(list.style.left) + offset;
    console.log("下一个图片的left值是"+newleft);
    animated = true;
    var time = 300;
    var interval = 10;
    var speed = offset/(time / interval);

    var go = function(){
      if((speed>0&&parseInt(list.style.left)<newleft)||(speed<0&&parseInt(list.style.left)>newleft)){
        list.style.left= parseInt(list.style.left)+speed+'px';
        setTimeout(go,interval);
      }else{
        list.style.left= newleft +'px';
        if (newleft >0) {
          list.style.left= -2400 +'px';
        }
        if (newleft < (-2400)) {
          list.style.left= 0 +'px';
        }
        animated = false;
      }
    };
    go();
  }

  //设置小圆点的状态
  function showbutton() {
    for(var i=0; i<buttons.length;i++){
      if(buttons[i].className == "on"){
        buttons[i].className ="";
      }
    }

    buttons[index-1].className = "on";
  }

  //图片移动，设置小圆点状态
  function next(){
    if (animated) {
      return;
    }

    if (index == 5) {
      index = 1;
    } else {
      index += 1;
    }
    animate(-600);
    showbutton();
  }

  //定时器播放
  function play(){
    timer = setInterval(function () {
      next();
    }, 1000);
  }

  function stop(){
    clearInterval(timer);
  }

  //点击小圆点移动图片
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      if (animated) {
        return;
      }
      if (this.className == 'on') {
        return;
      }
      var myIndex = parseInt(this.getAttribute('index'));
      var offset = -600 * (myIndex - index);

      animate(offset);
      index = myIndex;
      showbutton();
    }
  }

  container.onmouseover = stop;
  container.onmouseout = play;
  play();
};
