function arrayToNewString(arr, str){
  var newstr ="";
  var i = 0;
  while(i <= arr.length - 2){
    newstr = newstr + (arr[i] + str)
    i++
  }
  newstr = newstr + arr[arr.length - 1]
  console.log(newstr)
}

arrayToNewString([1, 2, 3], 'ya')

//分隔線

function repeatStr(str, n){
  var newstr = "";
  var i = 0;
  while(i < n){
    newstr = newstr + str;
    i++
  }
  console.log(newstr)
}

repeatStr("kelly", 9)