import { getMovieData } from "~/api/Service";
import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import Movie from "./Movie";
import { type ITitleData } from "~/types";

export const getServerSideProps = (async (ctx) => {
  const titleId = ctx.query.titleId;
  const movieData = await getMovieData(Number(titleId));
  return { props: { movieData } };
}) satisfies GetServerSideProps<{ movieData: ITitleData }>;

export default function Index({
  movieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return movieData ? <Movie movieData={movieData} /> : false;
}
