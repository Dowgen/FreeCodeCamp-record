//找出两个数组中不同的元素，放入一个新数组中并返回

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i=0;i<arr1.length;i++){
    if( -1 == arr2.indexOf(arr1[i]) ){
      newArr.push(arr1[i]);
    }
  }
  for(i=0;i<arr2.length;i++){
    if( -1 == arr1.indexOf(arr2[i])){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
