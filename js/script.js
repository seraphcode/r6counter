// Code goes here

var variables = {
//  back: '<a href="index.html">Select Operator</a>',
//  counters: 'Counters',
//  countered: 'Countered By',
//  team: 'Team With',
//  avoid: 'Avoid When',
  smoke: 'Smoke',
  fuzename: 'Fuze'
};

for(var v in variables) {
  document.getElementById(v).innerHTML = variables[v];
}
