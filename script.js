let title = document.querySelector(".title");
let storyopening =document.querySelector(".storyopening");

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");

let screen1=document.querySelector(".option-one-screen");
let screen2=document.querySelector(".option-two-screen");

let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");

let screen3 = document.querySelector(".option-one-end");
let screen4 = document.querySelector(".option-two-end");

let button5 = document.querySelector(".option-five");
let button6 = document.querySelector(".option-six");

/* Declare variables below to save the different sections (divs) of your story*/







button1.onclick = function() {
  screen1.style.display = "block";
  
};

button2.onclick = function() {
  screen2.style.display = "block";
  
  
};

button3.onclick = function() {
  screen3.style.display = "block";
  
  
};

button4.onclick = function() {
  screen4.style.display = "block";
  
  
};


button5.onclick = function() {
  button5.innerHTML="Adventure done !!!!!!!!!!!!!!!!!!!";
  };

button6.onclick = function() {
  button6.innerHTML="Adventure done !!!!!!!!!!!!!!!!!!!";
  };

