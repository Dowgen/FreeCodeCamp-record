//合并两个代表货物的二维数组

function updateInventory(arr1, arr2) {
    var arrs = [];  //结果数组
    var obj = {};   //用来判断货物是否存在

    //先把已有货物放入判断对象 和 结果数组
    for(var i=0; i<arr1.length; ++i){  
        obj[arr1[i][1]] = true;
        arrs.push(arr1[i]);   
    }
    //再进行两货物的合并计算
    for(var j=0; j<arr2.length; ++j){
        if(obj[arr2[j][1]] !== true){        //如果不存在此货物，则放入判断对象和结果数组即可
            obj[arr2[j][1]] = true;
            arrs.push(arr2[j]);    
        }else{                       //如果存在，要做合并计算
            for(var x=0; x<arrs.length; ++x){
                if(arrs[x][1] === arr2[j][1]){
                    arrs[x][0] += arr2[j][0];
                }
            }
        }
    }

    //按货物首字母排序
    return arrs.sort(function(a,b){return a[1][0].charCodeAt(0) - b[1][0].charCodeAt(0); });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

/*

updateInventory() 
应该返回一个数组.

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], 
[3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length 
应该返回一个长度为6的数组.

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], 
[[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
应该返回 [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], 
[5, "Microphone"], [7, "Toothpaste"]].

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) 
应该返回 [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
应该返回 [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], 
[[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) 
应该返回 [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], 
[1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


*/
