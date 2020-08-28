class Node{
  constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  print(){//print linkedList
    let current = this.head;
    let arr = [];
    while (current){

      arr.push(current.value)
      current = current.next
    }
    return {DLLItems: arr, length: this.length}
  }

  push(val){// push value at the end of LL
    let newNode = new Node(val);
    let temp = this.tail;
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode
    } 
    this.length++;
    return this
  }

  pop(){// remove last element
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      let temp = this.tail;
      let prevNode = this.tail.prev;
      prevNode.next = null;
      temp.prev = null;
      this.tail = prevNode;
      this.length--;
    }  
    return this;
  };

  unshift(val){// push value at the start of LL
    let newNode = new Node(val);
    let temp = this.head;
    if(this.length === 1){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = temp;
      temp.prev = newNode;
      this.head = newNode
    } 
    this.length++;
    return this
  };

  shift(){// remove first element
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }else{
      let temp = this.head;
      let nextNode = this.head.next;
      nextNode.prev = null;
      temp.next = null;
      this.head = nextNode;
      this.length--;
    }
    return this;
  };

  insert(index, val){// insert at any index
    
  }

  remove(index){// remove value at any index
    
  }
  
  reverse(){// reverse the LL
    
  }

}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(56);
doublyLinkedList.unshift(99);
doublyLinkedList.shift();
doublyLinkedList.shift();
doublyLinkedList.pop();
doublyLinkedList.pop();
doublyLinkedList.pop();
console.log(doublyLinkedList.print());
