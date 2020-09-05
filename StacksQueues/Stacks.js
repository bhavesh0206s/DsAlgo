class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size
  }
  pop(val){
    if(!this.first) return null
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next
    }
    this.size--;
    return this
  }
}

let stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(2);
stack.push(1);
console.log(stack.pop())