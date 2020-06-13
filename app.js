let starting_add = 0;
let starting_minus = 0;
const userscore = document.querySelector('#userscore');
const wicket = document.querySelector('#wicket');
const add = document.querySelector('#add_image');
const minus = document.querySelector('#minus_image');


add.addEventListener("click", function(){
  starting_add++;
  userscore.innerHTML = starting_add;
})
minus.addEventListener("click", function () {
  starting_minus++;
  wicket.innerHTML = starting_minus;
})
