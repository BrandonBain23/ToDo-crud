function newElement(){
  var li = document.createElement('li');
  var t = document.getElementById('myInput').value;
  var todoItem = document.createTextNode(t);
  var span = document.createElement('SPAN');
  var txt = document.createTextNode("\u00D7");

  li.appendChild(todoItem);

  if (t === '') {
    alert('Please fill out the form');
  } else {
    document.getElementById('myUL').appendChild(li);
  }

  document.getElementById('myInput').value = '';
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (let index = 0; index < close.length; index++) {
    close[index].onclick = function() {
      var div = this.parentElement
      div.style.display = 'none'
    }
  }
}

//delete
var close = document.getElementsByClassName('close')
var i
for (let index = 0; index < close.length; index++) {
  close[index].onClick = function(){
    var div = this.parentElement;
    div.style.display = 'none';
  } 
}

var todos = document.getElementsByTagName('LI')
var i 
for (let index = 0; index < close.length; index++) {
  var span = document.createElement("SPAN")
  span.className = 'close'
  todos[index].appendChild(span)
}

//update

var list = document.querySelector('ul')
list.addEventListener('click', function(e){ 
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  }
}, false)