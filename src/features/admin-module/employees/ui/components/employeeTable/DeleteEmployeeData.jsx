import { AlertTriangle, LoaderCircle, X } from "lucide-react";
import { useEffect, useRef } from "react";

const DeleteEmployeeData = ({
  isDeleting,
  setIsDeleteModalOpen,
  handleDelete,
  employee,
}) => {
  const dialogRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const isDeletingRef = useRef(isDeleting);

  isDeletingRef.current = isDeleting;

  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    // Focus Cancel button when modal opens
    cancelButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (!isDeletingRef.current) {
          setIsDeleteModalOpen(false);
        }
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [setIsDeleteModalOpen]);

  const handleBackdropClick = () => {
    if (!isDeleting) {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-110 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
        tabIndex={-1}
        className="w-full max-w-md rounded-2xl border border-(--border-color) bg-(--bg-surface) p-6 shadow-2xl outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-500/10 p-3 text-red-500">
              <AlertTriangle size={22} />
            </div>

            <h2
              id="delete-modal-title"
              className="text-lg font-semibold text-(--text-primary)"
            >
              Delete Employee
            </h2>
          </div>

          <button
            type="button"
            disabled={isDeleting}
            onClick={handleBackdropClick}
            aria-label="Close delete confirmation"
            className="rounded-lg p-2 text-(--text-secondary) transition hover:bg-(--bg-hover) disabled:opacity-50"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Content */}
        <p
          id="delete-modal-description"
          className="text-sm leading-6 text-(--text-secondary)"
        >
          Are you sure you want to delete{" "}
          <span className="font-semibold text-(--text-primary)">
            {employee.name}
          </span>
          ? This action cannot be undone.
        </p>

        {/* Modal Actions */}
        <div className="mt-7 flex justify-end gap-3">
          <button
            ref={cancelButtonRef}
            type="button"
            disabled={isDeleting}
            onClick={handleBackdropClick}
            className="rounded-lg border border-(--border-color) px-4 py-2 text-sm font-medium text-(--text-primary) transition hover:bg-(--bg-hover) disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={isDeleting}
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting && <LoaderCircle size={16} className="animate-spin" />}

            {isDeleting ? "Deleting..." : "Delete Employee"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployeeData;
