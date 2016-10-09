//返回所有小于传入数值的斐波那契数列中的奇数之和

function findNum(n)   //求传入下标对应的斐波那契数值
{
    if( 2 == n || 3 == n){
        return 1;
    }else if(1 == n){
        return 0;
    }
    else{
        return findNum(n-1) + findNum(n-2);
    }
}

function sumFibs(num){  //传入一个数，找小于它的数值最大下标
    var n = 1;      //下标
    var sum = 0;    //当前下标对应的斐波那契数值
    var sumOdd = 0; //奇数之和
    while(1){       //从1开始遍历所有下标
        sum = findNum(n);

        if(sum % 2 !== 0){
            sumOdd += sum;
        }

        if(sum > num){
            return sumOdd -= findNum(n);
        }else if( sum == num){
            return sumOdd;
        }else{
            n+=1;
        }
        
    } 
}

sumFibs(4);//应该返回5
sumFibs(1000);// 应该返回 1785。
sumFibs(75024);//应该返回 60696。