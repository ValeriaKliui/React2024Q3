export const prepareArrToCsv = (array, title) => {
  const reduced = array.reduce((prev, curr) => [...prev, [curr]], []);
  reduced.unshift([title]);
  return reduced;
};
