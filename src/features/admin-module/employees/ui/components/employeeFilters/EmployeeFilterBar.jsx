import EmployeeExportCSV from "./EmployeeExportCSV";
import Filters from "./Filters";

const EmployeeFilterBar = ({
  role,
  setRole,
  department,
  setDepartment,
  status,
  setStatus,
  getDepartmentsData,
  handleExport,
  exportPending,
}) => {
  return (
    <div className="flex justify-between">
      <Filters
        role={role}
        setRole={setRole}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        getDepartmentsData={getDepartmentsData?.data}
      />
      <EmployeeExportCSV
        handleExport={handleExport}
        exportPending={exportPending}
      />
    </div>
  );
};

export default EmployeeFilterBar;
