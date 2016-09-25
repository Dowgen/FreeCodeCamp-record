//对句子执行一次查找和替换，然后返回新句子
//注：替换时保持原单词的大小写模式，如：你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
function myReplace(str, before, after) {

    if(before[0] <= 'Z' && after[0] >= 'a'){    //若before第一位为大写且after第一位为小写
        var asc  = after[0].charCodeAt(0);     //则把after第一位转换为大写
        var arr1 = after.split('');
        arr1[0]  = String.fromCharCode(asc-32);
        after = arr1.join('');
    }

    var arr = str.split(' ');
    for(var i=0; i<arr.length; i++){
        if(arr[i] == before ){
            arr[i] = after;
        }
    }

    return arr.join(' ');
}