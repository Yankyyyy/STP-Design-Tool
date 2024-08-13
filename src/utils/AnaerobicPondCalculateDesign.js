export const calculateGritChamberDesign = (inputs) => {
    const { averageFlowMLD, peakFactor, noOfAnaerobicPond, InfluentBodMgPerL, meanTemperatureInColdestMonthC,
        depthOfTheTankM, sideSlopeOfThePondM, depthForSludgeM, freeBoardM } = inputs;

    let volumetricBodLoadingGPerM3Day;
    let bodRemovalEfficiency;

    if (meanTemperatureInColdestMonthC < 10) {
        volumetricBodLoadingGPerM3Day = 100;
        bodRemovalEfficiency = 40;
    } else if (meanTemperatureInColdestMonthC >= 10 && meanTemperatureInColdestMonthC <= 20) {
        volumetricBodLoadingGPerM3Day = 20 * meanTemperatureInColdestMonthC - 100;
        bodRemovalEfficiency = 2 * meanTemperatureInColdestMonthC + 20;
    } else if (meanTemperatureInColdestMonthC > 20 && meanTemperatureInColdestMonthC <= 25) {
        volumetricBodLoadingGPerM3Day = 10 * meanTemperatureInColdestMonthC + 100;
        bodRemovalEfficiency = 2 * meanTemperatureInColdestMonthC + 20;
    } else if (meanTemperatureInColdestMonthC > 25) {
        volumetricBodLoadingGPerM3Day = 350;
        bodRemovalEfficiency = 70;
    }
    
    const averageFlowM3PerSec = ( averageFlowMLD * 1000 ) / ( 24 * 60 * 60 );
    const averageFlowM3PerDay = ( averageFlowMLD * 1000);
    const peakFlowMLD = parseFloat(averageFlowMLD) * parseFloat(peakFactor);
    const peakFlowM3PerSec = parseFloat(averageFlowM3PerSec) * parseFloat(peakFactor);
    const peakFlowM3PerDay = peakFlowM3PerSec * (24 * 60 * 60);
    const flowHandlingCapacityM3PerSec = parseFloat(averageFlowM3PerSec) / parseFloat(noOfAnaerobicPond);
    const volumeOfTheTankGPerM3Day = ( parseFloat(InfluentBodMgPerL) * parseFloat(averageFlowM3PerDay) ) / parseFloat(volumetricBodLoadingGPerM3Day);
    const detentionTimeDay = parseFloat(volumeOfTheTankGPerM3Day) / parseFloat(averageFlowM3PerDay);
    const adoptedDetentionTimeDay = Math.ceil(parseFloat(detentionTimeDay));
    const adoptedVolumeOfTheTankM3 = parseFloat(adoptedDetentionTimeDay) * parseFloat(averageFlowM3PerDay);
    const resultingValueOfVolumetricBodLoadingGPerM3Day = ( parseFloat(InfluentBodMgPerL) * parseFloat(detentionTimeDay) ) / parseFloat(adoptedDetentionTimeDay);
    const areaOfTheTankAtMidDepthM3 = parseFloat(adoptedVolumeOfTheTankM3) / parseFloat(depthOfTheTankM);
    const midDepthWidthM = Math.sqrt(areaOfTheTankAtMidDepthM3 / 2);
    const midDepthLengthM = 2 * midDepthWidthM;
    const bottomBelowMidDepthM = ( parseFloat(depthOfTheTankM) + parseFloat(depthForSludgeM) ) / 2;
    const topOfEmbankmentAboveMidDepthM = parseFloat(bottomBelowMidDepthM) + parseFloat(freeBoardM);
    const totalTopLengthM = parseFloat(midDepthLengthM) + ( 2 * topOfEmbankmentAboveMidDepthM * sideSlopeOfThePondM );
    const totalTopWidthM = parseFloat(midDepthWidthM) + ( 2 * topOfEmbankmentAboveMidDepthM * sideSlopeOfThePondM );
    const areaOfThePondAtTheTopM2 = parseFloat(totalTopLengthM) * parseFloat(totalTopWidthM);
    const totalBottomLengthM = parseFloat(midDepthLengthM) - ( 2 * topOfEmbankmentAboveMidDepthM * sideSlopeOfThePondM );
    const totalBottomWidthM = parseFloat(midDepthWidthM) - ( 2 * topOfEmbankmentAboveMidDepthM * sideSlopeOfThePondM );
    const areaOfThePondAtTheBottomM2 = parseFloat(totalBottomLengthM) * parseFloat(totalBottomWidthM);

    return {
      averageFlowMLD,
      averageFlowM3PerDay,
      averageFlowM3PerSec: averageFlowM3PerSec.toFixed(3),
      peakFactor,
      peakFlowMLD,
      peakFlowM3PerDay,
      peakFlowM3PerSec: peakFlowM3PerSec.toFixed(3),
      noOfAnaerobicPond,
      flowHandlingCapacityM3PerSec,
      InfluentBodMgPerL,
      meanTemperatureInColdestMonthC,
      volumetricBodLoadingGPerM3Day,
      volumeOfTheTankGPerM3Day: volumeOfTheTankGPerM3Day.toFixed(3),
      detentionTimeDay: detentionTimeDay.toFixed(3),
      adoptedDetentionTimeDay,
      adoptedVolumeOfTheTankM3,
      resultingValueOfVolumetricBodLoadingGPerM3Day: resultingValueOfVolumetricBodLoadingGPerM3Day.toFixed(3),
      bodRemovalEfficiency,
      depthOfTheTankM,
      areaOfTheTankAtMidDepthM3,
      midDepthWidthM: midDepthWidthM.toFixed(3),
      midDepthLengthM: midDepthLengthM.toFixed(3),
      sideSlopeOfThePondM,
      depthForSludgeM,
      bottomBelowMidDepthM,
      freeBoardM,
      topOfEmbankmentAboveMidDepthM,
      totalTopLengthM: totalTopLengthM.toFixed(3),
      totalTopWidthM: totalTopWidthM.toFixed(3),
      areaOfThePondAtTheTopM2: areaOfThePondAtTheTopM2.toFixed(3),
      totalBottomLengthM: totalBottomLengthM.toFixed(3),
      totalBottomWidthM: totalBottomWidthM.toFixed(3),
      areaOfThePondAtTheBottomM2: areaOfThePondAtTheBottomM2.toFixed(3)
      };
  };