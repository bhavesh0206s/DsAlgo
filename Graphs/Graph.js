class Graph{
  constructor(){
    this.adjacency = {};
  }

  addVertex(vertex){
    this.adjacency[vertex] = [];
    return this.adjacency
  }

  addEdge(v1, v2){
    this.adjacency[v1].push(v2);
    this.adjacency[v2].push(v1);
  }

  removeEdge(v1, v2){
    this.adjacency[v1] = this.adjacency[v1].filter(v => v !== v2)
    this.adjacency[v2] = this.adjacency[v2].filter(v => v !== v1)
  }

  removeVertex(vertex){
    while(this.adjacency[vertex].length){
      const adjacentVertex = this.adjacency[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacency[vertex]
  }
}

graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');  
graph.addEdge('B', 'C');  
// graph.removeEdge('A', 'C');  
graph.removeVertex('A');
console.log(graph);