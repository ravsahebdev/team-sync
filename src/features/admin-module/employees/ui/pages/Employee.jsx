import useEmployeeList from "../../hooks/useEmployeeList";
import useEmployeeStats from "../../hooks/useEmployeeStats";
import useEmployeeMutations from "../../hooks/useEmployeeMutations";
import useDepartments from "../../hooks/useDepartments";

import EmployeeToolbar from "../components/employeeFilters/EmployeeToolbar";
import EmployeePagination from "../components/employeePagination/EmployeePagination";
import EmployeeTable from "../components/employeeTable/EmployeeTable";
import EmployeeTopSection from "../components/employeeTopSection/EmployeeTopSection";

const Employee = () => {

  // Employee List
  const {
    data,
    isPending,
    error,
    refetch,
    handlePageChange,
    search,
    setSearch,
    normalizedSearch,
    role,
    setRole,
    department,
    setDepartment,
    status,
    setStatus,
  } = useEmployeeList();

  // Employee Stats
  const { totalEmployees, activeEmployees, inActiveEmployees, isStatsPending } =
    useEmployeeStats();

  // Departments
  const { getDepartmentsData, departmentsPending } = useDepartments();

  const statsPending = isStatsPending || departmentsPending;

  // Employee Mutations
  const { deleteEmployeeMutation, handleExport, exportPending } =
    useEmployeeMutations();

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16">
        <h2 className="text-lg font-semibold text-(--text-primary)">
          Failed to load employees.
        </h2>

        <p className="text-sm text-(--text-secondary)">
          Something went wrong while fetching employee data.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <EmployeeTopSection
        totalEmployees={totalEmployees}
        activeEmployees={activeEmployees}
        inActiveEmployees={inActiveEmployees}
        getDepartmentsData={getDepartmentsData}
        isStatsPending={statsPending}
      />

      <div className="overflow-hidden rounded-md border border-(--table-border)">
        <EmployeeToolbar
          search={search}
          setSearch={setSearch}
          role={role}
          setRole={setRole}
          department={department}
          setDepartment={setDepartment}
          status={status}
          setStatus={setStatus}
          getDepartmentsData={getDepartmentsData}
          handleExport={() =>
            handleExport({
              search: normalizedSearch,
              role,
              department,
              status,
              total: data?.pagination?.total ?? 0,
            })
          }
          exportPending={exportPending}
        />

        <EmployeeTable
          employees={data?.employees}
          isPending={isPending}
          deleteEmployeeMutation={deleteEmployeeMutation}
        />

        <EmployeePagination
          pagination={data?.pagination}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Employee;
