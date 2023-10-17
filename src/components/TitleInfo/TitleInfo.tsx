import { useRouter } from "next/router";
import { noImage } from "public/images";
import { BannerImage, ImageComp } from "..";
import { getYear } from "~/utils";
import { type ITitleData } from "~/types";

const TitleInfo = ({
  title,
  poster_path,
  backdrop_path,
  tagline,
  overview,
  release_date,
  vote_average,
  genres,
  runtime,
  number_of_seasons,
  number_of_episodes,
}: ITitleData) => {
  const router = useRouter();

  return (
    <div id="tv-page" className="relative z-10 p-2 sm:h-[600px] sm:p-10">
      <BannerImage
        altText="star wars"
        imageSrc={`http://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="brightness-50"
      />
      <div className="flex flex-col sm:flex-row">
        <div className="mb-4 flex flex-col items-center">
          <div className="flex w-full items-start">
            <button
              className="mb-4 h-10 rounded-lg border bg-slate-50 px-3 shadow-xl hover:bg-slate-200"
              onClick={router.back}
            >
              <p>Tillbaka</p>
            </button>
          </div>

          <div className="flex h-[450px] w-[300px] items-center rounded-2xl bg-white sm:mr-10">
            {poster_path ? (
              <div className="relative h-full w-full">
                <ImageComp
                  imageSrc={poster_path}
                  imageWidth={300}
                  altText={title}
                  className="rounded-2xl"
                  fill
                  sizes="h-[450px]"
                />
              </div>
            ) : (
              <ImageComp altText={title} imageSrc={noImage} />
            )}
          </div>
        </div>
        <div className=" w-full flex-col text-white">
          <h2 className="mb-6 text-2xl font-bold text-white">{`${title} (${getYear(
            release_date,
          )})`}</h2>
          <div className="flex flex-wrap items-center text-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500">
              <p>{`${vote_average.toFixed(1)}/10`}</p>
            </div>
            <div className="font-outline m-2 h-2 w-2 rounded-full bg-white" />

            {genres.map((genre, i) => (
              <p className="font-outline mx-1" key={genre.id}>{`${genre.name} ${
                genres.length === i + 1 ? "" : "|"
              }`}</p>
            ))}
            <div className="font-outline m-2 h-2 w-2 rounded-full bg-white" />
            {runtime && `${Math.floor(runtime / 60)}h ${runtime % 60}min`}
            {number_of_episodes &&
              `${number_of_episodes} avsnitt fördelat på ${number_of_seasons} säsong${
                number_of_seasons > 1 ? "er" : ""
              }`}
          </div>

          <h4 className="mb-4 text-xl italic">{tagline}</h4>
          <h4 className="font-outline mb-2 text-xl font-bold">Handling</h4>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
export default TitleInfo;
