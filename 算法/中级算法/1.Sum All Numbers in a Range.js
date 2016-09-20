//给两个数，求它们之间所有数的总和
function sumAll(arr) {
  var arr1=[];
  var min=Math.min(arr[0],arr[1]);
  var max=Math.max(arr[0],arr[1]);
  for(var i=min;i<=max;i++){
    arr1.push(i);
  }
  return arr1.reduce(function(a,b){return a+b;});
}

sumAll([1, 4]);
