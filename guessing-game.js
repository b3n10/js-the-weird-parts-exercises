/*
 * Author: Francis Ben Lleve
 * Vanila JS
 * Randomize numbers compared against each other
 * Most rounds of win, wins the game
 *
*/

function Player(name) {
  this.name = name;
  this.number = 0;
  this.win_count = 0;
};

Player.prototype.randomme = function() {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Player.prototype.getrandom = function() {
  while (array_number.length < 100) {
    var i = this.randomme();
    if (array_number.indexOf(i) < 0) {
      array_number.push(i);
      return i;
    }
  }
  return false;
};

var p1 = new Player('ben');
var p2 = new Player('ethan');
var round_number = 1;
var array_number = [];
var x, y;

console.log(p1.name + " vs " + p2.name);

var fighting = setInterval(function() {
  x = p1.getrandom();
  y = p2.getrandom();

  if (x === false && y === false) {
    clearInterval(fighting);

    if (p1.win_count > p2.win_count) {
      console.log(p1.name + " with " + p1.win_count + " wins is the Overall Champion!");
    } else if (p1.win_count < p2.win_count) {
      console.log(p2.name + " with " + p2.win_count + " wins is the Overall Champion!");
    } else {
      console.log("It's a Draw!");
    }
    
    return;
  }
  
  console.log("Round " + round_number + ", Fight !");
  console.log(p1.name + " chooses " + x);
  console.log(p2.name + " chooses " + y);

  if (x > y) {
    console.log(p1.name + " wins !\n");
    p1.win_count++;
  } else if (x < y) {
    console.log(p2.name + " wins !\n");
    p2.win_count++;
  }

  round_number++;
}, 1000);

