export const getCsvUrl = (refinedData) => {
  let csvContent = "";

  refinedData.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8,",
  });
  const isEmpty = blob.size === 0;
  const objUrl = isEmpty ? 0 : URL.createObjectURL(blob);

  return objUrl;
};
