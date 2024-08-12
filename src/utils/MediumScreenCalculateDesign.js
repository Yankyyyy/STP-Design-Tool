function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}


export const calculateMediumScreenDesign = (inputs) => {
  const { averageFlowMLD, clearOpeningBetweenAdjacentBarsMM, peakFactor, barsThicknessOfScreenMM, depthOfWaterInScreenM, velocityThroughScreenMPerSec,
    angleOfInclinationWithTheHorizontalDeg, freeBoardM, widthOfEachSideWallMM } = inputs;
  const angleOfInclinationWithTheHorizontalRad = degreesToRadians(angleOfInclinationWithTheHorizontalDeg)
  const averageFlowM3PerSec = ( averageFlowMLD * 1000 ) / ( 24 * 60 * 60 );
  const peakFlowMLD = parseFloat(averageFlowMLD) * parseFloat(peakFactor);
  const peakFlowM3PerSec = parseFloat(averageFlowM3PerSec) * parseFloat(peakFactor);
  const areaOfTheScreenM2 = parseFloat(peakFlowM3PerSec) / parseFloat(velocityThroughScreenMPerSec);
  const widthOfOpeningM = parseFloat(areaOfTheScreenM2) / parseFloat(depthOfWaterInScreenM);
  const numberOfOpenings = Math.ceil(( widthOfOpeningM * 1000 ) / parseFloat(clearOpeningBetweenAdjacentBarsMM) );
  const numberOfBars = numberOfOpenings - 1;
  const widthOfTheScreenMM = ( parseFloat(numberOfOpenings) * parseFloat(clearOpeningBetweenAdjacentBarsMM) ) + ( parseFloat(numberOfBars) * parseFloat(barsThicknessOfScreenMM) );
  const totalWidthOfChannelMM = parseFloat(widthOfTheScreenMM) + ( 2 * widthOfEachSideWallMM );
  const lengthOfTheScreenM = ( parseFloat(depthOfWaterInScreenM) + parseFloat(freeBoardM) ) / Math.sin(angleOfInclinationWithTheHorizontalRad);
  const computedLengthOfTheScreenChannelM = ( 10 * widthOfTheScreenMM ) + ( ( parseFloat(depthOfWaterInScreenM) + parseFloat(freeBoardM) ) * 1000 * ( 1 / Math.tan(angleOfInclinationWithTheHorizontalRad)));
  const approachVelocityInTheChannelMPerSec = parseFloat(peakFlowM3PerSec) / ( parseFloat(widthOfTheScreenMM) * parseFloat(depthOfWaterInScreenM) * 0.001 );
  const computedVelocityThroughTheScreenMPerSec = parseFloat(peakFlowM3PerSec) / ( depthOfWaterInScreenM * clearOpeningBetweenAdjacentBarsMM * numberOfOpenings * 0.001);
  const headLossWithoutCloggingM = 0.0729 * ( computedVelocityThroughTheScreenMPerSec**2 - approachVelocityInTheChannelMPerSec**2 );
  const velocityForHalfCloggedScreenMPerSec = 2 * computedVelocityThroughTheScreenMPerSec;
  const headLossWithHalfCloggingM = 0.0729 * ( velocityForHalfCloggedScreenMPerSec**2 - approachVelocityInTheChannelMPerSec**2 );

  return {
    averageFlowMLD,
    averageFlowM3PerSec: averageFlowM3PerSec.toFixed(3),
    peakFactor,
    peakFlowMLD,
    peakFlowM3PerSec: peakFlowM3PerSec.toFixed(3),
    areaOfTheScreenM2: areaOfTheScreenM2.toFixed(3),
    depthOfWaterInScreenM,
    widthOfOpeningM:widthOfOpeningM.toFixed(3),
    clearOpeningBetweenAdjacentBarsMM,
    barsThicknessOfScreenMM,
    numberOfOpenings,
    numberOfBars,
    widthOfTheScreenMM: widthOfTheScreenMM.toFixed(3),
    angleOfInclinationWithTheHorizontalDeg,
    freeBoardM,
    lengthOfTheScreenM: lengthOfTheScreenM.toFixed(3),
    computedLengthOfTheScreenChannelM: computedLengthOfTheScreenChannelM.toFixed(3),
    widthOfEachSideWallMM,
    totalWidthOfChannelMM: totalWidthOfChannelMM.toFixed(3),
    approachVelocityInTheChannelMPerSec: approachVelocityInTheChannelMPerSec.toFixed(3),
    computedVelocityThroughTheScreenMPerSec: computedVelocityThroughTheScreenMPerSec.toFixed(3),
    headLossWithoutCloggingM: headLossWithoutCloggingM.toFixed(3),
    velocityForHalfCloggedScreenMPerSec: velocityForHalfCloggedScreenMPerSec.toFixed(3),
    headLossWithHalfCloggingM: headLossWithHalfCloggingM.toFixed(3)
  };
};