import { type ITitleData } from "~/types";
import { type ITvData } from "../types";

export const getTitleData = (tvData: ITvData): ITitleData => {
  return {
    ...tvData,
    title: tvData.name,
    release_date: tvData.first_air_date,
  };
};
