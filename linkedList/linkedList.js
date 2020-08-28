class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
} 

class LinkedList{
  constructor(){
    this.head = null;
    this.length = 0;
  };

  print(){//print linkedList
    let current = this.head;
    let linkedListItems = [];
    while(current){
      linkedListItems.push(current.value);
      current = current.next;
    }
    return {linkedListItems, length: this.length}
  }

  push(val){// push value at the end of LL
    let current = this.head;
    let newNode = new Node(val);
    if(this.length === 0) this.head = newNode;
    else{
      while (current.next){
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  pop(){// remove last element
    if(this.length === 1) this.head = null;
    else{
      let current = this.head.next;
      let preValue = this.head;
      while(current.next){
        current = current.next;
        preValue = preValue.next;
      }
      preValue.next = null;
    }
    this.length--;
    return this;
  };

  unshift(val){// push value at the start of LL
    let current = this.head;
    let newNode = new Node(val);
    this.head = newNode;
    this.head.next = current;
    this.length++
    return this
  };

  shift(){// remove first element
    let current = this.head;
    this.head = current.next;
    this.length--
    return this
  };

  insert(index, val){// insert at any index
    let newNode = new Node(val);
    if(index === 0){
      this.unshift(val)
    } else{
      let current = this.head.next;
      let preValue = this.head
      for(let i = 0; i<index-1; i++){
        current = current.next;
        preValue = preValue.next;
      }
      preValue.next = newNode;
      newNode.next = current;
    }
    this.length++
    return this
  }

  remove(index){// remove value at any index
    if(index >= this.length ) return 'Index out of range';
    if(index === 0){
      this.shift()
    } else {
      let current = this.head.next;
      let preValue = this.head
      for(let i = 0; i<index-1; i++){
        current = current.next;
        preValue = preValue.next;
      }
      preValue.next = current.next;
    }
    this.length--
    return this
  }
  
  reverse(){// reverse the LL
    let current = this.head;
    let prev = null;
    let temp;
    while(current){
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
    return this;
  }

}

let linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(4);
linkedList.push(3);
linkedList.push(5);
linkedList.push(6);
linkedList.unshift(7);
linkedList.shift(7);
linkedList.insert(0,10);
linkedList.remove(2);
console.log('original: ',linkedList.print());
linkedList.reverse();
console.log('reversed: ',linkedList.print());
