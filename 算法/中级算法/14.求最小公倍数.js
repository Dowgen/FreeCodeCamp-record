//找出能被两个给定参数和它们之间的连续数字整除的最小公倍数
function smallestCommons(arr) {

    var inum = 0;  //要插入的数
    var i =0;      //插入数的下标
    var head = arr[0];
    var tail = arr[arr.length -1];
    var d_val;     //数组头尾之间的差

    //填充数组
    if(tail > head){

        d_val = tail - head; 
    
        for(i = 1,inum = head+1; i<d_val; i++, inum++){  
          arr.splice(i,0,inum);
        }

    }else{

        d_val = head - tail;
        
        for(i = 1,inum = head-1; i<d_val; i++, inum--){
          arr.splice(i,0,inum);
        }
      
  }
  
    var scm = 1; //最小公倍数
  
    while(1){ //寻找最小公倍数

        for(i=0; i<arr.length; i++){ 

            if(scm % arr[i] !== 0){  //若scm不为arr里任何一个元素的倍数，则跳出循环
                break;
            }else if(i == arr.length -1){//当数组中的最后一个数都没有走进上面的分支，则证明scm是所有元素的倍数，即“最小公倍数”
                return scm;
            }

        }
        scm++; //从1开始遍历查找
    }
}


smallestCommons([5,1]); //60
smallestCommons([1,5]); //60
smallestCommons([1,13]); //360360
