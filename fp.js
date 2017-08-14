var func = function(x, y) {
  return function(a) {
    return 'returning ' + a + ', ' + x + ', ' + y; 
  };
};

var c = func('a', 'b');

console.log( c('c') );
