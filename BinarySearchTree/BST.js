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
  find(val){
    if(this.root.value === val) return this.root;
    else{
      let current = this.root;
      let found = false;
      while(current && !found){
        if(val < current.value){
          current = current.left;
        }else if(val > current.value){
          current = current.right;
        }else{
          found = true
        }
      }
      if(!found) return undefined;
      return current
    }
  }

}
//          10
//      5       13
//  2     6
//
let binarySearchTree = new BST();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(13);
binarySearchTree.insert(7);
console.log(binarySearchTree.insert(2));
console.log(binarySearchTree.find(10));