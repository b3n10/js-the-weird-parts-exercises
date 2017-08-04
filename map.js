var agents = [
  { name: 'Ben', id: 260695 },
  { name: 'Fred', id: 289098 },
  { name: 'Ric', id: 120912 }
]

var names = []
for (var i = 0;i < agents.length;i++) {
  names.push( agents[i].name )
}

console.log( names )
