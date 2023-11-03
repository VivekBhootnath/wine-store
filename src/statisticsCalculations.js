function calculateStatistics(data, attribute) {
    const stats = {};
  
    // Group data by value of key "alcohol"
    data.forEach((item) => {
      const className = item.Alcohol;
      if (!stats[className]) {
        stats[className] = {
          mean: 0,
          median: 0,
          mode: 0,
          values: [],
        };
      }
      stats[className].values.push(parseFloat(item[attribute]));
    });
  
    // Calculation for each class
    
    Object.keys(stats).forEach((className) => {
      const values = stats[className].values;
      stats[className].mean = calculateMean(values);
      stats[className].median = calculateMedian(values);
      stats[className].mode = calculateMode(values);
    });
  
    return stats;
  }
  
  function calculateMean(values) {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }
  
  function calculateMedian(values) {
    const sortedValues = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
  
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
      return sortedValues[mid];
    }
  }
  
  function calculateMode(values) {
    const valueCount = {};
    let maxCount = 0;
    let mode = null;
  
    values.forEach((value) => {
      valueCount[value] = (valueCount[value] || 0) + 1;
      if (valueCount[value] > maxCount) {
        maxCount = valueCount[value];
        mode = value;
      }
    });
  
    return mode;
  }
  
  function calculateGamma(data) {
    return data.map((item) => ({
      ...item,
      Gamma: (parseFloat(item.Hue) * parseFloat(item.Ash)) / parseFloat(item.Magnesium),
    }));
  }
  
  export { calculateStatistics, calculateGamma };