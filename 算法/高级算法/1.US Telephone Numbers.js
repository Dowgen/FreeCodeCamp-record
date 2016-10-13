//传入字符串是一个有效的美国电话号码，返回 true，否则返回false
function telephoneCheck(str){
    var reg = /\D/;             //匹配 非数字
    var reg2 = /\s|\-|\(|\)/;   //匹配空格、横杠和左右圆括号（这些为号码中允许存在的符号）
    var reg3 = /\(|\)/;         //匹配左右圆括号

    var arr1 = str.split(''); //用途：纯数字长度检测
    var arr2 = str.split(''); //用途：带括号数组括号位置检测
    var x1 = 0;    //给arr1用的下标
    var x2 = 0;    //给arr2用的下标

    var i = 0;  //循环变量

    //循环检测每个字符是否达标
    for(i=0,x1=0,x2=0; i<=str.length-1; i++,x1++,x2++){

        if(reg.test(str[i]) && (!reg2.test(str[i])) ){  //这个字符是非数字，而且不是reg2中的任何一种，返回false
            return false;
        }

        //生成纯数字数组，剔除非数字字符
        if(reg.test(str[i])){
            arr1.splice(x1,1);
            x1--;    //arr1中删掉一个数，那么下标在此停一停
        }
        //生成带括号数字数组
        if(reg.test(str[i]) && (!reg3.test(str[i])) ){ //如果是非数字且不带圆括号，则剔除
            arr2.splice(x2,1);
            x2--;    //arr2中删掉一个数，那么下标在此停一停
        }
    }

    //循环完了检查arr1长度是否达标(10位数或11位)
    if(10 == arr1.length){
        console.log("纯数字长度为10");
    }else if(11 == arr1.length){   //如果长度为11，那第一位必须为1
        if(1 == arr1[0]){
            console.log("纯数字长度为11");
        }else{
            return false;          //第一位不是1，报错
        }

    }else{  
        return false;
    }

    console.log(arr2);

    //如果str有括号，则检测左右括号位置是否达标
    if(reg3.test(str)){
        if(arr2.length > 13){
            console.log("arr2.length > 13");
            return false;
        }else if(13 == arr2.length){ //13位，则第一位必须位1
            console.log("带括号长度为13");
            if(1 == arr2[0]){
                if('(' !== arr2[1] || ')' !== arr2[5]){ //左右圆括号的位置是定死的，位置不对就报错
                    console.log("长度13且括号位置不对");
                    return false;
                }
            }else{
                console.log("第一位不是1,错误");
                return false;
            }
        }else{   //因为上面做过纯数字检测，所以不是13肯定是12
            console.log("带括号长度为:"+arr2.length);
            if('(' !== arr2[0] || ')' !== arr2[4]){   //左右圆括号的位置是定死的，位置不对就报错
                console.log("长度13且括号位置不对");
                return false;
            }
        }
    }

    //最后检测第一位是不是横杠
    if('-' == str[0]){
        return false;
    }

    //全部检测成功，返回true
    return true;

}
/*
测试案例：
telephoneCheck("555-555-5555") 应该返回一个布尔值.
telephoneCheck("1 555-555-5555") 应该返回 true.
telephoneCheck("1 (555) 555-5555") 应该返回 true.
telephoneCheck("5555555555") 应该返回 true.
telephoneCheck("555-555-5555") 应该返回 true.
telephoneCheck("(555)555-5555") 应该返回 true.
telephoneCheck("1(555)555-5555") 应该返回 true.
telephoneCheck("1 555)555-5555") 应该返回 false.
telephoneCheck("1 555 555 5555") 应该返回 true.
telephoneCheck("1 456 789 4444") 应该返回 true.
telephoneCheck("123**&!!asdf#") 应该返回 false.
telephoneCheck("55555555") 应该返回 false.
telephoneCheck("(6505552368)") 应该返回 false
telephoneCheck("2 (757) 622-7382") 应该返回 false.
telephoneCheck("0 (757) 622-7382") 应该返回 false.
telephoneCheck("-1 (757) 622-7382") 应该返回 false
telephoneCheck("2 757 622-7382") 应该返回 false.
telephoneCheck("10 (757) 622-7382") 应该返回 false.
telephoneCheck("27576227382") 应该返回 false.
telephoneCheck("(275)76227382") 应该返回 false.
telephoneCheck("2(757)6227382") 应该返回 false.
telephoneCheck("2(757)622-7382") 应该返回 false.
telephoneCheck("555)-555-5555") 应该返回 false.
telephoneCheck("(555-555-5555") 应该返回 false.
*/
