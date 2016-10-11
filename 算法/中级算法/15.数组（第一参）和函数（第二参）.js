//返回数组中第一个通过方法（第二个参数）验证的元素
function find(arr,func){
    for(var i=0; i<=arr.length-1; i++){
        if(true == func(arr[i]))
            return arr[i];
    }
}
find([1, 2, 3, 4], function(num){ return num % 2 === 0; });