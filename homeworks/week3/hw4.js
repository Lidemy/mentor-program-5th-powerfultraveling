
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
    let temp = lines[0];
    let str = "";
    let i = temp.length - 1;
    while (i >= 0) {
        str = str + temp[i];
        i--
    }
    if (str === temp) {
        console.log("True")
    } else {
        console.log("False")
    }
}