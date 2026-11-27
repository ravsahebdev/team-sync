  import EmployeeSearchInput from "./EmployeeSearchInput";
  import EmployeeFilterBar from "./EmployeeFilterBar";

  const EmployeeToolbar = ({
    search,
    setSearch,
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
      <div className="flex flex-col gap-4 p-6">
        <EmployeeSearchInput search={search} setSearch={setSearch} />
        <EmployeeFilterBar
          role={role}
          setRole={setRole}
          department={department}
          setDepartment={setDepartment}
          status={status}
          setStatus={setStatus}
          getDepartmentsData={getDepartmentsData}
          handleExport={handleExport}
          exportPending={exportPending}
        />
      </div>
    );
  };

  export default EmployeeToolbar;
