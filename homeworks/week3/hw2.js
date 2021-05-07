
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
  var line = lines.split(" ");
  var  n = parseInt(line[0]);
  var  m = parseInt(line[1]);
  var i = n;
  while(i <= m){
    var str = i.toString();
    var long = str.length;
    var k = 0;
    var num = 0;
    while(k <= (long - 1)){
      num = num + (parseInt(str[k])**long);
      k++
    }
    if(num === i){
      console.log(i);
    }
    i++
  }
}