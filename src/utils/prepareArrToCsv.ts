export const prepareArrToCsv = (array: string[], title: string) => {
  const reduced = array.reduce((prev, curr) => [...prev, [curr]], [[""]]);
  reduced.unshift([title]);
  return reduced;
};
