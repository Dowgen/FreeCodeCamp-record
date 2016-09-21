//将给定的数字转换成罗马数字（限制最大的数字为4999）
function convert(num) {
        var str=num.toString();
        var arr=str.split('');
        var len=arr.length;
        console.log(str);
        for(var i=1;i<=len;i++){
            if(1 == i){
                switch(arr[len-i]){    //先转换个位
                    case '1':arr[len-i]="I";break;
                    case '2':arr[len-i]="II";break;
                    case '3':arr[len-i]="III";break;
                    case '4':arr[len-i]="IV";break;
                    case '5':arr[len-i]="V";break;
                    case '6':arr[len-i]="VI";break;
                    case '7':arr[len-i]="VII";break;
                    case '8':arr[len-i]="VIII";break;
                    case '9':arr[len-i]="IX";break;
                    case '0':arr[len-i]="";         //如果个位是0，且看十位
                           switch(arr[len-i-1]){  
                                case '1':arr[len-i-1]="X";break;
                                case '2':arr[len-i-1]="XX";break;
                                case '3':arr[len-i-1]="XXX";break;
                                case '4':arr[len-i-1]="XL";break;
                                case '5':arr[len-i-1]="L";break;
                                case '6':arr[len-i-1]="LX";break;
                                case '7':arr[len-i-1]="LXX";break;
                                case '8':arr[len-i-1]="LXXX";break;
                                case '9':arr[len-i-1]="XC";break;
                                case '0':arr[len-i-1]="";           //如果十位也是0，且看百位
                                    switch(arr[len-i-2]){ 
                                        case '1':arr[len-i-2]="C";break;
                                        case '2':arr[len-i-2]="CC";break;
                                        case '3':arr[len-i-2]="CCC";break;
                                        case '4':arr[len-i-2]="CD";break;
                                        case '5':arr[len-i-2]="D";break;
                                        case '6':arr[len-i-2]="DC";break;
                                        case '7':arr[len-i-2]="DCC";break;
                                        case '8':arr[len-i-2]="DCCC";break;
                                        case '9':arr[len-i-2]="CM";break;
                                        case '0':arr[len-i-2]="";   //如果百位是0，只看千位
                                            switch(arr[0]){
                                                case '1':return "M";
                                                case '2':return "MM";
                                                case '3':return "MMM";
                                                case '4':return "MMMM";
                                            }
                                        break; 
                                    }
                                break;
                           }
                    break;
                }
            }
            if(2 == i){
                switch(arr[len-i]){    //转换十位
                    case '1':arr[len-i]="X";break;
                    case '2':arr[len-i]="XX";break;
                    case '3':arr[len-i]="XXX";break;
                    case '4':arr[len-i]="XL";break;
                    case '5':arr[len-i]="L";break;
                    case '6':arr[len-i]="LX";break;
                    case '7':arr[len-i]="LXX";break;
                    case '8':arr[len-i]="LXXX";break;
                    case '9':arr[len-i]="XC";break;
                    case '0':arr[len-i]=""; //如果十位也是0，且看百位
                        switch(arr[len-i-1]){ 
                            case '1':arr[len-i-1]="C";break;
                            case '2':arr[len-i-1]="CC";break;
                            case '3':arr[len-i-1]="CCC";break;
                            case '4':arr[len-i-1]="CD";break;
                            case '5':arr[len-i-1]="D";break;
                            case '6':arr[len-i-1]="DC";break;
                            case '7':arr[len-i-1]="DCC";break;
                            case '8':arr[len-i-1]="DCCC";break;
                            case '9':arr[len-i-1]="CM";break;
                            case '0':arr[len-i-1]="";   //如果百位也是0，只看千位
                                switch(arr[0]){
                                    case '1':arr[0]= "M";break;
                                    case '2':arr[0]= "MM";break;
                                    case '3':arr[0]= "MMM";break;
                                    case '4':arr[0]= "MMMM";break;
                                }
                            break; 
                        }
                    break;
                }
            }
            if(3 == i){
                switch(arr[len-i]){    //转换百位
                    case '1':arr[len-i]="C";break;
                    case '2':arr[len-i]="CC";break;
                    case '3':arr[len-i]="CCC";break;
                    case '4':arr[len-i]="CD";break;
                    case '5':arr[len-i]="D";break;
                    case '6':arr[len-i]="DC";break;
                    case '7':arr[len-i]="DCC";break;
                    case '8':arr[len-i]="DCCC";break;
                    case '9':arr[len-i]="CM";break;
                    case '0':arr[len-i]="";   //如果百位是0，只看千位
                        switch(arr[0]){
                            case '1':arr[0]= "M";break;
                            case '2':arr[0]= "MM";break;
                            case '3':arr[0]= "MMM";break;
                            case '4':arr[0]= "MMMM";break;
                        }
                    break; 
                }
            }
            if(4 == i){
                switch(arr[len-i]){    //转换千位
                    case '1':arr[len-i]="M";break;
                    case '2':arr[len-i]="MM";break;
                    case '3':arr[len-i]="MMM";break;
                    case '4':arr[len-i]="MMMM";break;
                }
            }
            
        }
 return arr.join(''); 
}

convert(36);
