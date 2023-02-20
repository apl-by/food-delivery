// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  restaurants,
  RestaurantData,
  FoodCategoryTitle,
} from "../../data/data";

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RestaurantRes[]>
) {
  const data: RestaurantRes[] = JSON.parse(JSON.stringify(restaurants));
  const { query } = req;

  if (query.search && query.filter) {
    const firstMatches = _handleSearch(data, query.search as string);
    const matchedData = _handleFilter(firstMatches, query.filter);
    return res.status(200).json(matchedData);
  }

  if (query.search) {
    const matchedData = _handleSearch(data, query.search as string);
    return res.status(200).json(matchedData);
  }

  if (query.filter) {
    const matchedData = _handleFilter(data, query.filter);
    return res.status(200).json(matchedData);
  }

  res.status(200).json(data);
}
