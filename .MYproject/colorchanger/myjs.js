const buttons=document.querySelectorAll(".button");
const ourbody=document.querySelector("body");
buttons.forEach(function(button){
button.addEventListener('click', function(e){
  switch(e.target.id){
case "grey":
  ourbody.style.backgroundColor=e.target.id;
break;
case "white":
  ourbody.style.backgroundColor=e.target.id;
break;
case "blue":
  ourbody.style.backgroundColor=e.target.id;
break;
case "yellow":
  ourbody.style.backgroundColor=e.target.id;
break;
  }
});
});