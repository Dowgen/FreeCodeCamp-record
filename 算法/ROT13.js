//ROT13密码 解密函数
function rot13(str) { // LBH QVQ VG!
  var result=[];
  var arr=str.split(' ');
  for(var i=0;i<arr.length;i++){
    var strS=arr[i];
    var arrS=strS.split('');
    for(var j=0;j<arrS.length;j++){
       var num=arrS[j].charCodeAt();
      if(num>=(65+13) && num <=90){
         arrS[j]=String.fromCharCode(num-13);
      }else if(num <= (65+13) && num >= 65){
        arrS[j]=String.fromCharCode(num+13);
      }
    }
    strS=arrS.join('');
    arr[i]=strS;
  }
  str=arr.join(' ');
 
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");
