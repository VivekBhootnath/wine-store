import React from 'react';

function StatisticsTable({ data, stats, title, prifix }) {
  
  const product = getUniqueClasses(data, 'Alcohol');

  return (
    <div>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Measures</th>
            {product.map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
          <tr>
            <td> Mean</td>
            {product.map((className) => (
              <td key={className}>{stats[className].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td> Median</td>
            {product.map((className) => (
              <td key={className}>{stats[className].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Mode</td>
            {product.map((className) => (
              <td key={className}>{stats[className].mode.toFixed(3)}</td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

// using keys as class indexing

function getUniqueClasses(data, key) {
  return [...new Set(data.map((item) => item[key]))];
}

export default StatisticsTable;
