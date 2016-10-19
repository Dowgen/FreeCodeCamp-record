//传入海拔高度，返回该高度绕地球一圈的周期
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 0;  //轨道长度
    var a3 = 0; //a的3次方
    var T = 0;  //轨道周期

    for(var i=0; i<arr.length; i++){
        a = earthRadius + arr[i].avgAlt;
        a3 = Math.pow(a,3);

        T = 2*Math.PI*Math.sqrt(a3/GM); //用公式求得轨道周期
        T = Math.round(T);              //四舍五入得到一个最接近整数

        //更改键"avgAlt"为"orbitalPeriod"并赋值
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod = T;
    }
  return arr;
}

/*
测试案例：
    orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 应该返回 [{name: "sputnik", orbitalPeriod: 86400}].

    orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
    应该返回 [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/