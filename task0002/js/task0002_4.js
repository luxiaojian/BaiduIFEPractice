/**
 * Created by luhuijian on 15/5/16.
 */
var mokadata = ['a', 'abandon', 'abdomen', 'abide', 'ability', 'able', 'abnormal', 'aboard', 'abolish', 'abound', 'about', 'above', 'fiction', 'field', 'fierce', 'fight', 'test2', 'test3'];
var inputArea =$('#myText');
var ullist = $('ul');

function addInputListener() {
  if(inputArea.addEventListener){
      inputArea.addEventListener("input",OnInput);
  }

  if(inputArea.attachEvent){
    inputArea.attachEvent("onpropertychange",OnPropChanged);
  }
}
//监听input输入框，比对数据，输出列表。
addInputListener();

function OnPropChanged(event){
  var inputValue = "";
  if (event.propertyName.toLowerCase() == "value") {
    inputValue = event.srcElement.value;
    handleInput(inputValue);
  }
}

function OnInput(event){
  var inputvalue = event.target.value;
  handleInput(inputvalue);
}

function handleInput(inputvalue){
  var liString = "";
  var pattern = new RegExp("^"+inputvalue, "i");

  if(inputvalue == ""){
    ullist.style.display = "none";
  }else{
    for( var i =0;i<mokadata.length; i++){
        if(mokadata[i].match(pattern)){
          console.log(mokadata[i]);
          liString += "<li><span>" +inputvalue +"</span>"+mokadata[i].substr(inputvalue.length) +"</li>";
        }
    }
    ullist.innerHTML = liString;
    ullist.style.display = "block";
  }
}
