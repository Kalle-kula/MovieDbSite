import { type IMultiSearchData, type ISearchModel } from "../types";

export const createSearchModel = (query: string, page?: number) => {
  const model: ISearchModel = {
    query: query,
    include_adult: false,
    language: "sv-SE",
    page: page ?? 1,
  };
  return model;
};

export const addMissingProps = (
  results: IMultiSearchData[],
): IMultiSearchData[] =>
  results.map((result) => ({
    ...result,
    name: result.name ?? result.title,
    title: result.title ?? result.name,
    release_date: result.release_date ?? result.first_air_date,
    first_air_date: result.first_air_date ?? result.release_date,
    backdrop_path: result.backdrop_path ?? result.profile_path,
  }));
