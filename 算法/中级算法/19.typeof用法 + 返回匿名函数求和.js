//函数功能见测试数据
function add(n){
    if( 2 === arguments.length){ //如果参数有2个
      
        var sum = 0;
      
        for(var i=0; i<=1; i++){

            if(typeof arguments[i] === 'number'){ //判断每个参数是否为数字
              
                sum += arguments[i];
              
            }else{              //只要任何一个参数不是数字，应题目要求返回undefined
                return undefined;
            }
        }
        return sum;
    }else{               //参数只有1个，证明需要返回一个函数来接收第二个参数
      
        if(typeof n === 'number'){ //判断第一个参数是否为数字
            
            return function(m){ 
                       if(typeof m === 'number'){ //判断第二个参数是否为数字
                           return n+m;     //是的话返回匿名函数求和
                       }else{
                           return undefined;
                       }}
            
        }else{              //如果传入参数不是数字，应题目要求返回undefined
            return undefined;
        }
    }
}

/*
    add(2, 3) 应该返回 5。
    add(2)(3) 应该返回 5。
    add("http://bit.ly/IqT6zt") 应该返回 undefined。
    add(2, "3") 应该返回 undefined。
    add(2)([3]) 应该返回 undefined。
*/
