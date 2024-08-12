export const calculateGritChamberDesign = (inputs) => {
  const { averageFlowMLD, peakFactor, desiredEfficiency, settlingVelocityMPerSec, basinPerformanceIndex, noOfGritChambersProposed,
        widthOfTheTankM, depthOfTheTankM, particleSizeForCriticalDisplacementVelocityMM, freeBoardM, provisionOfSpaceForGritM } = inputs;
  const averageFlowM3PerSec = ( averageFlowMLD * 1000 ) / ( 24 * 60 * 60 );
  const peakFlowMLD = parseFloat(averageFlowMLD) * parseFloat(peakFactor);
  const peakFlowM3PerSec = parseFloat(averageFlowM3PerSec) * parseFloat(peakFactor);
  const peakFlowM3PerDay = peakFlowM3PerSec * (24 * 60 * 60);
  const surfaceOverflowRateMPerDay = ( parseFloat(basinPerformanceIndex) * parseFloat(settlingVelocityMPerSec) ) / (( 1 - (desiredEfficiency * 0.01) )**(-parseFloat(basinPerformanceIndex)) -1);
  const peakFlowPerChamberM3PerDay = parseFloat(peakFlowM3PerDay) / parseFloat(noOfGritChambersProposed);
  const peakFlowPerChamberM3PerSec = parseFloat(peakFlowM3PerSec) / parseFloat(noOfGritChambersProposed);
  const areaRequiredForPeakFlowM2 = parseFloat(peakFlowPerChamberM3PerDay) / parseFloat(surfaceOverflowRateMPerDay);
  const criticalDisplacementVelocityMPerSec = 4 * ( (2.65 - 1) * 9.81 * particleSizeForCriticalDisplacementVelocityMM * 0.001 )**0.5;
  const horizontalVelocityInTheChamberMPerSec = parseFloat(peakFlowPerChamberM3PerSec) / ( parseFloat(widthOfTheTankM) * parseFloat(depthOfTheTankM) );
  const lengthOfTheTankM = horizontalVelocityInTheChamberMPerSec * 60;
  const totalDepthOfTheTankM = parseFloat(depthOfTheTankM) + parseFloat(depthOfTheTankM) + parseFloat(provisionOfSpaceForGritM);
  const adoptedLengthOfTheGritChamberM = Math.ceil(lengthOfTheTankM)
  const detentionTimeSec = ( parseFloat(widthOfTheTankM) * parseFloat(freeBoardM) * parseFloat(adoptedLengthOfTheGritChamberM) ) / parseFloat(peakFlowPerChamberM3PerSec);

  return {
    averageFlowMLD,
    averageFlowM3PerSec: averageFlowM3PerSec.toFixed(3),
    peakFactor,
    peakFlowMLD,
    peakFlowM3PerDay: peakFlowM3PerDay.toFixed(3),
    peakFlowPerChamberM3PerSec: peakFlowPerChamberM3PerSec.toFixed(3),
    desiredEfficiency,
    settlingVelocityMPerSec,
    basinPerformanceIndex,
    surfaceOverflowRateMPerDay: surfaceOverflowRateMPerDay.toFixed(3),
    noOfGritChambersProposed,
    peakFlowPerChamberM3PerDay,
    areaRequiredForPeakFlowM2:areaRequiredForPeakFlowM2.toFixed(3),
    widthOfTheTankM,
    depthOfTheTankM,
    particleSizeForCriticalDisplacementVelocityMM,
    criticalDisplacementVelocityMPerSec: criticalDisplacementVelocityMPerSec.toFixed(3),
    horizontalVelocityInTheChamberMPerSec: horizontalVelocityInTheChamberMPerSec.toFixed(3),
    freeBoardM,
    provisionOfSpaceForGritM,
    lengthOfTheTankM: lengthOfTheTankM.toFixed(3),
    adoptedLengthOfTheGritChamberM,
    totalDepthOfTheTankM: totalDepthOfTheTankM.toFixed(3),
    detentionTimeSec: detentionTimeSec.toFixed(3)
    };
};