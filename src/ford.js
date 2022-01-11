const getNeighbors = (vertex, edges) => {
  const exceptedEdges = edges.filter(el => {
    const {startVertex, endVertex} = el;
    return vertex === startVertex || vertex === endVertex;
  });

  return exceptedEdges.map(el => el.startVertex === vertex ? el.endVertex : el.startVertex);
};

const findEdge = (vertex, neighbor, edges) => {
  const [result] = edges.filter(el => {
    const {startVertex, endVertex } = el;

    return (startVertex === vertex || startVertex === neighbor) && (endVertex === neighbor || endVertex === vertex);
  });

  return result;
};

const algorithm = (vertices, edges, startVertex) => {
  const distances = {};
  const previousVertices = {};

  distances[startVertex] = 0;
  vertices.forEach((vertex) => {
    if (vertex !== startVertex) {
      distances[vertex] = Infinity;
    }
  });

  // We need (|V| - 1) iterations.
  vertices.forEach(() => {
    Object.keys(distances).forEach((vertexKey) => {
      const vertex = vertices.find(el => el === vertexKey);
      // Go through all vertex edges.
      getNeighbors(vertex, edges).forEach((neighbor) => {
        const edge = findEdge(vertex, neighbor, edges);
        // Find out if the distance to the neighbor is shorter in this iteration
        // then in previous one.
        const distanceToVertex = distances[vertex];
        const distanceToNeighbor = distanceToVertex + edge.value;
        if (distanceToNeighbor < distances[neighbor]) {
          distances[neighbor] = distanceToNeighbor;
          previousVertices[neighbor] = vertex;
        }
      });
    });
  });

  return {
    distances,
    previousVertices,
  };
}

export { algorithm };