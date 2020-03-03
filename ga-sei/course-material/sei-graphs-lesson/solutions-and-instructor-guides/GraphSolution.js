class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    if (!this.nodes.hasOwnProperty(node)) {
      this.nodes[node] = [];
    }
  }

  addEdge(node, edge) {
    if (this.nodes[node]) {
      this.nodes[node].push(edge);
    }
  }
}

module.exports = { Graph };
