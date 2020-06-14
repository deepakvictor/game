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
const result = document.querySelector('#result');
const audio = document.querySelector('#myAudio');
const playit = document.querySelector('#play');
const pauseit = document.querySelector('#pause');
const next = document.querySelector('#next');
const ks = document.querySelector('#ks');

function song() {
  playit.addEventListener("click", function () {
    ks.play();
  })
  pauseit.addEventListener("click",function () {
    ks.pause();
  })
}

song();

function computer(n) {
  audio.play();
  let random_num = Math.floor(Math.random() * 10) + 1;
  cscore.innerHTML = random_num;
  if (n != random_num) {
    start_run += n;
    run.innerHTML = start_run;
  }else {
    start_wicket += 1;
    wicket.innerHTML = start_wicket;
    result.innerHTML = `your score is ${start_run} for ${start_wicket} wicket`;
    if (start_wicket == 5) {
      alert(`your score is ${start_run} for ${start_wicket} wicket`);
      alert("your game is over ")
      location.reload();
    }
    }
  }


function main() {
  one.addEventListener("click", function(){
    computer(1);
  })
  two.addEventListener("click", function(){
    computer(2);
  })
  three.addEventListener("click", function(){
    computer(3);
  })
  four.addEventListener("click", function(){
    computer(4);
  })
  five.addEventListener("click", function(){
    computer(5);
  })
  six.addEventListener("click", function(){
    computer(6);
  })
  seven.addEventListener("click", function(){
    computer(7);
  })
  eight.addEventListener("click", function(){
    computer(8);
  })
  nine.addEventListener("click", function(){
    computer(9);
  })
  ten.addEventListener("click", function(){
    computer(10);
  })
}
main();
