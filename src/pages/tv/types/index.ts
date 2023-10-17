import { type ITitleData } from "~/types";

export interface ITvData extends ITitleData {
  adult: boolean;
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string;
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_count: number;
}
