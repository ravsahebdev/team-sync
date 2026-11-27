import {
  X,
  Users,
  Mail,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

import { useEffect, useRef } from "react";
import DetailItem from "./DetailItem";

const EmployeeDetailsModal = ({ employee, onClose }) => {
  const { name, email, role, department, status, createdAt, avatar } = employee;

  const isActive = status?.toLowerCase() === "active";

  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    // Focus modal when it opens
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = modalRef.current?.querySelectorAll(
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

      // Restore focus when modal closes
      previousFocusRef.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-md"
      style={{ backgroundColor: "var(--modal-overlay)" }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="employee-modal-title"
        tabIndex={-1}
        className="w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl outline-none"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          boxShadow: "0 0 20px var(--modal-accent-soft)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b px-5 py-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl p-2.5"
              style={{ backgroundColor: "var(--modal-accent-soft)" }}
            >
              <Users size={22} style={{ color: "var(--modal-accent)" }} />
            </div>

            <div>
              <h2
                id="employee-modal-title"
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Employee Details
              </h2>

              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Complete employee information
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-2 transition-colors hover:bg-(--bg-hover)"
            style={{ color: "var(--text-secondary)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[75vh] overflow-y-auto p-5">
          {/* Employee Profile */}
          <div className="mb-5 flex flex-col items-center gap-2">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-16 w-16 rounded-full border-2 object-cover"
                style={{ borderColor: "var(--border-color)" }}
              />
            ) : (
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 text-2xl font-semibold"
                style={{
                  backgroundColor: "var(--modal-accent-soft)",
                  borderColor: "var(--modal-accent)",
                  color: "var(--modal-accent)",
                }}
              >
                {name?.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="text-center">
              <h3
                className="text-lg font-semibold capitalize"
                style={{ color: "var(--text-primary)" }}
              >
                {name}
              </h3>

              <div
                className="mt-0.5 flex items-center justify-center gap-1.5 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail size={14} />
                <span>{email}</span>
              </div>
            </div>

            {/* Active / Inactive Badge */}
            <span
              className="mt-1 rounded-full px-3 py-1 text-xs font-semibold capitalize"
              style={{
                backgroundColor: isActive
                  ? "var(--status-active-bg)"
                  : "var(--status-inactive-bg)",
                color: isActive
                  ? "var(--status-active-text)"
                  : "var(--status-inactive-text)",
              }}
            >
              {status || "Unknown"}
            </span>
          </div>

          {/* Employee Information Cards */}
          <div className="grid grid-cols-2 gap-3">
            <DetailItem icon={BriefcaseBusiness} label="Role" value={role} />

            <DetailItem
              icon={Building2}
              label="Department"
              value={department}
            />

            <DetailItem
              icon={CalendarDays}
              label="Joining Date"
              value={
                createdAt
                  ? new Date(createdAt).toLocaleDateString("en-IN")
                  : "N/A"
              }
            />

            <DetailItem
              icon={ShieldCheck}
              label="Status"
              value={status}
              status={isActive ? "active" : "inactive"}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex justify-end border-t px-5 py-3.5"
          style={{ borderColor: "var(--border-color)" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-6 py-2 text-sm font-semibold bg-(--primary-button-bg) text-white transition-all hover:brightness-110 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;
