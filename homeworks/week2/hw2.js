function capitalize(str){
  var newstr = "";
  var i = 1;
  while(i <= str.length){
    newstr = newstr + str[i];
    i++;
  }
  str = str[0].toUpperCase() + newstr;
  return str
}

console.log(capitalize('hello'));
