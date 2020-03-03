var DEFAULT_BUCKET_SIZE = 5;

function bucketSort(arr, numBuckets){
  if(arr.length <= 0){
    return arr;
  }

  var bucketSize = numBuckets || DEFAULT_BUCKET_SIZE;
  var minValue = arr[0];
  var maxValue = arr[0];

  //Determine min and max values
  for(var i = 1; i < arr.length; i++){
    if(arr[i] < minValue){
      minValue = arr[i];
    }
    else if(arr[i] > maxValue){
      maxValue = arr[i];
    }
  }

  // Make buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for(var i = 0; i < buckets.length; i++){
    buckets[i] = [];
  }

  //Distribute between the buckets
  for(var i = 0; i < arr.length; i++){
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  //Sort buckets and then put them back together again
  arr = []
  for(var i = 0; i < buckets.length; i++){
    buckets[i] = someOtherSort(buckets[i]);
    arr = arr.concat(buckets[i]);
  }

  return arr;
}

// For the purpose of bucket sort, the secondary sort it uses isn't
// relevant to the implementation. We'll go ahead and use JavaScript's
// built-in sort which is a merge sort.
function someOtherSort(arr){
  return arr.sort(function(a, b){
    return a - b;
  });
}