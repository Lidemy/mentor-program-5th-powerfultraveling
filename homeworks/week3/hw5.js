
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
    for (let m = 1; m <= n; m++) {
        let temp = lines[m].split(" ");
        let A = Number(temp[0]);
        let B = Number(temp[1]);
        let K = temp[2];
        if (K === "1") {
            if (A > B) {
                console.log("A")
            } else if (A < B) {
                console.log("B")
            } else if (A === B) {
                console.log("DRAW")
            }
        } else if (K === "-1") {
            if (A < B) {
                console.log("A")
            } else if (A > B) {
                console.log("B")
            } else if (A === B) {
                console.log("DRAW")
            }
        }
    }
}