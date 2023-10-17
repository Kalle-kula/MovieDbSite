import { Paginator } from "~/components";
import { SortOn, type ISearchResponseModel } from "../../types";
import SearchResultItem from "../SearchResultItem";
import { twMerge } from "tailwind-merge";

export interface ISearchResultListProps {
  searchData: ISearchResponseModel | null;
  sortOn: string;
  onSortChange: (sortOn: keyof typeof SortOn) => void;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
}
const SearchResultList = ({
  searchData,
  onPageClick,
  sortOn,
  onSortChange,
  isLoading,
}: ISearchResultListProps) => {
  if (!searchData) return false;
  return searchData.total_results === 0 ? (
    <p>Inga träffar på din sökning, vänligen försök igen</p>
  ) : (
    <div>
      <div className="mb-3 flex-col">
        <p className="m-2 sm:mb-4">Sortera på:</p>
        <div className="flex flex-wrap">
          {Object.keys(SortOn).map((key) => (
            <button
              key={key}
              className={twMerge(
                "mb-2 mr-2 rounded-lg p-2 shadow-lg",
                sortOn === key
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-slate-50 hover:bg-slate-200",
              )}
              onClick={() => onSortChange(key as keyof typeof SortOn)}
            >
              {SortOn[key as keyof typeof SortOn]}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {searchData.results.map((result) => (
          <div key={result.id} className="flex w-full sm:w-auto">
            <SearchResultItem {...result} />
          </div>
        ))}
      </div>
      <Paginator
        currentPage={searchData.page}
        totalPages={searchData.total_pages}
        totalHits={searchData.total_results}
        onPageClick={onPageClick}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchResultList;
