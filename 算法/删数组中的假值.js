//删除数组中所有假值
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  return arr.filter(function(n){
    if( n!= (false||null||0||""||undefined||NaN))
            return n;
    });
}

  bouncer([7, "ate", "", false, 9]);
