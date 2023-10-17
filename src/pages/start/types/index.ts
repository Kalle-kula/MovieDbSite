export interface ISearchModel {
  query: string;
  include_adult?: boolean;
  language?: string;
  page?: number;
}

export interface IMultiSearchData {
  id: number;
  name: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  profile_path: string;
}

export interface ISearchResponseModel {
  page: number;
  results: IMultiSearchData[];
  total_pages: number;
  total_results: number;
}

export enum SortOn {
  popularity = "Populäritet",
  vote_average = "Snittbetyg",
  media_type = "Typ av media",
  name = "Namn",
  release_date = "Release datum",
}
