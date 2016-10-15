//函数sym功能：接受两个或多个数组，返回所给数组的 对称差集合数组.

//函数功能：返回两数对称差集合数组，用来给reduce用
function func(pval,val,index,array){  //array是arguments[]数组，pval，val是array内的元素，也就是函数的参数
    var arrs = [];  //用途：得到两数组的对称差

    for(var i=0; i<=pval.length-1; i++){
        if(val.indexOf(pval[i]) === -1){
            arrs.push(pval[i]);
        }

    }
    for(i=0; i<=val.length-1; i++){
        if(pval.indexOf(val[i]) === -1){
            arrs.push(val[i]);
        }

    }

    return arrs;

}
function sym(args) {
    var arr = [];   //参数集合

    for(var i=0; i<=arguments.length-1; i++){
        arr.push(arguments[i]);
    }

    //遍历传入数组，求对称差
    var arrs = arr.reduce(func);

    //为arrs去重
    var result = [];
    var obj = {};    //临时对象，用来验证数字是否已存在（用来替代效率不高的indexOf）
    for(i=0; i<=arrs.length-1;i++){

        if(!obj[arrs[i]]){  //如果数字不存在
            obj[arrs[i]] = true;
            result.push(arrs[i]);
        }
    }

    return result;
}