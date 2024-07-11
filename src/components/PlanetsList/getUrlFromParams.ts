export const getUrlFromParams = (URLParams) => {
  let url = "?";
  for (const [key, value] of URLParams) {
    url += `${key}=${value}&`;
  }
  return url.slice(0, -1);
};
