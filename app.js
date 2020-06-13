let start_run = 0;
let start_wicket = 0;
const run = document.querySelector('#score');
const wicket = document.querySelector('#wicket');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const ten = document.querySelector('#ten');
const cscore = document.querySelector('#cscore');

function computer() {
  let random_num = Math.floor(Math.random() * 10) + 1;
  cscore.innerHTML = random_num;
}

function main() {
  one.addEventListener("click", function(){
    start_run += 1;
    run.innerHTML = start_run;
    computer();
  })
  two.addEventListener("click", function(){
    start_run+= 2;
    run.innerHTML = start_run;
    computer();
  })
  three.addEventListener("click", function(){
    start_run+=3;
    run.innerHTML = start_run;
    computer();
  })
  four.addEventListener("click", function(){
    start_run+=4;
    run.innerHTML = start_run;
    computer();
  })
  five.addEventListener("click", function(){
    start_run+=5;
    run.innerHTML = start_run;
    computer();
  })
  six.addEventListener("click", function(){
    start_run+=6;
    run.innerHTML = start_run;
    computer();
  })
  seven.addEventListener("click", function(){
    start_run+=7;
    run.innerHTML = start_run;
    computer();
  })
  eight.addEventListener("click", function(){
    start_run+=8;
    run.innerHTML = start_run;
    computer();
  })
  nine.addEventListener("click", function(){
    start_run+=9;
    run.innerHTML = start_run;
    computer();
  })
  ten.addEventListener("click", function(){
    start_run+=10;
    run.innerHTML = start_run;
    computer();
  })
}
main();
