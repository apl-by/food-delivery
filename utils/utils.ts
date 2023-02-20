export const getQueryParams = (
  string: string,
  key: string,
  options = {
    getAllMatches: false,
  }
) => {
  const regExp = new RegExp(`(?:${key}=)(?<${key}>[^&]+)&?`, "g");

  const resArr = Array.from(string.matchAll(regExp));
  if (resArr.length === 0) return null;

  const values = resArr.map((i) => i.groups?.[key] as string);

  return options.getAllMatches ? values : values[0];
};
