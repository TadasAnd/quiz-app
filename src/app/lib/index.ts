const calculateImperialBMI = (
  weightLbs: number,
  heightFt: number,
  heightIn: number = 0
) => {
  const height = heightFt * 12 + heightIn;
  return ((weightLbs / (height * height)) * 703).toFixed(2);
};

const convertHeightToCm = (heightFt: number, heightIn: number = 0) => {
  return (heightFt * 30.48 + heightIn * 2.54).toFixed(2);
};

const convertWeightToKg = (weightLbs: number) => {
  return (weightLbs * 0.453592).toFixed(2);
};

export { calculateImperialBMI, convertHeightToCm, convertWeightToKg };
