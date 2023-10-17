import { PageContainer, SearchResultList } from "~/components";
import SearchBanner, {
  type ISearchBannerProps,
} from "~/components/SearchBanner/SearchBanner";
import { type ISearchResultListProps } from "~/components/SearchResultList/SearchResultList";

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
