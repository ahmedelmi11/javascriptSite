var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel")
var tabPanelName = document.querySelector("#tabPanelName")

function showPanel(panelIndex,colorCode,){
  tabButtons.forEach (function(node){
   node.style.backgroundColor="";
   node.style.Color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";
  // tabPanels.forEach(function(node){
  //  node.style.display="";
  // });
  // tabPanels[panelIndex].style.display="block";
  // tabPanels[panelIndex].style.backgroundColor=colorCode;
  tabPanelName.textContent = tabButtons[panelIndex].textContent;
}
showPanel(0, '#2196f3');


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Nicely done, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

var image1 = document.getElementById('image1');
image1.onclick = function(){
  alert('You are rocking a very stylish macaawiis!');
}
// image
var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Ahmed2.png') {
    myImage.setAttribute('src', 'images/Ahmed3.png');
  }else {
    myImage.setAttribute('src', 'images/Ahmed2.png');
  }
}
