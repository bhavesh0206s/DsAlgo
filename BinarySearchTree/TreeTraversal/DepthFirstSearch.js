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
  
  dfsPreOrder(){
    let current = this.root;
    let data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(current);
    return data
  }

  dfsPostOrder(){
    let current = this.root;
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data
  }

  dfsInOrder(){
    let current = this.root;
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(current);
    return data
  }
}

let binarySearchTree = new BST();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(13);
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(20);
console.log('preOrder:  ',binarySearchTree.dfsPreOrder());
console.log('postOrder: ',binarySearchTree.dfsPostOrder());
console.log('inOrder:   ',binarySearchTree.dfsInOrder());