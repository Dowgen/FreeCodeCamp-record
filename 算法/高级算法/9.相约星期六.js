//在数组中找到两个数，若他们的和为第二个参数arg，就配对，配过的不能再配。
//配完了剩下单身狗无法配对
function pairwise(arr, arg) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === arg){
                sum +=i;
                sum +=j;
                arr[j] = 999;  //赋一个超大值，使这个下标不再被配对
                break;
            }
        }
    }
    return sum;
}

/*
测试案例：
    pairwise([1, 4, 2, 3, 0, 5], 7) 应该返回 11.
    pairwise([1, 3, 2, 4], 4) 应该返回 1.
    pairwise([1, 1, 1], 2) 应该返回 1.
    pairwise([0, 0, 0, 0, 1, 1], 1) 应该返回 10.
    pairwise([], 100) 应该返回 0.
*/