//console.log
function Computer(keyboard, battery) {
  this.keyboard = keyboard;
  this.battery = battery + " hrs";
}

var laptop = new Computer("PH", 9);
console.log("My new laptop has battery life of", laptop.battery);
