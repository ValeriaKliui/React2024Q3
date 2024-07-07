export const getSavedValueByKey = (key: string) => {
  const savedValue = localStorage.getItem(key);

  return savedValue ?? "";
};
