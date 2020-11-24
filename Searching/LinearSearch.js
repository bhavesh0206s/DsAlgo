function LinearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i;
    return -1
  }
}

let search = LinearSearch([45, 78, 1 ,2 ,95 ,36 ,69, 23], 10);

console.log(search);