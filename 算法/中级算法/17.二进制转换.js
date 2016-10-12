//传入二进制字符串，翻译成英语句子并返回
function binaryAgent(str) {
    var arr = str.split(' ');
    var arrs = [];

    for(var i=0; i<=arr.length-1; i++){
        var ten = parseInt(arr[i],2);    //二进制转换为十进制
        arrs.push(String.fromCharCode(ten));
    }
    return arrs.join('');
}

 binaryAgent("01000001 01110010 01100101 01101110 00100111 \
    01110100 00100000 01100010 01101111 01101110 01100110 \
    01101001 01110010 01100101 01110011 00100000 01100110 \
    01110101 01101110 00100001 00111111");  //返回 "Aren't bonfires fun!?"

