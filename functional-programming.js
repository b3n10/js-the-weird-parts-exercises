//classic example of functional programming
//not able to understand it yet 

var my_array1 = [1, 2, 3];

var getArray = function( arr, fn ) {
  var newArray = [];
  for (var i = 0; i < arr.length ; i++) {
    newArray.push(
      fn( arr[i] )
    );
  }
  return newArray;
};

var checkValue = function(value) {
  return function(value, index) {
    return index > value;
  }.bind(this, value);
};

console.log( getArray( my_array1, checkValue(2) ) );
