var house = {
  roof: "flat",
  color: "white",
  getHouseInfo: function() {
    var house_info = this.roof + ' ' + this.color;
    return house_info;
  }
}

var clog = function() {
  console.log( "House info: " + this.getHouseInfo() );
}

var letsLog = clog.bind( house );

letsLog();

