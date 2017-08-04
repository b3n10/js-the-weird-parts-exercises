//higher order function for arrays
//uses callback functions as arguments
//filter 
var agents = [
  { name: 'Ben', id: 260695 },
  { name: 'Fred', id: 289098 },
  { name: 'Ric', id: 120912 }
]

var twoS = agents.filter(function(agent) {
  return agent.id >= 200000
})

/*
 * for loop
var twoS = []
for (var i = 0;i < agents.length;i++) {
  if (agents[i].id >= 200000)
    twoS.push( agents[i] )
}
*/

console.log( twoS )
