const PaginationButtons = ({ page, pageNumber, handlePageChange }) => {
  return (
    <button
      onClick={() => handlePageChange(pageNumber)}
      className={
        page === pageNumber
          ? "w-10 h-10 rounded-lg bg-(--primary) text-white font-semibold shadow-md"
          : "w-10 h-10 rounded-lg border border-(--border-color) bg-(--bg-surface) text-(--text-primary) hover:bg-(--bg-hover) transition-all"
      }
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButtons;
