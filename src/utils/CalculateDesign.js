// src/utils/calculateDesign.js
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

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


export const calculateCoarseScreenDesign = (inputs) => {
  const { averageFlowMLD, peakFactor, minFlowFactor, coarseScreenOpeningMM, depthOfWaterInScreenM, velocityThroughScreenMPerSec,
    angleOfInclinationWithTheHorizontalDeg, freeBoardM, widthOfEachBarMM, widthOfEachSideWallMM } = inputs;
  const angleOfInclinationWithTheHorizontalRad = degreesToRadians(angleOfInclinationWithTheHorizontalDeg)
  const averageFlowM3PerSec = ( averageFlowMLD * 1000 ) / ( 24 * 60 * 60 );
  const peakFlowMLD = parseFloat(averageFlowMLD) * parseFloat(peakFactor);
  const peakFlowM3PerSec = parseFloat(averageFlowM3PerSec) * parseFloat(peakFactor);
  const minFlowM3PerSec = parseFloat(averageFlowM3PerSec) * parseFloat(minFlowFactor);
  const areaOfTheScreenM2 = parseFloat(peakFlowM3PerSec) / parseFloat(velocityThroughScreenMPerSec);
  const verticalAreaOfTheScreenM2 = parseFloat(areaOfTheScreenM2) * Math.sin( angleOfInclinationWithTheHorizontalRad );
  const lengthOfTheScreenM = ( parseFloat(depthOfWaterInScreenM) + parseFloat(freeBoardM) ) / Math.sin(angleOfInclinationWithTheHorizontalRad);
  const verticalWidthOfOpeningM = parseFloat(verticalAreaOfTheScreenM2) / parseFloat(depthOfWaterInScreenM);
  const inclinedWidthOfTheOpeningM = parseFloat(areaOfTheScreenM2) / parseFloat(depthOfWaterInScreenM);
  const numberOfOpenings = Math.ceil(( verticalWidthOfOpeningM * 1000 ) / coarseScreenOpeningMM);
  const numberOfBars = numberOfOpenings - 1;
  const widthOfTheScreenMM = ( parseFloat(numberOfOpenings) * parseFloat(coarseScreenOpeningMM) ) + ( parseFloat(numberOfBars) * parseFloat(widthOfEachBarMM) );
  const totalWidthOfTheScreenChannelMM = parseFloat(widthOfTheScreenMM) + ( 2 * widthOfEachSideWallMM );
  const computedLengthOfTheScreenChannelM = 2 * ( 5 * verticalWidthOfOpeningM ) + ( ( parseFloat(depthOfWaterInScreenM) + parseFloat(freeBoardM) ) * ( 1 / Math.tan(angleOfInclinationWithTheHorizontalRad)));
  const approachVelocityInTheChannelMPerSec = parseFloat(peakFlowM3PerSec) / ( parseFloat(widthOfTheScreenMM) * parseFloat(depthOfWaterInScreenM) );
  const computedVelocityThroughTheScreenMPerSec = parseFloat(peakFlowM3PerSec) / ( depthOfWaterInScreenM * coarseScreenOpeningMM * numberOfOpenings * 0.001);
  const headLossWithoutCloggingM = 0.0729 * ( parseFloat(computedVelocityThroughTheScreenMPerSec) - parseFloat(approachVelocityInTheChannelMPerSec) );
  const velocityForHalfCloggedScreenMPerSec = 2 * computedVelocityThroughTheScreenMPerSec;
  const headLossWithHalfCloggingM = 0.0729 * ( parseFloat(velocityForHalfCloggedScreenMPerSec) - parseFloat(approachVelocityInTheChannelMPerSec) );

  return {
    averageFlowMLD,
    averageFlowM3PerSec: averageFlowM3PerSec.toFixed(3),
    peakFactor,
    peakFlowMLD,
    peakFlowM3PerSec: peakFlowM3PerSec.toFixed(3),
    minFlowFactor,
    minFlowM3PerSec: minFlowM3PerSec.toFixed(3),
    coarseScreenOpeningMM,
    depthOfWaterInScreenM,
    velocityThroughScreenMPerSec,
    areaOfTheScreenM2: areaOfTheScreenM2.toFixed(3),
    angleOfInclinationWithTheHorizontalDeg,
    verticalAreaOfTheScreenM2: verticalAreaOfTheScreenM2.toFixed(3),
    freeBoardM,
    lengthOfTheScreenM: lengthOfTheScreenM.toFixed(3),
    verticalWidthOfOpeningM: verticalWidthOfOpeningM.toFixed(3),
    inclinedWidthOfTheOpeningM: inclinedWidthOfTheOpeningM.toFixed(3),
    numberOfOpenings,
    numberOfBars,
    widthOfEachBarMM,
    widthOfTheScreenMM: widthOfTheScreenMM.toFixed(3),
    widthOfEachSideWallMM,
    totalWidthOfTheScreenChannelMM: totalWidthOfTheScreenChannelMM.toFixed(3),
    computedLengthOfTheScreenChannelM: computedLengthOfTheScreenChannelM.toFixed(3),
    approachVelocityInTheChannelMPerSec: approachVelocityInTheChannelMPerSec.toFixed(3),
    computedVelocityThroughTheScreenMPerSec: computedVelocityThroughTheScreenMPerSec.toFixed(3),
    headLossWithoutCloggingM: headLossWithoutCloggingM.toFixed(3),
    velocityForHalfCloggedScreenMPerSec: velocityForHalfCloggedScreenMPerSec.toFixed(3),
    headLossWithHalfCloggingM: headLossWithHalfCloggingM.toFixed(3)
  };
};