/*如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
  （忽略大小写）
   举例，["hello", "Hello"]应该返回true
         ["hello", "hey"]应该返回false

*/
function mutation(arr) {
  var arr1=arr[0].toLowerCase();
  var arr2=arr[1].toLowerCase();
  for(var i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1){
      return false;
    }
  }
    return true;
}

mutation(["hello", "hey"]);
