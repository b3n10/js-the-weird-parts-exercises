var vehicle = {
  wheels: 4,
  color: "blue",
  getInfo: function() {
    return "This vehicle has: " + this.wheels + " wheels and is colored " + this.color;
  }
}

for (var mem in vehicle) {
  if (vehicle.hasOwnProperty(mem)) {
    console.log(typeof mem + ': ' + vehicle[mem]);
  }
}

