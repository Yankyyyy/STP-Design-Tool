// src/components/WetWellForm.js
import React, { useState } from 'react';

const WetWellForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    efficiency: '',
    timeForOnePumpCycle: '',
    minDepthBelowInvertM: '',
    diameterOfInvertPipeM: '',
    suctionHeadM: '',
    deliveryHeadM: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Average Flow (MLD): </label>
        <input type="number" name="averageFlowMLD" value={inputs.averageFlowMLD} onChange={handleChange} />
      </div>
      <div>
        <label>Peak Factor: </label>
        <input type="number" name="peakFactor" value={inputs.peakFactor} onChange={handleChange} />
      </div>
      <div>
        <label>Efficiency (%): </label>
        <input type="number" name="efficiency" value={inputs.efficiency} onChange={handleChange} />
      </div>
      <div>
        <label>Time for one pump cycle (min): </label>
        <input type="number" name="timeForOnePumpCycle" value={inputs.timeForOnePumpCycle} onChange={handleChange} />
      </div>
      <div>
        <label>Minimum Depth Below Invert (m): </label>
        <input type="number" name="minDepthBelowInvertM" value={inputs.minDepthBelowInvertM} onChange={handleChange} />
      </div>
      <div>
        <label>Diameter of Invert Pipe (mm): </label>
        <input type="number" name="diameterOfInvertPipeM" value={inputs.diameterOfInvertPipeM} onChange={handleChange} />
      </div>
      <div>
        <label>Suction Head (m): </label>
        <input type="number" name="suctionHeadM" value={inputs.suctionHeadM} onChange={handleChange} />
      </div>
      <div>
        <label>Delivery Head (m): </label>
        <input type="number" name="deliveryHeadM" value={inputs.deliveryHeadM} onChange={handleChange} />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default WetWellForm;