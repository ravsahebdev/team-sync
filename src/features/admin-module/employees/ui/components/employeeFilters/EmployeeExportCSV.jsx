import { Download } from "lucide-react";
import { useState } from "react";

const EmployeeExportCSV = ({ handleExport, exportPending }) => {
  const [shine, setShine] = useState(false);

  const handleClick = () => {
    handleExport();

    setShine(false);
    requestAnimationFrame(() => setShine(true));
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={exportPending}
        className="csv-export-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download size={17} />

        <span>{exportPending ? "Exporting..." : "Export CSV"}</span>

        <span className={shine ? "csv-shine animate-shine" : "csv-shine"} />
      </button>
    </div>
  );
};

export default EmployeeExportCSV;
