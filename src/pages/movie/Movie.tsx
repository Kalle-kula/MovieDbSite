import { PageContainer, TitleInfo } from "~/components";
import { type ITitleData } from "~/types";

interface IMovieProps {
  movieData: ITitleData;
}

const Movie = ({ movieData }: IMovieProps) => {
  return (
    <PageContainer>
      <TitleInfo {...movieData} />
    </PageContainer>
  );
};
export default Movie;
