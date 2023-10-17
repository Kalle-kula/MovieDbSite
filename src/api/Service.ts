// API-key: 43f89c50cb9b8ff57191913aa1254deb
// API-token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Y4OWM1MGNiOWI4ZmY1NzE5MTkxM2FhMTI1NGRlYiIsInN1YiI6IjY1MjJjMmRiYWI1ZTM0MDBmZTMyYWJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.exKrnz1XAmnE_4Muwwv6PyxOkdDafRHcSsvjEhRmwe0

import axios from "axios";
import {
  type ISearchResponseModel,
  type ISearchModel,
} from "../pages/start/types";
import { type IPersonData } from "~/pages/person/Person";
import { addMissingProps } from "~/pages/start/utils";
import { type ITitleData } from "~/types";
import { type ITvData } from "~/pages/tv/types";
import { getTitleData } from "~/pages/tv/utils";

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Y4OWM1MGNiOWI4ZmY1NzE5MTkxM2FhMTI1NGRlYiIsInN1YiI6IjY1MjJjMmRiYWI1ZTM0MDBmZTMyYWJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.exKrnz1XAmnE_4Muwwv6PyxOkdDafRHcSsvjEhRmwe0";

const createConfig = (params?: unknown) => ({
  params: params,
  headers: { Authorization: `Bearer ${apiToken}` },
});

export const search = async (searchModel: ISearchModel) => {
  const url = `https://api.themoviedb.org/3/search/multi`;
  const config = createConfig(searchModel);
  const { data } = await axios.get<ISearchResponseModel>(url, config);
  const extendedData: ISearchResponseModel = {
    ...data,
    results: addMissingProps(data.results),
  };
  return extendedData;
};

export const getTvData = async (titleId: number) => {
  const url = `https://api.themoviedb.org/3/tv/${titleId}?language=sv-SE`;
  const config = createConfig();
  const { data } = await axios.get<ITvData>(url, config);
  const titleData = getTitleData(data);
  return titleData;
};

export const getPersonData = async (titleId: number) => {
  const url = `https://api.themoviedb.org/3/person/${titleId}`;
  const config = createConfig();
  const { data } = await axios.get<IPersonData>(url, config);
  return data;
};

export const getMovieData = async (titleId: number) => {
  const url = `https://api.themoviedb.org/3/movie/${titleId}?language=sv-SE`;
  const config = createConfig();
  const { data } = await axios.get<ITitleData>(url, config);
  return data;
};
