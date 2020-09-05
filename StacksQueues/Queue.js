class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(!this.first) return null;
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;
    }
    this.size--;
    return this
  }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(1);
console.log(queue.dequeue());