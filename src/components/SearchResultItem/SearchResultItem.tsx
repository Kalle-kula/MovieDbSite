import { type IMultiSearchData } from "../../types";
import { ImageComp } from "~/components";
import Link from "next/link";
import { checkStringLength } from "~/utils";
import { noImage } from "public/images";

const SearchResultItem = ({
  id,
  name,
  poster_path,
  backdrop_path,
  overview,
  release_date,
  media_type,
}: IMultiSearchData) => {
  return (
    <Link
      className="mb-5 flex h-[193px] w-full cursor-pointer bg-slate-100 shadow-lg sm:mr-5 sm:rounded-2xl md:w-[660px]"
      href={`/${media_type}?titleId=${id}`}
    >
      <div>
        <div className="relative flex h-48 w-32 items-center bg-white sm:rounded-l-2xl">
          {poster_path ?? backdrop_path ? (
            <ImageComp
              imageSrc={poster_path ?? backdrop_path}
              imageWidth={92}
              altText={name}
              className="sm:rounded-l-2xl"
              fill
              sizes="h-48"
            />
          ) : (
            <ImageComp altText={name} imageSrc={noImage} />
          )}
        </div>
      </div>
      <div className="grid h-full w-full flex-col px-4 py-6 text-sm sm:max-w-lg sm:text-base">
        <>
          <h2 className="text-lg sm:text-2xl">{name}</h2>
          <p>{checkStringLength(100, overview)}</p>
        </>
        <p className="flex self-end opacity-50">
          {media_type === "person"
            ? "Skådespelare"
            : `${release_date} (${media_type === "tv" ? "Tv" : "Film"})`}
        </p>
      </div>
    </Link>
  );
};

export default SearchResultItem;
