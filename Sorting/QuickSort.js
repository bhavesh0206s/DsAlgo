function pivot(arr, start = 0, end = arr.length){
  function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start+1; i < end +1 ; i++) {
    const element = arr[i];
    if(element < pivot){
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

// console.log(pivot([4,2,1,5,7,6,3]))

function QuickSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pivotIdx = pivot(arr, left, right);
    //left subArr
    QuickSort(arr, left, pivotIdx-1);
    //right subArr
    QuickSort(arr, pivotIdx+1, right)
  }
  return arr;
}

console.log(QuickSort([-5,5,4,8,2,1,5,7,6,3]))