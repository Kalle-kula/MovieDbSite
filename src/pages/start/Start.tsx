import { PageContainer } from "~/components";
import { SearchResultList, SearchBanner } from "./components";
import { type ISearchResultListProps } from "./components/SearchResultList/SearchResultList";
import { type ISearchBannerProps } from "./components/SearchBanner/SearchBanner";

export interface IStartPageProps {
  searchBannerProps: ISearchBannerProps;
  searchResultListProps: ISearchResultListProps;
}

const Start = ({
  searchBannerProps,
  searchResultListProps,
}: IStartPageProps) => {
  return (
    <PageContainer>
      <div id="start-container" className="rounded-lg sm:mt-20">
        <SearchBanner {...searchBannerProps} />
        <SearchResultList {...searchResultListProps} />
      </div>
    </PageContainer>
  );
};

export default Start;
