function printFactor(n){
  var i = 0;
  while(i <= n){
    if(n%i === 0){
      console.log(i);
    }
    i++
  }
}

printFactor(10);
