/* Reusable Information Card */
const DetailItem = ({ icon: Icon, label, value, status }) => {
  return (
    <div
      className="rounded-xl border p-3 transition-colors"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon size={17} style={{ color: "var(--modal-accent)" }} />

        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {label}
        </span>
      </div>

      {status ? (
        <span
          className="inline-block rounded-full px-2.5 py-1 text-xs font-semibold capitalize"
          style={{
            backgroundColor:
              status === "active"
                ? "var(--status-active-bg)"
                : "var(--status-inactive-bg)",
            color:
              status === "active"
                ? "var(--status-active-text)"
                : "var(--status-inactive-text)",
          }}
        >
          {value || "Unknown"}
        </span>
      ) : (
        <p
          className="wrap-break-word text-sm font-semibold capitalize"
          style={{ color: "var(--text-primary)" }}
        >
          {value || "N/A"}
        </p>
      )}
    </div>
  );
};

export default DetailItem;
