var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function () {
  solve(lines)
})

function solve(lines) {
  let n = Number(lines[0]);
  let i = 1;
  while (i <= n) {
    let m = 2;
    while (m <= lines[i] - 1) {
      if (lines[i] % m === 0 || lines[i] === 1) {
        console.log("Composite")
        break
      } else {
        m++
      }
    }
    console.log("Prime")
  }
}