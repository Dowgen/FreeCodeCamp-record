//如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
//插入到字符串尾部的三个点号也会计入字符串的长度。
function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length>num){
    if(num<=3){
      var str1=str.slice(0,num);
      str1+="...";
      return str1;
    }else{
      var str2=str.slice(0,num-3);
      str2+="...";
      return str2;
    }
  }else{
    return str;
  }

}

truncate("A-tisket a-tasket A green and yellow basket", 11);
