/**
 * Created by luhuijian on 15/5/5.
 */
function handle() {
  var val = document.getElementById("hobby").value;
  var p = document.createElement('p');
  p.innerHTML = val;
  document.getElementById("hobby").appendChild(p);
}
