//将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
//如 < 转换成  &​lt; ，& 转换成 &amp;

//注：目前根据题目要求，暂时只匹配 & < > ' " 五个符号。

function convert(str) {
        var arr = str.split('');
        var exp=/>|<|&|"|'/g;
        var result;

       while ((result = exp.exec(str)) !== null)  {

            if(result[0] == '&'){
                arr[exp.lastIndex-1] = "&amp;";
            }else if(result[0] == '<'){
                arr[exp.lastIndex-1] = "&lt;";
            }else if(result[0] == '>'){
                arr[exp.lastIndex-1] = "&gt;";
            }else if(result[0] == "'"){
                arr[exp.lastIndex-1] = "&apos;";
            }else if(result[0] == '"'){
                arr[exp.lastIndex-1] = "&quot;";
            }
        }
    return arr.join('');
}

convert("Dolce & Gabbana");
