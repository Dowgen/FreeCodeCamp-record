//一个收银程序，传入 物品价格、付款金额及钱箱当前各面值余额，返回对应各面值找零金额（见测试案例）。
//PS：钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".
// "PENNY"        1美分
// "NICKEL"       5美分
// "DIME"         10美分
// "QUARTER"      25美分
// "ONE"          100美分
// "FIVE"         500美分
// "TEN"          1000美分
// "TWENTY"       2000美分
// "ONE HUNDRED"  10000美分

/*-----------------------------------------------------------------------*/

//函数功能：返回结果数组
function filt(arrs){

    //去除面值为0项
    for(var i=0; i<=arrs.length-1; ++i){

        if(arrs[i][1] === 0){
            arrs.splice(i,1);
            --i;
        }
    }
    //变回美元单位
    for(var j=0; j<=arrs.length-1; ++j){
        arrs[j][1] = arrs[j][1] /100;
    }

    return arrs.reverse();
}

function checkCashRegister(price, cash, cid) {
    var change = [["PENNY",0], ["NICKEL",0], ["DIME",0], ["QUARTER",0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

    var ch = (cash - price)*100;  //得到该找的零,转化成美分单位
    var sum = 0;            //钱箱总额

    //先算好钱箱里的钱够不够还，不够或刚好都直接return
    for(var i=0; i<=cid.length-1; ++i){
        cid[i][1] = (cid[i][1] * 100);
        sum += cid[i][1];
    }

    if(sum < ch){
        return "Insufficient Funds";
    }else if(sum === ch){
        return "Closed";
    }

    //钱箱里的钱大于应该找零才会进入这个分支
    if( ch>=10000 ){

        var money100 = 0;
        for(var c=cid[8][1]; c>=10000; c-=10000){  //如果钱箱里连100块都没有的话（== 0），根本不会进入这个循环
            ch -= 10000;     //有100扣100，扣到ch<100为止
            money100 += 10000; //给顾客的钱多了100

            change[8][1] = money100;

            if(ch === 0){      //如果找零余额为0，则直接返回找零集
                return filt(change);
            }else if(ch < 10000){  //如果不为0，且小于100，则进入下一个面值
                break;
            }
        }
    }
        

    if( ch>=2000 ){

        var money20 = 0;
        for(var c=cid[7][1]; c>=2000; c-=2000){  
            ch -= 2000;    
            money20 += 2000; 

            change[7][1] = money20;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 2000){  
                break;
            }
        }
    }

     if( ch>=1000 ){

        var money10 = 0;
        for(var c=cid[6][1]; c>=1000; c-=1000){  
            ch -= 1000;    
            money10 += 1000; 

            change[6][1] = money10;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 1000){  
                break;
            }
        }
    }

     if( ch>=500 ){

        var money5 = 0;
        for(var c=cid[5][1]; c>=500; c-=500){  
            ch -= 500;    
            money5 += 500; 

            change[5][1] = money5;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 500){  
                break;
            }
        }
    }

     if( ch>=100 ){

        var money1 = 0;
        for(var c=cid[4][1]; c>=100; c-=100){  
            ch -= 100;    
            money1 += 100; 

            change[4][1] = money1;

            if(ch === 0){   
                return filt(change);  
            }else if(ch < 100){ 
                break; 
            }
        }
    }

     if( ch>=25 ){

        var money0_25 = 0;
        for(var c=cid[3][1]; c>=25; c-=25){  
            ch -= 25;    
            money0_25 += 25; 

            change[3][1] = money0_25;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 25){  
                break;
            }
        }
    }

     if( ch>=10 ){

        var money0_1 = 0;
        for(var c=cid[2][1]; c>=10; c-=10){  
            ch -= 10;    
            money0_1 += 10; 

            change[2][1] = money0_1;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 10){  
                break;
            }
        }
    }

     if( ch>=5 ){

        var money0_05 = 0;
        for(var c=cid[1][1]; c>=5; c-=5){  
            ch -= 5;    
            money0_05 += 5; 

            change[1][1] = money0_05;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 5){  
                break;
            }
        }
    }

    if( ch>=1 ){

        var money0_01 = 0;
        for(var c=cid[0][1]; c>=1; c-=1){ 

            money0_01 += 1;  
            ch -= 1;
            

            change[0][1] = money0_01;

            if(ch === 0){     
                return filt(change);
            }else if(ch < 1){  
                break;
            }
 
        }
    }


    //最后余额没有刚好扣完
    if(ch){
        return "Insufficient Funds";
    }
}


/*

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
应该返回一个数组.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
应该返回一个字符串.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
应该返回一个字符串.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
应该返回 [["QUARTER", 0.50]].

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
应该返回 [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
应该返回 "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
应该返回 "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
应该返回 "Closed".

*/


