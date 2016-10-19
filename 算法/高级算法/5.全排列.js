//全排列算法
//思路：每一位都是第一位，这一位是第一位之后，后面的每一位都是第二位(也就是除去第一位的第一位），然后三四...以此类推
//任务：从全排列中找出没有连续重复字符的字符串（如“abab”），并返回个数

function swap(arr,i,j) { 
    if(i!=j) { 
        var temp=arr[i]; 
        arr[i]=arr[j]; 
        arr[j]=temp; 
    } 
} 

var count=0; 


function permAlone(str) {
    var arr = str.split('');
    (function fn(n) { //为第n个位置选择元素 
        for(var i=n;i<arr.length;i++) { 
            swap(arr,i,n); 
            if(n+1<arr.length-1){ //判断数组中剩余的待全排列的元素是否大于1个 
                fn(n+1); //从第n+1个下标进行全排列 
            }
            else{        //如果没有要排列的了，这就是结果数组，然后加入计数
                ++count;   
                for(var j=0;j<arr.length-1;j++){
                    if(arr[j] === arr[j+1]){
                        --count;        ////如果此排列有相邻重复项，不计入结果，--count；
                        break;
                    }
                }
            }
            swap(arr,i,n); 
        } 
    })(0); 
    return count;
} 

/*
    permAlone("aab") 应该返回一个数字.
    permAlone("aab") 应该返回 2.
    permAlone("aaa") 应该返回 0.
    permAlone("aabb") 应该返回 8.
    permAlone("abcdefa") 应该返回 3600.
    permAlone("abfdefa") 应该返回 2640.
    permAlone("zzzzzzzz") 应该返回 0.
*/



