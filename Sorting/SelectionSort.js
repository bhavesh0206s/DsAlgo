function swap(arr, indx1, indx2){
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function SelectionSort(array){
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i+1; j < array.length ; j++) {
      if(array[j] < array[minIndex]){
        minIndex = j
      }
    }
    if(i !== minIndex){
      swap(array, i, minIndex)
    }
  }
  return array
}


console.log(SelectionSort([45,7, 12, 4]))
// 2 3 1? 4 j = 3
// 2 3 1 4