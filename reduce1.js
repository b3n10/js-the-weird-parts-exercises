var numbers = [
  { price: 100 },
  { price: 50 },
  { price: 400 },
  { price: 30 },
]

var total_amount = numbers.reduce(function(sum, number) {
  console.log('Sum is', sum,'Price is',number)
  return sum + number.price
}, 0)
/*
var total_amount = 0
for (var i = 0;i < numbers.length;i++) {
  total_amount += numbers[i].price
}
*/

console.log(total_amount)
