const buttons = document.querySelectorAll(".rate");
const allselected = document.getElementsByClassName("selected");
const span = document.getElementsByTagName("span")[0];
let result;
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2"); 
let submit = document.getElementById("submitt");
let arrowback = document.getElementById("arrowback");

buttons.forEach(button=> {
button.addEventListener("click", function(){

if (allselected.length>0) {
  allselected[0].className=allselected[0].className.replace("selected","rate");
}
this.className="selected"
result = button.innerHTML;
span.innerHTML = result;
});})
  
submit.addEventListener("click", function()  {
if (result==null) {alert ("Please, choose the rating!");}
else {section1.style.display="none";
section2.style.display="block";}
});

arrowback.addEventListener("click", function()  {
  section1.style.display="block";
  section2.style.display="none";
}); 
