const PaginationArrowButton = ({
  pageCondition,
  onClickHandler,
  Icon,
  label,
}) => {
  return (
    <button
      type="button"
      disabled={pageCondition}
      onClick={onClickHandler}
      aria-label={label}
      className={`w-11 h-11 rounded-xl flex items-center justify-center border bg-(--pagination-bg) transition-all
      ${
        pageCondition
          ? "opacity-40 cursor-not-allowed border-(--border-color)"
          : "border-(--border-color) hover:bg-(--action-hover-bg)"
      }`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
};

export default PaginationArrowButton;
