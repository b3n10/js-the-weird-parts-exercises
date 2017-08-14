//prototype is recommended only for methods of the object and not the properties
function Computer(type, keyboard, battery) {
  this.type = type;
  this.keyboard = keyboard;
  this.battery = battery + " hrs";
}

var acer = new Computer("laptop", "PH", 9);

Computer.prototype.getInfo = function() {
  return this.type + ' info: ' + this.keyboard + ', ' + this.battery;
};

console.log(acer.getInfo());

Computer.prototype.screen = "LCD";

console.log(acer.screen);

