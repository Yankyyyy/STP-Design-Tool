// App.js

import React, { useState } from 'react';
import WetWellForm from './components/WetWellForm';
import DesignOutput from './components/DesignOutput';
import { calculateWetWellDesign } from './utils/CalculateDesign';

const App = () => {
  const [outputs, setOutputs] = useState(null);

  const handleCalculate = (inputs) => {
    const calculatedOutputs = calculateWetWellDesign(inputs);
    setOutputs(calculatedOutputs);
  };

  return (
    <div className="App">
      <h1>Wet Well Design Calculator</h1>
      <WetWellForm onCalculate={handleCalculate} />
      {outputs && <DesignOutput outputs={outputs} />}
    </div>
  );
};

export default App;
