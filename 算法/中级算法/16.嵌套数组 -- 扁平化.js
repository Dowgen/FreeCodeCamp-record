//对嵌套的数组进行扁平化处理
function steamroller(arr) {
   var arrs = [];
    for(var i=0; i<=arr.length-1; i++) {

        if(!Array.isArray(arr[i])){
            arrs.push(arr[i]);
            
        }else{
            arrs = arrs.concat( steamroller(arr[i]));
        }
    }
    return arrs;
}

steamroller([1, [2], [3, [[4]]]]);//[1,2,3,4]
steamroller([[["a"]], [["b"]]]); //[a,b]
