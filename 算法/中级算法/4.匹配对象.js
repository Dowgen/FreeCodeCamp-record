//函数传入一个对象数组和一个对象，返回传入数组内所有对象（who包含传入对象所有键值对）组成的数组。
function where(collection, source) {
    var arr    = collection;            //传入数组换名
    var arr1   = [];                    //返回的数组
    var len    = collection.length;     //传入数组的长度
    var s_arr  = Object.keys(source);   //传入对象的所有键
    var s_len  = s_arr.length;          //键数
    var flag   = 0;                     //相同键数标记
    for(var i=0; i<=len-1; i++,flag=0){
        for(var j=0; j<=s_len-1; j++){
            if( arr[i].hasOwnProperty(s_arr[j]) ){            //如果传入数组的某个对象内有这个键值
                if( arr[i][s_arr[j]] == source[s_arr[j]] ){   //则看看它的键值和传入对象的键值是否一样
                    ++flag;                                   //一样就增加一个标记
                }
                console.log(flag);
                if(flag==s_len){                             //当相同键数标记等于传入对象的键数时 
                    arr1.push(arr[i]);                       //则证明这个对象完全包含传入对象，push！
                    break;
                }
            }
        }
    }
    return arr1;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
