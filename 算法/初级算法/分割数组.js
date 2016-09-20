/*
把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
*/
function chunk(arr, size) {
  // Break it up.
  
  var result=[];
  
  var num=Math.ceil(arr.length/size);
  var size2=size;
  
  for(var i=0,j=0;j<num;i+=size,size2+=size,j++){
    result.push(arr.slice(i,size2));
    
  }
  return result;
}

chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
