// src/components/DesignOutput.js
import React from 'react';

const DesignOutput = ({ outputs }) => {
  return (
    <div>
      <h2>Design Outputs</h2>
      <div>
        <p><b>Average Flow (MLD):</b> {outputs.averageFlowMLD}</p>
        <p><b>Average Flow (m³/day):</b> {outputs.averageFlowM3PerDay}</p>
        <p><b>Average Flow (m³/sec):</b> {outputs.averageFlowM3PerSec}</p>
        <p><b>Average Flow (m³/min):</b> {outputs.averageFlowM3PerMin}</p>
        <p><b>Peak Factor :</b> {outputs.peakFactor}</p>
        <p><b>Peak Flow (m³/min):</b> {outputs.peakFlowM3PerMin}</p>
        <p><b>Volume of Wet Well (m³):</b> {outputs.volumeOfWetWellM3}</p>
        <p><b>Minimum depth below invert of sewer (m³/day):</b> {outputs.minDepthBelowInvertM}</p>
        <p><b>Required Area of the well (m²):</b> {outputs.requiredAreaOfWetWellM2}</p>
        <p><b>Computed well diameter (m):</b> {outputs.computedWellDiameterM}</p>
        <p><b>Diameter of invert pipe (mm):</b> {outputs.diameterOfInvertPipeM}</p>
        <p><b>Static head (m):</b> {outputs.staticHeadM}</p>
        <p><b>Minor losses (m):</b> {outputs.minorLossesM}</p>
        <p><b>Total manometric head (m):</b> {outputs.TotalManometricHeadM}</p>
        <p><b>Efficiency (%):</b> {outputs.efficiency}</p>
        <p><b>Pump Capacity (KW):</b> {outputs.pumpCapacityKW}</p>
      </div>
    </div>
  );
};

export default DesignOutput;
