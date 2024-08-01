import React, { useState } from 'react';
import PeakFactor from './PeakFactor';
import Efficiency from './PumpEfficiency';

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validateInputs = (inputs) => {
    const errors = {};
    if (!inputs.averageFlowMLD || inputs.averageFlowMLD <= 0) {
      errors.averageFlowMLD = 'Average Flow must be greater than 0';
    }
    if (!inputs.peakFactor || inputs.peakFactor <= 0) {
      errors.peakFactor = 'Peak Factor must be greater than 0';
    }
    if (!inputs.efficiency || inputs.efficiency <= 0 || inputs.efficiency > 100) {
      errors.efficiency = 'Efficiency must be between 0 and 100';
    }
    if (!inputs.timeForOnePumpCycle || inputs.timeForOnePumpCycle <= 0) {
      errors.timeForOnePumpCycle = 'Time for one pump cycle must be greater than 0';
    }
    if (!inputs.minDepthBelowInvertM || inputs.minDepthBelowInvertM <= 0) {
      errors.minDepthBelowInvertM = 'Minimum Depth Below Invert must be greater than 0';
    }
    if (!inputs.diameterOfInvertPipeM || inputs.diameterOfInvertPipeM <= 0) {
      errors.diameterOfInvertPipeM = 'Diameter of Invert Pipe must be greater than 0';
    }
    if (!inputs.suctionHeadM || inputs.suctionHeadM <= 0) {
      errors.suctionHeadM = 'Suction Head must be greater than 0';
    }
    if (!inputs.deliveryHeadM || inputs.deliveryHeadM <= 0) {
      errors.deliveryHeadM = 'Delivery Head must be greater than 0';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs(inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onCalculate(inputs);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Average Flow (MLD): </label>
        <input type="number" name="averageFlowMLD" value={inputs.averageFlowMLD} onChange={handleChange} />
        {errors.averageFlowMLD && <span style={{ color: 'red' }}>{errors.averageFlowMLD}</span>}
      </div>
      <div>
        <label>Peak Factor: </label>
        <select name="peakFactor" value={inputs.peakFactor} onChange={handleDropdownChange}>
          <option value="">Select Peak Factor</option>
          {PeakFactor.map((factor) => (
            <option key={factor.id} value={factor.value}>
              {factor.population} - {factor.value}
            </option>
          ))}
        </select>
        {errors.efficiency && <span style={{ color: 'red' }}>{errors.efficiency}</span>}
      </div>
      <div>
        <label>Efficiency (%): </label>
        <select name="efficiency" value={inputs.efficiency} onChange={handleDropdownChange}>
          <option value="">Select Efficiency</option>
          {Efficiency.map((factor) => (
            <option key={factor.id} value={factor.value}>
              {factor.pump} - {factor.value}%
            </option>
          ))}
        </select>
        {errors.efficiency && <span style={{ color: 'red' }}>{errors.efficiency}</span>}
      </div>
      <div>
        <label>Time for one pump cycle (min): </label>
        <input type="number" name="timeForOnePumpCycle" value={inputs.timeForOnePumpCycle} onChange={handleChange} />
        {errors.timeForOnePumpCycle && <span style={{ color: 'red' }}>{errors.timeForOnePumpCycle}</span>}
      </div>
      <div>
        <label>Minimum Depth Below Invert (m): </label>
        <input type="number" name="minDepthBelowInvertM" value={inputs.minDepthBelowInvertM} onChange={handleChange} />
        {errors.minDepthBelowInvertM && <span style={{ color: 'red' }}>{errors.minDepthBelowInvertM}</span>}
      </div>
      <div>
        <label>Diameter of Invert Pipe (mm): </label>
        <input type="number" name="diameterOfInvertPipeM" value={inputs.diameterOfInvertPipeM} onChange={handleChange} />
        {errors.diameterOfInvertPipeM && <span style={{ color: 'red' }}>{errors.diameterOfInvertPipeM}</span>}
      </div>
      <div>
        <label>Suction Head (m): </label>
        <input type="number" name="suctionHeadM" value={inputs.suctionHeadM} onChange={handleChange} />
        {errors.suctionHeadM && <span style={{ color: 'red' }}>{errors.suctionHeadM}</span>}
      </div>
      <div>
        <label>Delivery Head (m): </label>
        <input type="number" name="deliveryHeadM" value={inputs.deliveryHeadM} onChange={handleChange} />
        {errors.deliveryHeadM && <span style={{ color: 'red' }}>{errors.deliveryHeadM}</span>}
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default WetWellForm;
