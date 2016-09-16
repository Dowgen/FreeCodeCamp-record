//给定一个乱序数组和一个数字，要求帮数组排序，然后把数字插入数组中对应的位置，返回位置。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css">
    <title></title>
    <script type="text/javascript">
        function where(arr, num) {
  // Find my place in this sorted array.
            arr.sort(function(a,b){
                return a-b;
            });
            for(var i=0;i<arr.length;i++){
                if(num<=arr[i]){
                
                    return i;
                }
            }
            return arr.length;
        }
        
    where([40, 60], 50);

    </script>
</head>
<body>
    
</body>
</html>