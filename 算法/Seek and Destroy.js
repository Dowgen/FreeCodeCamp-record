//实线一个函数，第一个参数是数组，根据后面的参数（参数不定）删除数组内对应的元素，并返回
function destroyer(arr) {
  // Remove all the values
  
  var result=new Array();
  for (var i = 0; i < arr.length; i++) {
        result.push(arr[i]);
  }
  arg = arguments;
  for(var i=1;i<arguments.length;i++){
      if(arguments[i] != (false||null||0||""||undefined||NaN)){
        result=result.filter(function(n){
          if(n!= arg[i]) return n;});
      }
      console.log(arguments[i]);
       
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
