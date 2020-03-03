function mergeSort(arr) {
  if(arr.length <= 1) {
    // Base case: just return it!
    return arr;
  } else {
    // Find the middle index
    var middleIndex = Math.floor(arr.length / 2);

    // Using the middle index, split the array into left and right sides
    var left = arr.slice(0, middleIndex);
    var right = arr.slice(middleIndex, arr.length);

    // Sort both left and right using mergeSort
    var leftSorted = mergeSort(left);
    var rightSorted = mergeSort(right);

    // Merge two sorted arrays together
    return merge(leftSorted, rightSorted);
  }
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}
