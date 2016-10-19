//给一个开始日期和一个结束日期，显示易读的日期差（何为易读？见测试案例）

//字符串->数字
function trans(arr){
    for(var i=0;i<arr.length;++i){
        arr[i] = parseInt(arr[i]);
    }
}
//数字->英语
function transE(arr){
    switch(arr[1]){ //月份
        case 1:arr[1] = "January";break;
        case 2:arr[1] = "February";break;
        case 3:arr[1] = "March";break;
        case 4:arr[1] = "April";break;
        case 5:arr[1] = "May";break;
        case 6:arr[1] = "June";break;
        case 7:arr[1] = "July";break;
        case 8:arr[1] = "August";break;
        case 9:arr[1] = "September";break;
        case 10:arr[1] = "October";break;
        case 11:arr[1] = "November";break;
        case 12:arr[1] = "December";break;
        default:break;
    }
    switch(arr[2]){  //日期
        case 1:arr[2] = "1st";break;
        case 2:arr[2] = "2nd";break;
        case 3:arr[2] = "3rd";break;
        default:arr[2] = arr[2]+"th";
    }
}
//得到俩日期各自改格式后的字符串
function getStr(arr){
    //有标记的都Out
    if(arr[1] === "monthOut"){
        if(arr[0] === "yearOut"){
            return arr[2].toString();  //返回只有日期的字符串
        }else{
            arr.splice(1,1);       //去掉月份
            arr.reverse();         //把年份放后面
            return arr.join(',');  //返回去掉月份的字符串
        }
    }else{
        if(arr[0] === "yearOut"){
            arr.splice(0,1);      //去掉年份
            return arr.join(' '); //把日期和月份以空格分开
        }else{
            //啥标记都没有，则改改格式（年放后边，月日合并）
            var arrm = [];   //用来放日月
            var arrs = [];   //用来放最终数组
            arrm.push(arr[1]);
            arrm.push(arr[2]);

            arrs.push(arrm.join(' '));//把日月合并成一个字符串，压入数组
            arrs.push(arr[0]);      //再把年压入
            return arrs.join(', ');  //日月和年 之间以 逗号+空格 分割
        }
    }
}
function makeFriendlyDates(arr){
    var now = new Date().getFullYear();  //获取当前年份

    //拆分始末日期
    var arr1 = arr[0].split('-');
    var arr2 = arr[1].split('-');

    //字符串->数字
    trans(arr1);
    trans(arr2);

    //如果同年同月同日，直接return结果
    if(arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]){
        transE(arr1);
        var arrm = [];   //用来放日月
        var arrs = [];   //用来放最终数组
        arrm.push(arr1[1]);
        arrm.push(arr1[2]);

        arrs.push(arrm.join(' '));//把日月合并成一个字符串，压入数组
        arrs.push(arr1[0]);      //再把年压入
        return [arrs.join(', ')]; 
    }

    //如果间隔小于1年，不写结束日期的年份
    if(arr2[0] === arr1[0] ||                      //年份相同，肯定小于1年
        (arr2[0] === arr1[0] + 1 && arr2[1] < arr1[1]) ||  //年份不同但月份小于，肯定小于1年
        (arr2[0] === arr1[0] + 1 && arr2[1] === arr1[1] && arr2[2] < arr1[2])) //年不同，月同，日小于，小于1年
    {

        //如果同年同月，不写结束日期的月份
        if(arr1[0] === arr2[0] && arr1[1] === arr2[1]){
            arr2[1] = "monthOut";   
        }

        //间隔小于1年时,若开始日期是今年，则开始日期的年份也不写
        if(arr1[0] === now){
            arr1[0] = "yearOut";
        }

        //最后把结束日期的年份做个标记（最后做是为了不影响上面两个分支）
        arr2[0] = "yearOut";   //先做各标记，一会儿再来收拾它

    }

    //数字->English
    transE(arr1);
    transE(arr2);

    arr[0] = getStr(arr1);
    arr[1] = getStr(arr2);
    return arr;

}

/*  测试案例：
    makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
    makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
    makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
    makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
    makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
    makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
    makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/