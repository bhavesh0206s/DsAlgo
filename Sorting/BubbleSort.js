function swap(arr, indx1, indx2){
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function BubbleSort(array){
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i-1; j++) {
      if(array[j] > array[j+1]){
        swap(array, j, j+1)
        noSwaps = false;
      }
    }
    if(noSwaps) break;    
  }
  return array;
}

console.log(BubbleSort([45,7,12,75,2, 5]))
