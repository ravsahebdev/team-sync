import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButtons from "./PaginationButtons";
import PaginationArrowButton from "./PaginationArrowButton";

const EmployeePagination = ({ pagination, handlePageChange }) => {
  if (!pagination) return null;

  const { page = 1, totalPages = 1, limit = 10, total = 0 } = pagination;

  let start = total > 0 ? (page - 1) * limit + 1 : 0;
  let end = Math.min(page * limit, total);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).filter(
    (num) =>
      num >= Math.max(1, page - 2) && num <= Math.min(totalPages, page + 2),
  );

  return (
    <div className="px-5 py-4 flex justify-between items-center border-t border-(--table-border) bg-(--table-header-bg)">
      {/* Left */}
      <div>
        <p>
          Showing {start} to {end} of {total} employees
        </p>
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <PaginationArrowButton
          pageCondition={page <= 1}
          onClickHandler={() => handlePageChange(page - 1)}
          Icon={ChevronLeft}
        />

        {pageNumbers.map((pageNumber) => (
          <PaginationButtons
            key={pageNumber}
            pageNumber={pageNumber}
            page={page}
            handlePageChange={handlePageChange}
          />
        ))}

        <PaginationArrowButton
          pageCondition={page >= totalPages}
          onClickHandler={() => handlePageChange(page + 1)}
          Icon={ChevronRight}
        />
      </div>
    </div>
  );
};

export default EmployeePagination;
