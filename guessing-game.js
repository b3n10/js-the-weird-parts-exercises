function Player(name) {
  this.name = name;
  this.number = 0;
}

Player.prototype.randomme = function() {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var p1 = new Player('ben');
var p2 = new Player('ethan');
var round_number = 1;
var array_number = [];
var x, y;

console.log(p1.name + " vs " + p2.name);

var fighting = setInterval(function() {
  x = makerandom(p1);
  y = makerandom(p2);

  if (x === false && y === false) {
    clearInterval(fighting);
    return;
  }
  
  console.log("Round " + round_number + ", Fight !");
  console.log(p1.name + " chooses " + x);
  console.log(p2.name + " chooses " + y);

  if (x > y) {
    console.log(p1.name + " wins !\n");
  } else if (x < y) {
    console.log(p2.name + " wins !\n");
  } else if (x === y) {
    console.log("It's a draw!");
    clearInterval(fighting);
  }

  round_number++;
}, 1000);

function makerandom(obj) {
  while (array_number.length < 100) {
    var i = obj.randomme();
    if (array_number.indexOf(i) < 0) {
      array_number.push(i);
      return i;
    }
  }
  return false;
}

