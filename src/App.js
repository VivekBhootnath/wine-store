import React from 'react';
import StatisticsTable from './StatisticsTable';
import { calculateStatistics, calculateGamma } from './statisticsCalculations';
import data from './Wine-Data.json'
import './App.css'


function App() {
 

  // Calculating "Gamma" 
  const dataWithGamma = calculateGamma(data);

  const flavanoidsStats = calculateStatistics(data, 'Flavanoids');
  const gammaStats = calculateStatistics(dataWithGamma, 'Gamma');
  

  return (
    <div>
      <StatisticsTable data={data} stats={flavanoidsStats} title="Statistics for Flavanoids" prefix='flavanoid' />
      <StatisticsTable data={dataWithGamma} stats={gammaStats} title="Statistics for Gamma" prefix="Gamma" />
    </div>
  );
}

export default App;
