var house = {
  roof: "flat",
  color: "white",
  getHouseInfo: function() {
    var house_info = this.roof + ' ' + this.color;
    return house_info;
  }
}

var clog = function( house_num1, house_num2 ) {
  console.log( "House info: " + this.getHouseInfo() + " with house number " + house_num1  + "-"  + house_num2 );
}

//bind - making a copy of the function and setting up it's parameters [this, other parameters]
var letsLog = clog.bind( house );
letsLog( 46, 31);

var clog_a = function( house_num1, house_num2 ) {
  console.log( "House info: " + this.getHouseInfo() + " with house number " + house_num1  + "-"  + house_num2 );
}.bind( house, 46, 31 );

clog_a( house );

//call & apply
clog_a.call( house, 46, 31 );
clog_a.apply( house, ['46', '31'] );

//IIFE
(function( house_num1, house_num2 ) {
  console.log( "House info: " + this.getHouseInfo() + " with house number " + house_num1  + "-"  + house_num2 );
}).call( house, 46, 31 );

//function borrowing
var house_1 = {
  roof: "flat",
  color: "white",
}

house_1.getHouseInfo = function( hn1, hn2) {
  console.log( "House info: " + this.getHouseInfo() + " with house number " + hn1  + "-"  + hn2 );
}.bind( house, 46, 31 ); // permanent values for the parameters (index 1, 2) - called 'Function Currying'

house_1.getHouseInfo();


