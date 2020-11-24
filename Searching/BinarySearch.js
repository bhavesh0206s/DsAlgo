function BinarySearch(arr, val){
  let start = 0;
  let middle = 0; Math.floor(arr.length/2);
  let end = arr.length-1;
  let found = false;

  while (!found && start<=end){
    if(val === arr[middle]){
      found = true;
    }else if (val > arr[middle]){
      start = middle + 1;
    }else{
      end = middle - 1;
    }
    middle = Math.floor((start+end)/2);
  }
  return found;
}

const search = BinarySearch([1,2,3,5,8,45,74, 75, 98], 20);

console.log(search)

