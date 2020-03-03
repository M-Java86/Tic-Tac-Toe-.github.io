function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  else {
    var pivot = arr.pop();
    var left = arr.filter(function(item){ return item <= pivot; });
    var right = arr.filter(function(item){ return item > pivot; });
    return quickSort(left).concat([pivot], quickSort(right));
  }
}
