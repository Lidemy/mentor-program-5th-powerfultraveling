var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines){
  let n = Number(lines[0]);
  let i = 1;
  let str = "";
  while(i <= n){
    str = str + "*";
    console.log(str);
    i++
  }
}