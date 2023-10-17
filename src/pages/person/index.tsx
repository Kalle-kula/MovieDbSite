import { getPersonData } from "~/api/Service";
import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
} from "next";
import Person, { type IPersonData } from "./Person";

export const getServerSideProps = (async (ctx) => {
  const titleId = ctx.query.titleId;
  const personData = await getPersonData(Number(titleId));
  return { props: { personData } };
}) satisfies GetServerSideProps<{ personData: IPersonData }>;

export default function Index({
  personData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return personData ? <Person {...personData} /> : false;
}
