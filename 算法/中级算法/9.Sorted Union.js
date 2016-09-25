//传入两个或两个以上的数组，返回一个以给定的原始数组排序的、不包含重复值的、新数组
//例如：unite([1, 2, 3], [5, 2, 1]) 应该返回 [1, 2, 3, 5]
//     unite([1, 3, 2], [1, [5]], [2, [4]]) 应该返回 [1, 3, 2, [5], [4]]。
    function unite(arr1, arr2, arr3) {
        var arr = [];  //最终数组
        
        for(var i=0;i<arguments.length;i++)
            for(var j=0; j<arguments[i].length; j++){
                if(arr.indexOf(arguments[i][j]) != -1){
                    continue;
                }else{
                    arr.push(arguments[i][j]);
                }
            }

        return arr;
    }
unite([1, 2, 3], [5, 2, 1]);