//丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止
function drop(arr,func){
    var len = arr.length;
    for(var i=0; i<=len-1; i++){
        if(false === func(arr[0])){ //如果有不通过的就drop
            arr.shift();
        }else{          //一旦通过就返回剩余的数组
            return arr;
        }
    }
    return []; //如果全部不通过的就返回空数组
}


drop([1, 2, 3, 4], function(n) {return n >= 3;}); //[3,4]
drop([0, 1, 0, 1], function(n) {return n === 1;}); //[1,0,1]
drop([1, 2, 3, 4], function(n) {return n > 5;});  //[]
drop([1, 2, 3, 7, 4], function(n) {return n > 3;}) //[7,4]