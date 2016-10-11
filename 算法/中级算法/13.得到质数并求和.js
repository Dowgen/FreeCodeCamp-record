//求小于等于给定数值的质数之和
function sumPrimes(num) {
    var sum = 0;
  
  if(0 === num || 1 === num){
        return 0;
  }
  
    for(var i=2; i<=num; i++){
        for(var j=2; j<=i; j++){
            if(0 === i%j  && i != j){
              break;
            }else if(i == j){
              sum += i;
            }
        }
    }
    return sum;
}

sumPrimes(10);
