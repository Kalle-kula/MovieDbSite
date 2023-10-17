import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BannerImage, Button, Input } from "~/components";
export interface ISearchBannerProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  handleSearchClick: () => void;
  searchIsLoading: boolean;
}
const SearchBanner = ({
  searchQuery,
  setSearchQuery,
  handleSearchClick,
  searchIsLoading,
}: ISearchBannerProps) => {
  const [searchIsActive, setSetsearchIsActive] = useState(false);
  const handleSubmit = () => {
    setSetsearchIsActive(true);
    handleSearchClick();
  };
  return (
    <div
      id="search-banner"
      className={twMerge(
        "relative z-10 sm:mb-10 sm:h-96",
        searchIsActive ? "h-72" : "h-screen",
      )}
    >
      <BannerImage
        altText="star wars"
        imageSrc="http://image.tmdb.org/t/p/original/iPnH51khswDrYij6XIBHKlAznW.jpg"
        className="brightness-50 sm:rounded-2xl"
      />
      <div className="flex h-full flex-col justify-between sm:justify-center sm:p-10">
        <h1 className="font-outline mb-6 p-2 text-3xl font-bold text-white sm:p-0">
          Välkommen att utforska miljoner av titlar genom att söka i fältet
          nedan
        </h1>
        <form
          className="flex w-full flex-col sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            className="mr-4"
            onValueChange={setSearchQuery}
            placeholder="Sök på film, serie eller skådespelare"
            isLoading={searchIsLoading}
          />
          <Button
            text="Sök"
            onClick={handleSearchClick}
            type="submit"
            disabled={searchQuery?.length < 2}
          />
        </form>
      </div>
    </div>
  );
};
export default SearchBanner;
