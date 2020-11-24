function NavieStringSearch(strLong, strShort){
  let count = 0;
  for(let i = 0; i< strLong.length; i++){
    for(let j = 0; j< strShort.length; j++){
      console.log(strLong[i+j])
      if(strLong[i+j] !== strShort[j]) break;
      if(j === strShort.length-1) count++;
    }
  }
  return count;
}

console.log(NavieStringSearch('lorli klol jfljlol', 'lol'));