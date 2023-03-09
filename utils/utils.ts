import { RestaurantData, FoodCategoryTitle } from "../data/data";

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

// Фильтрация ресторанов по значениям фильтров и/или поискового запроса

export type RestaurantRes = RestaurantData & {
  filteredMenu?: FoodCategoryTitle[];
};

const _handleSearch = (data: RestaurantRes[], value: string) => {
  const regExp = new RegExp(value, "i");
  const matchedData = data.flatMap((item) =>
    regExp.test(item.title) ? item : []
  );
  return matchedData;
};

const _handleFilter = (data: RestaurantRes[], value: string | string[]) => {
  const filterValues = typeof value === "object" ? value : [value];

  const matchedData = data.flatMap((item) => {
    const matchedFilters = item.menu.flatMap((value) =>
      filterValues.includes(value) ? value : []
    );
    if (matchedFilters.length > 0) {
      item.filteredMenu = matchedFilters;
      return item;
    }
    return [];
  });
  return matchedData;
};

export const getData = (
  restaurants: RestaurantRes[],
  query: Partial<{
    [key: string]: string | string[];
  }>
) => {
  const data: RestaurantRes[] = JSON.parse(JSON.stringify(restaurants));

  if (query.search && query.filter) {
    const searchMatches = _handleSearch(data, query.search as string);
    return _handleFilter(searchMatches, query.filter);
  }

  if (query.search) {
    return _handleSearch(data, query.search as string);
  }

  if (query.filter) {
    return _handleFilter(data, query.filter);
  }

  return data;
};
