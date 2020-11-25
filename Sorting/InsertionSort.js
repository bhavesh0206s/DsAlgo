function InsertionSort(array){
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    let j;
    for (j = i-1; j >= 0 && array[j] > element; j--) {
      array[j+1] = array[j];
    }
    console.log(j)
    array[j+1] = element;
  }
  return array
}

console.log(InsertionSort([45,7, 12, 4]))
