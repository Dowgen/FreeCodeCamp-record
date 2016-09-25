//从传递进来的字母序列中找到缺失的字母并返回它。
//如 fearNotLetter("abce") 应该返回 "d"。
function fearNotLetter(str) {
    for(var i=0; i<str.length-1; i++){
        if(str[i].charCodeAt(0) != str[i+1].charCodeAt(0) - 1){
            return String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
    }
    return undefined;
}
fearNotLetter("abce");