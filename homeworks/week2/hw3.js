function reverse(str){
  var newstr = "";
  var i = (str.length - 1);
  while(i >= 0){
    newstr = newstr + str[i]
    i--
  }
  return newstr
}

reverse('hello');
