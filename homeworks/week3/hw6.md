## hw1：好多星星
這一題在 leetcode 課程已經做過多個變化題了，所以在解題
的過程沒有遇到甚麼大問題。
## hw2：水仙花數
我在還沒進到本周進度之前，有先嘗試過解過這題。但卻卡了好
一陣子的關。
到了這一周，因為要解 LIOJ 所以開始慢慢熟悉了轉換 data type
的方式。所以到了這周之後就將這個方法應用在這一題。

而在這一題，因為側資是陣列的方式拿到的，所以個元素的 data type
會是字串。所已可以利用字串的特性得出他的位數，在將它的 data type
轉為數字，個別計算後加總，就可以得到答案了。 
## hw3：判斷質數
解這一題的時候，我覺得邏輯一下就打通了，用了雙重迴圈來解這題，在丟
到 LIOJ 之後卻被判定為 Time Limit Exceed。但是經過幾次 debug 找
不太出來問題點，也想不出新的解法，所以想請教老師。
## hw4：判斷迴文
這題其實際是反轉字串的小變化題而已，所以沒有特別的困難點。
## hw5：聯誼順序比大小
這一題是我以為是單純的比大小覺得最簡單，卻不斷卡關至今，到現在還是找不到問題點在哪，這邊可能需要麻煩助教老師們幫我檢查一下問題的癥結點!

### hw5 程式碼

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