import { PageContainer, TitleInfo } from "~/components";
import { type ITitleData } from "~/types";

interface ITvProps {
  tvData: ITitleData;
}

const Tv = ({ tvData }: ITvProps) => {
  return (
    <PageContainer>
      <TitleInfo {...tvData} />
    </PageContainer>
  );
};
export default Tv;
