//为每一个碱基找到配对的碱基，返回碱基对数组
function pair(str) {
    var arr = [];

    for(var i=0; i<str.length;i++){
        switch(str[i]){
            case 'A':arr.push(["A","T"]);break;
            case 'T':arr.push(["T","A"]);break;
            case 'C':arr.push(["C","G"]);break;
            case 'G':arr.push(["G","C"]);break;
            default:break;
        }
    }
  return arr;
}

pair("GCG");
