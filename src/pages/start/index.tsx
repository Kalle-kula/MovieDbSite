import { useState, useCallback } from "react";
import { search } from "~/api/Service";
import { type SortOn, type ISearchResponseModel } from "./types";
import { createSearchModel } from "./utils";
import Start from "./Start";
import _ from "lodash";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [pageIsLoading, setPageIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<ISearchResponseModel | null>(
    null,
  );
  const [sortOnKey, setSortOnKey] = useState<keyof typeof SortOn>("popularity");

  const getSearchData = useCallback(
    async (page?: number) => {
      if (searchQuery && searchQuery.length > 1) {
        try {
          const data = await search(createSearchModel(searchQuery, page));
          const sorted = _.orderBy(data.results, sortOnKey, "desc");
          data.results = sorted;
          setSearchData(data);
        } catch (error) {
          console.error({ error });
        }
      }
    },
    [searchQuery, sortOnKey],
  );

  const handleSearchClick = useCallback(async () => {
    setSearchIsLoading(true);
    await getSearchData().then(() => setSearchIsLoading(false));
  }, [getSearchData]);

  const handleSortChange = useCallback(
    (sortOn: keyof typeof SortOn) => {
      if (searchData && searchData.results?.length > 1) {
        const sortOrder = sortOn === "name" ? "asc" : "desc";
        const sorted = _.orderBy(searchData.results, sortOn, sortOrder);
        searchData.results = sorted;
        setSearchData(searchData);
        setSortOnKey(sortOn);
      }
    },
    [searchData],
  );

  const handlePageClick = useCallback(
    async (page: number) => {
      setPageIsLoading(true);
      await getSearchData(page).then(() => setPageIsLoading(false));
    },
    [getSearchData],
  );

  return (
    <Start
      searchBannerProps={{
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        handleSearchClick: () => void handleSearchClick(),
        searchIsLoading: searchIsLoading,
      }}
      searchResultListProps={{
        searchData: searchData,
        sortOn: sortOnKey,
        onSortChange: handleSortChange,
        onPageClick: (v) => void handlePageClick(v),
        isLoading: pageIsLoading,
      }}
    />
  );
}
