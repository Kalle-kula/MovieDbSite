import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import { getTvData } from "~/api/Service";
import Tv from "./Tv";
import { type ITitleData } from "~/types";

export const getServerSideProps = (async (ctx) => {
  const titleId = ctx.query.titleId;
  const tvData = await getTvData(Number(titleId));
  return { props: { tvData } };
}) satisfies GetServerSideProps<{ tvData: ITitleData }>;

export default function Index({
  tvData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return tvData ? <Tv tvData={tvData} /> : false;
}
