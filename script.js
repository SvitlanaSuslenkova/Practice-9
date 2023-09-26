var btn = document.querySelectorAll(".rate");
var span = document.getElementsByTagName("span")[0];
var result;
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2"); 

for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", function(){
btn[i].classList.toggle("selected");
result = btn[i].innerHTML;
span.innerHTML = result;
});}

for (let i = 0; i < btn.length; i++) {      
btn[i].addEventListener("blur", function(){
btn[i].classList.remove("selected");
});}
  
var submit = document.getElementById("submitt");
submit.addEventListener("click", function()  {
if (result==null) {alert ("Please, choose the rating!");}
else {section1.style.display="none";
section2.style.display="block";}
});

var bck = document.getElementById("bckar");
bck.addEventListener("click", function()  {
  section1.style.display="block";
  section2.style.display="none";
});  
