window.onload = function(){
  var eledrags1 = document.querySelectorAll('#left-target .box-item');
  var droptarget1 = document.querySelector("#right-target");
  var eledrags2 = document.querySelectorAll('#right-target .box-item');
  var droptarget2 = document.querySelector("#left-target");
  var eledragged = null;

  //左边的容器
  for(var i=0;i<eledrags1.length;i++){
    eledrags1[i].addEventListener('dragstart',function(e){
      e.dataTransfer.effectAllowed = 'move';
      eledragged = this;
    });
    eledrags1[i].addEventListener('dragend',function(e){
      eledragged = null;
    });
  }

  droptarget1.addEventListener('dragover',function(e){
    if(e.preventDefault){
      e.preventDefault();
    }
    if(e.stopPropagation){
      e.stopPropagation();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  });

  droptarget1.addEventListener('drop',function(e){
    if(e.preventDefault){
      e.preventDefault();
    }
    if(e.stopPropagation){
      e.stopPropagation();
    }
    document.querySelector("#left-target").removeChild(eledragged);
    document.querySelector("#right-target").appendChild(eledragged);
    return false;
  });

  //右边的容器
  for(var i=0;i<eledrags2.length;i++){
    eledrags2[i].addEventListener('dragstart',function(e){
      e.dataTransfer.effectAllowed = 'move';
      eledragged = this;
    });
    eledrags2[i].addEventListener('dragend',function(e){
      eledragged = null;
    });
  }

  droptarget2.addEventListener('dragover',function(e){
    if(e.preventDefault){
      e.preventDefault();
    }
    if(e.stopPropagation){
      e.stopPropagation();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  });

  droptarget2.addEventListener('drop',function(e){
    if(e.preventDefault){
      e.preventDefault();
    }
    if(e.stopPropagation){
      e.stopPropagation();
    }
    document.querySelector("#right-target").removeChild(eledragged);
    document.querySelector("#left-target").appendChild(eledragged);
    return false;
  });
};
