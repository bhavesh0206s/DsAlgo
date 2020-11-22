class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = [];
    return this.adjacencyList
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      });
    })(start);
    return result
  }

  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    let currentVertex;
    while (stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result
  }

  breathFirst(start){
    const queue = [start];
    const result = [];
    const visited = [];
    visited[start] = true;
    let currentVertex;
    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor =>{
        if(!visited[neighbor]){
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      })
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g);
g.depthFirstRecursive("A");
console.log(g.depthFirstIterative("A"))
console.log(g.breathFirst("A"))