export const getDiameter = (diameter?: string) => {
  const diameterNumber = Number(diameter);
  const diameterFormatted = diameterNumber
    ? diameterNumber.toLocaleString() + ' km'
    : 'unknown';
  return diameterFormatted;
};
