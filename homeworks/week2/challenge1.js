
//本題我剛好連結到 cs50 的第二堂課，撕電話簿的情節，
//所以接下來的邏輯不是我個人想出來的，而是剛好之前
//看過 cs50 所以做出來的。
//
//1,先取陣列位於中間的數字，看看那個數字與目標數字之間
//  的關係。
//2,接下來會有三種狀況:
//  * 那個數字剛好就是目標數字
//  * 那個數字比目標數字大，則可以丟掉又半邊。
//  * 那個數字比目標數字小，則可以丟掉左半邊。
//3,不斷重複，最後就可以找到那個數字，而且通常
//  比線性去找還要有效率。

//-------------接下來嘗試把它轉成程式語言---------------
//
//1, 設定兩邊邊界，取中間的那個數。
//2, 設 min = 最小數；max = 最大數
//   (最小和最大index)
//3, 設中間數middle等於 min + max /2(但這邊有個問題，如果
//    元素總共是基數怎麼辦?---用 Math.floor())
//4, 接下來會有幾種狀況
//   * arr[middle] > 目標數，則 max = middle - 1;
//   * arr[middle] < 目標數，則 min = middle + 1
//   * arr[middle] = 目標數，return middle
//   * min = max return -1

function findIndex(arr, ziel){
  var min = 0;
  var max = arr.length - 1
  while(min <= max){
    var middle = Math.floor((min+max)/2);//這邊卡關卡了很久，最後才找到了這個 function。
    if(arr[middle] > ziel){
      max = middle - 1;
    }else if(arr[middle] < ziel){
      min = middle + 1;
    }else if(arr[middle] === ziel){
      return middle
    }
  }
  return -1
}

console.log(findIndex([1, 2, 4, 6, 8, 10, 13, 15, 17], 9))