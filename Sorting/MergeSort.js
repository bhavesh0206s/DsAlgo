function merge(array1, array2){
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length){
    if(array1[i] < array2[j]){
      mergedArray.push(array1[i]);
      i++;
    }else {
      mergedArray.push(array2[j])
      j++
    }
  }

  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}

// console.log(merge([4,12], [1]))

function MergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = MergeSort(arr.slice(0,mid));
  let right = MergeSort(arr.slice(mid));
  return merge(left, right);
}


console.log(MergeSort([12, 1, 45, 7]))

// console.log(merge([1,10,20, 45], [2,9, 15, 90, 100]))