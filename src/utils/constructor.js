import { vertices, xValues, yValues } from '../constants';
import GraphVertex from '../structures/graph/GraphVertex';
import GraphEdge from '../structures/graph/GraphEdge';
import Graph from '../structures/graph/Graph';

const buildVertices = () => vertices.map(el => new GraphVertex(el));
const buildEdges = (vertices) => {
  const xEdges = [];
  const yEdges = [];
  let i = 0;
  let xCounter = 0;
  vertices.forEach((el, index) => {
    const [speed, height] = el.value.split(',');
    if (height === '70') {
      return;
    }
    yEdges.push(new GraphEdge(el, vertices[index+1], yValues[i]));
    i++;
  });

  for (let y = 0; y < 7; y++) {
    for (let z = 0; z < 8; z++) {
      const index = y + z*7;
      const exceptedIndex = y + (z+1)*7;
      xEdges.push(new GraphEdge(vertices[index], vertices[exceptedIndex], xValues[xCounter]));
      xCounter++;
    }
  }

  return [ ...xEdges, ...yEdges];
};
const buildGraph = (edges, exceptedVertex) => {
  const graph = new Graph();
  graph.addVertex(exceptedVertex);
  edges.forEach(el => graph.addEdge(el));

  return graph;
};

export { buildVertices, buildEdges, buildGraph };
