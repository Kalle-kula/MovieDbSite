import {
  type ITvData,
  type IMultiSearchData,
  type ISearchModel,
  type ITitleData,
} from "~/types";

export const getYear = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
};

export const checkStringLength = (
  allowedStringLength: number,
  stringToCheck?: string,
): string => {
  if (stringToCheck && stringToCheck.length < allowedStringLength)
    return stringToCheck;
  return stringToCheck
    ? stringToCheck.substring(0, allowedStringLength - 3) + "..."
    : "";
};

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

export const getTitleData = (tvData: ITvData): ITitleData => {
  return {
    ...tvData,
    title: tvData.name,
    release_date: tvData.first_air_date,
  };
};
