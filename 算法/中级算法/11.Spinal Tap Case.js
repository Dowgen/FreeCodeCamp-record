function spinalCase(str) {
        var arr = [];        //初始数组
        var exp = /_| /g;    //分割点
        //如果str原来自己有分隔符，就把分隔符转换为'-'，如果没有，就要在分割单词时在单词前加上'-'达到同样的效果。

        var lowArr = [];          //小写后的数组
        var lowStr = "";          //小写后的单词

        if(exp.test(str))  //如果原字符串是以符号分割
        {
            var result = exp.exec(str);          //得到字符串分割符
            arr = str.split(result);             //以该分隔符分割字符串，得到数组

            for(var i=0;i<arr.length;i++)
            {
                var arrtemp = arr[i].split('');    //每个单词转化的数组
                var asc = arrtemp[0].charCodeAt(0);//每个单词的首字母
                if(asc >= 65 && asc <= 90)      //如果首字母是大写
                {    
                    arrtemp[0] = String.fromCharCode(asc+32);
                    lowStr = arrtemp.join('');
                }
                if(lowStr)  //如果有被转换的单词就push进去
                {
                    lowArr.push(lowStr);
                    lowStr = "";
                }else       //没有就把原单词push进去
                {
                    lowArr.push(arr[i]);
                }
                
            }

            return lowArr.join('-');

        }else            //原字符串没有分割符号，则直接以大写字母分割
        {
            arr = str.split('');
            for(var j=0;j<arr.length;j++)
            {
                var asc2 = arr[j].charCodeAt(0);
                if(asc2 >= 65 && asc2 <= 90)  //找到大写的首字母
                {
                    arr[j] = String.fromCharCode(asc2+32);
                    arr.splice(j,0,'-');
                }
            }


            return arr.join('');
        }
  
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
