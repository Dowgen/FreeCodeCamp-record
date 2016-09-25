//把指定的字符串翻译成 pig latin
function translate(str) {
    var arr = [];   //临时数组
    var str_vowel = "aeiou";  //五个元音
    var str1 = "";  //连续辅音组成的字符串
    var num  = 0;   //str开头的元音数量
    var num1 = 0;   //连续辅音数量

    //拼接字符串
    if(str_vowel.indexOf(str[0]) != -1){    //第一位为元音
      
        return str.concat("way");
      
    }else{
    //第一位为辅音
      for(var i=0; i<str.length; i++){     //计算str 开头元音数量
          if(str_vowel.indexOf(str[i]) != -1){   //indexOf 找不到返回-1，不等于-1表示找的到
              num++;
          }else{
              break;
          }
      }
      for(var j=num; j<str.length; j++){ //从str开头的元音后开始遍历，得到连续辅音组成的数组
          if( (str_vowel.indexOf(str[j]) == -1 ) ){
              num1++;
          }else{
              break;
          }
      }
      str1 = str.substr(num,num1);   //得到连续辅音字符串
      arr = str.split('');
      arr.splice(num,num1);       //删除字符串中的第一个连续辅音
      str = arr.join('');


      return str.concat(str1+"ay");      
    }

}

translate("consonant");
