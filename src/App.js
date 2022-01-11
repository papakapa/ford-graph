import { useCallback, useState } from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import { getPath } from './utils/utils';
import GraphVertex from './structures/graph/GraphVertex';
import bellmanFord from './alg/bellman-ford/bellmanFord';
import './App.css';
import { buildEdges, buildGraph, buildVertices } from './utils/constructor';

function App() {
  const xDomain = [0, 9];
  const yDomain = [0, 80];
  const [result, setResult] = useState(null);
  const [maxHeight, setMaxHeight] = useState(null);
  const [maxSpeed, setMaxSpeed] = useState(null);
  const [path, setPath] = useState(null);

  const handleHeightInput = ({target}) => setMaxHeight(target.value);
  const handleSpeedInput = ({target}) => setMaxSpeed(target.value);

  const calculate = useCallback(() => {
    if (!maxSpeed || !maxHeight) {
      return;
    }
    const lastVertex = new GraphVertex(`${maxSpeed},${maxHeight}`);

    const vertices = buildVertices();
    const edges = buildEdges(vertices);

    const graph = buildGraph(edges, lastVertex);

    const { distances, previousVertices } = bellmanFord(graph, vertices[0]);
    const getPathLength = (speed, height, minSpeed = 1, minHeight= 10) => {
      const speedDiff = speed - minSpeed;
      const heightDiff = height - minHeight;

      return speedDiff + (heightDiff/10);
    };
    const pathLength = getPathLength(Number(maxSpeed), Number(maxHeight));
    const exceptedPath = getPath(previousVertices, lastVertex.value, pathLength);

    setResult(distances[lastVertex.value]);
    setPath(exceptedPath);
  }, [maxHeight, maxSpeed]);

  return (
    <div className="App">
      <div className='inputForm'>
        <input id='height' type='number' min={10} max={70} step={10} onChange={handleHeightInput}/>
        <label htmlFor='height'>Enter max height</label>
        <input id='speed' type='number' min={1} max={9} step={1} onChange={handleSpeedInput}/>
        <label htmlFor='speed'>Enter max speed</label>
      </div>
      <div className='controls'>
        <button onClick={calculate} className="custom-btn btn-1">Calculate</button>
      </div>
      <div className='graph'>
        { path &&
        <XYPlot width={300} height={300} {...{xDomain, yDomain}}>
          <HorizontalGridLines />
          <LineSeries data={path}/>
          <XAxis />
          <YAxis />
        </XYPlot>
        }
      </div>
      <div className='resultPath'>
        <input id='result' value={result ? result : 'Oooops'} disabled/>
        <label htmlFor='result' style={ {margin: '10px'}}>Result path</label>
      </div>
    </div>
  );
}

export default App;
