import { times } from "lodash/fp";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { TailSpin } from "react-loader-spinner";

interface IPaginatorProps {
  currentPage: number;
  totalPages: number;
  totalHits: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
}
const Paginator = ({
  currentPage,
  totalPages,
  totalHits,
  onPageClick,
  isLoading,
}: IPaginatorProps) => {
  const PageNumbers = useMemo(() => {
    return {
      numberOfPages: totalPages,
      dotsPosition: {
        left: currentPage - 1 > 2 && totalPages > 6,
        right: totalPages - currentPage > 2 && totalPages > 6,
      },
      isFirst: Boolean(currentPage === 1),
      isLast: Boolean(currentPage === totalPages),
    };
  }, [currentPage, totalPages]);

  const NumberOfPages = useMemo(() => {
    if (totalPages < 7) {
      return times((value) => value + 1, totalPages);
    }
    if (PageNumbers.dotsPosition.left && PageNumbers.dotsPosition.right) {
      return [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
    } else if (PageNumbers.dotsPosition.right) {
      return [...times((value) => value + 1, 5), totalPages];
    } else if (PageNumbers.dotsPosition.left) {
      return [1, ...times((value) => totalPages - 5 + (value + 1), 5)];
    }
    return [];
  }, [PageNumbers, currentPage, totalPages]);

  return (
    <div className="flex w-full justify-center py-6">
      {totalHits > 0 && (
        <div className="relative flex items-center gap-2">
          <div className="flex ">
            {NumberOfPages.map((number) => {
              return (
                <div key={`pagesKey-${number}`} className="flex">
                  {Boolean(number === totalPages) &&
                    PageNumbers.dotsPosition.right && (
                      <div className="w-[26px]">...</div>
                    )}
                  <div
                    className={twMerge(
                      "px-2",
                      currentPage === number
                        ? "cursor-not-allowed opacity-30"
                        : "",
                    )}
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage !== number) onPageClick(number);
                    }}
                  >
                    {number}
                  </div>
                  {Boolean(number === 1) && PageNumbers.dotsPosition.left && (
                    <div className="px-2">...</div>
                  )}
                </div>
              );
            })}
          </div>
          {isLoading && <TailSpin color="#3b3b36" height={20} width={20} />}
        </div>
      )}
    </div>
  );
};

export default Paginator;
