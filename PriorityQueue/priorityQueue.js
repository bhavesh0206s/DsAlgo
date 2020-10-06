class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(val, priority){
    let newNode = new Node(val,priority);
    this.values.push(newNode);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parentEle = this.values[parentIdx];
      if(element.priority >= parentEle.priority) break;   
      this.values[parentIdx] = element;
      this.values[idx] = parentEle;
      idx = parentIdx;
    }
  }

  dequeue(){
    let min = this.values[0];
    let length = this.values.length;
    let end = this.values.pop();
    if(length>0){
      this.values[0] = end;
      let element = this.values[0];
      let parentIdx = 0;
      while (true){
        let leftChildIdx = Math.floor((2*parentIdx)+1);
        let rightChildIdx = Math.floor((2*parentIdx)+2);
        let leftChild = this.values[leftChildIdx];
        let rightChild = this.value[rightChildIdx];

        if(leftChildIdx < length && leftChild.priority < element.priority){
          swap = leftChildIdx;
        }

        if(
          (rightChildIdx < length) &&
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority)
        ){
          swap = rightChildIdx;
        }

        if(swap === null) break;
        this.values[parentIdx] = this.values[swap];
        this.values[swap] = element;
        parentIdx = swap;
      }
    }
    return min
  }
}

const pq = new PriorityQueue();
pq.enqueue('fever', 3);
pq.enqueue('accident', 1);
pq.enqueue('bleeding', 2);
pq.enqueue('headache', 4);
console.log(pq)