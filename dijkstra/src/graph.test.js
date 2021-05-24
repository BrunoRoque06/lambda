const graph = require('./graph');

test('number of edges', () => {
  expect(graph.calculateNumberEdges(3, 0)).toBe(2);
  expect(graph.calculateNumberEdges(4, 0)).toBe(3);
  expect(graph.calculateNumberEdges(4, 30)).toBe(4);
  expect(graph.calculateNumberEdges(4, 100)).toBe(6);
});

test('create edge pool', () => {
  let edges = graph.createEdgePool(4);

  expect(edges[0]).toEqual([1, 0]);
  expect(edges[1]).toEqual([2, 0]);
  expect(edges[2]).toEqual([2, 1]);
  expect(edges[3]).toEqual([3, 0]);
  expect(edges[4]).toEqual([3, 1]);
  expect(edges[5]).toEqual([3, 2]);
});

test('create edges with 0 density', () => {
  let getInt = (n) => n;
  let edges = graph.createEdges(getInt, 4, 3);

  expect(edges.length).toBe(3);
  expect(edges[0]).toEqual([1, 0]);
  expect(edges[1]).toEqual([2, 0]);
  expect(edges[2]).toEqual([3, 0]);
});

test('create edges with higher density', () => {
  let getInt = (n) => n;
  let edges = graph.createEdges(getInt, 4, 5);

  expect(edges.length).toBe(5);
  expect(edges[0]).toEqual([1, 0]);
  expect(edges[1]).toEqual([2, 0]);
  expect(edges[2]).toEqual([3, 0]);
  expect(edges[3]).toEqual([2, 1]);
  expect(edges[4]).toEqual([3, 1]);
});

test('create graph with 0 density', () => {
  let getInt = (min, max) => (max < 5 ? min : max);

  let g = graph.createGraph(getInt, {
    nVertices: 4,
    density: 0,
    minEdgeCost: 0,
    maxEdgeCost: 10,
  });

  let v0 = g.vertices[0];
  let v1 = g.vertices[1];
  let v2 = g.vertices[2];
  let v3 = g.vertices[3];

  expect(v0.id).toBe('a');
  expect(v0.edges[0].vertex).toEqual(v1);
  expect(v0.edges[0].weight).toBe(10);
  expect(v0.edges[1].vertex).toEqual(v2);
  expect(v0.edges[1].weight).toBe(10);
  expect(v0.edges[2].vertex).toEqual(v3);
  expect(v0.edges[2].weight).toBe(10);

  expect(v1.id).toBe('b');
  expect(v1.edges[0].vertex).toEqual(v0);
  expect(v1.edges[0].weight).toBe(10);

  expect(v2.id).toBe('c');
  expect(v2.edges[0].vertex).toEqual(v0);
  expect(v2.edges[0].weight).toBe(10);

  expect(v3.id).toBe('d');
  expect(v3.edges[0].vertex).toEqual(v0);
  expect(v3.edges[0].weight).toBe(10);
});
