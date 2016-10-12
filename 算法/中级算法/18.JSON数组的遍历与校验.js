//集合(collection)中的所有对象都存在对应的键，并且键值为真。函数返回ture。反之，返回false
function every(collection, pre) {
    var col = collection;
    for(var i=0; i<=col.length-1; i++){
        if(col[i].hasOwnProperty(pre)){ //如果此对象有这个键
            if(col[i][pre]){        //如果键值为真(0,NaN,"",undefined都为假)
                continue;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
}

every( [ {"user": "Tinky-Winky", "sex": "male"}, 
         {"user": "Dipsy", "sex": "male"}, 
         {"user": "Laa-Laa", "sex": "female"}, 
         {"user": "Po", "sex": "female"} ],  "sex");