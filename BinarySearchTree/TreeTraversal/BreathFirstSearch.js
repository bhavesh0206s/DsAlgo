class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  
  insert(val){
    const newNode = new Node(val)
    if(!this.root){
      this.root = newNode;
      return this;
    }
    else{
      let current = this.root;
      while (true){
        if(val === current.value) return undefined;
        if(val < current.value ){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if(val > current.value ){
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  
  breathFirstSearch(){
    let current = this.root;
    let queue = [current];
    let visited = [];
    while(queue.length !== 0){
      current = queue.shift()
      visited.push(current)
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return visited
  }
}

let binarySearchTree = new BST();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(13);
binarySearchTree.insert(7);
binarySearchTree.insert(2);
console.log(binarySearchTree.breathFirstSearch());