export const calculateWetWellDesign = (inputs) => {
  const { averageFlowMLD, peakFactor, efficiency, timeForOnePumpCycle, minDepthBelowInvertM, diameterOfInvertPipeMM, suctionHeadM, deliveryHeadM } = inputs;
  const averageFlowM3PerDay = averageFlowMLD * 1000;
  const averageFlowM3PerSec = averageFlowM3PerDay / (24 * 60 * 60);
  const averageFlowM3PerMin = averageFlowM3PerSec * 60
  const peakFlowM3PerMin = averageFlowM3PerMin * peakFactor;
  const volumeOfWetWellM3 = (peakFlowM3PerMin * timeForOnePumpCycle) / 4;
  const requiredAreaOfWetWellM2 = volumeOfWetWellM3 / minDepthBelowInvertM;
  const computedWellDiameterM = Math.sqrt( ( 4 * requiredAreaOfWetWellM2 ) / Math.PI );
  const staticHeadM = parseFloat(suctionHeadM) + parseFloat(deliveryHeadM);
  const minorLossesM = 0.1 * staticHeadM;
  const TotalManometricHeadM = parseFloat(staticHeadM) + parseFloat(minorLossesM);
  const pumpCapacityKW = (9810 * averageFlowM3PerSec * TotalManometricHeadM) / ( efficiency / 100) / 1000
  const requiredpumpCapacityKW = Math.ceil(pumpCapacityKW)
  const standbyPumpCapacityKW = 0.5 * parseFloat(requiredpumpCapacityKW)

  return {
    averageFlowMLD,
    averageFlowM3PerDay,
    averageFlowM3PerSec: averageFlowM3PerSec.toFixed(3),
    averageFlowM3PerMin: averageFlowM3PerMin.toFixed(3),
    peakFactor,
    peakFlowM3PerMin: peakFlowM3PerMin.toFixed(3),
    volumeOfWetWellM3: volumeOfWetWellM3.toFixed(3),
    minDepthBelowInvertM,
    requiredAreaOfWetWellM2: requiredAreaOfWetWellM2.toFixed(3),
    computedWellDiameterM: computedWellDiameterM.toFixed(3),
    diameterOfInvertPipeMM,
    staticHeadM,
    minorLossesM,
    TotalManometricHeadM,
    efficiency,
    pumpCapacityKW: pumpCapacityKW.toFixed(3),
    requiredpumpCapacityKW,
    standbyPumpCapacityKW
  };
};