import GraphVertex from './structures/graph/GraphVertex';
import GraphEdge from './structures/graph/GraphEdge';
import Graph from './structures/graph/Graph';

const vertex110 = new GraphVertex('1,10');
const vertex120 = new GraphVertex('1,20');
const vertex130 = new GraphVertex('1,30');
const vertex140 = new GraphVertex('1,40');
const vertex210 = new GraphVertex('2,10');
const vertex220 = new GraphVertex('2,20');
const vertex230 = new GraphVertex('2,30');
const vertex240 = new GraphVertex('2,40');
const vertex310 = new GraphVertex('3,10');
const vertex320 = new GraphVertex('3,20');
const vertex330 = new GraphVertex('3,30');
const vertex340 = new GraphVertex('3,40');
const vertex410 = new GraphVertex('4,10');
const vertex420 = new GraphVertex('4,20');
const vertex430 = new GraphVertex('4,30');
const vertex440 = new GraphVertex('4,40');

const edge1121 = new GraphEdge(vertex110, vertex210, 12);
const edge2131 = new GraphEdge(vertex210, vertex310, 11);
const edge3141 = new GraphEdge(vertex310, vertex410, 10);
const edge1222 = new GraphEdge(vertex120, vertex220, 11);
const edge2232 = new GraphEdge(vertex220, vertex320, 9);
const edge3242 = new GraphEdge(vertex320, vertex420, 8);
const edge1323 = new GraphEdge(vertex130, vertex230, 10);
const edge2333 = new GraphEdge(vertex230, vertex330, 8);
const edge3343 = new GraphEdge(vertex330, vertex430, 8);
const edge1424 = new GraphEdge(vertex140, vertex240, 12);
const edge2434 = new GraphEdge(vertex240, vertex340, 13);
const edge3444 = new GraphEdge(vertex340, vertex440, 12);
const edge1112 = new GraphEdge(vertex110, vertex120, 11);
const edge1213 = new GraphEdge(vertex120, vertex130, 10);
const edge1314 = new GraphEdge(vertex130, vertex140, 8);
const edge2122 = new GraphEdge(vertex210, vertex220, 9);
const edge2223 = new GraphEdge(vertex220, vertex230, 8);
const edge2324 = new GraphEdge(vertex230, vertex240, 7);
const edge3132 = new GraphEdge(vertex310, vertex320, 10);
const edge3233 = new GraphEdge(vertex320, vertex330, 10);
const edge3334 = new GraphEdge(vertex330, vertex340, 8);
const edge4142 = new GraphEdge(vertex410, vertex420, 12);
const edge4243 = new GraphEdge(vertex420, vertex430, 11);
const edge4344 = new GraphEdge(vertex430, vertex440, 9);

const graph = new Graph();
graph
    .addVertex(lastVertex)
    .addEdge(edge1121)
    .addEdge(edge2131)
    .addEdge(edge3141)
    .addEdge(edge1222)
    .addEdge(edge2232)
    .addEdge(edge3242)
    .addEdge(edge1323)
    .addEdge(edge2333)
    .addEdge(edge3343)
    .addEdge(edge1424)
    .addEdge(edge2434)
    .addEdge(edge3444)
    .addEdge(edge1112)
    .addEdge(edge1213)
    .addEdge(edge1314)
    .addEdge(edge2122)
    .addEdge(edge2223)
    .addEdge(edge2324)
    .addEdge(edge3132)
    .addEdge(edge3233)
    .addEdge(edge3334)
    .addEdge(edge4142)
    .addEdge(edge4243)
    .addEdge(edge4344);