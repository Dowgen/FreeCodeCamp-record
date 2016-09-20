//返回一个数组被截断n个元素后还剩余的元素
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);