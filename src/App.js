import React, {useEffect} from "react"
import * as tfvis from '@tensorflow/tfjs-vis'

const renderScatterPlot = () => {
  const series1 = Array(100).fill(0)
    .map(y => Math.random() * 100 - (Math.random() * 50))
    .map((y, x) => ({ x, y, }));

  const series2 = Array(100).fill(0)
    .map(y => Math.random() * 100 - (Math.random() * 150))
    .map((y, x) => ({ x, y, }));

  const series = ['First', 'Second'];
  const scatterData = { values: [series1, series2], series }

  const scatterPlotSurface = { name: 'Random Scatter Plot', tab: 'Charts' };
  tfvis.render.scatterplot(scatterPlotSurface, scatterData);
}

const renderBarChart = () => {

  const barChartData = [
    { index: 0, value: 50 },
    { index: 1, value: 100 },
    { index: 2, value: 150 },
  ];

  // Get a surface
  const barchartSurface = tfvis.visor().surface({ name: 'Boring Bar Chart', tab: 'Charts' });
  
  // Render a barchart on that surface
  tfvis.render.barchart(barchartSurface, barChartData, {});
}

const App = () => {
  useEffect(() => {
    renderBarChart()
    renderScatterPlot()
  }, [])

  return <div />
}

export default App
