import EmployeeTableHeader from "./EmployeeTableHeader";
import EmployeeRow from "./EmployeeRow";
import EmployeeTableSkeleton from "../skeleton/EmployeeTableSkeleton";

const EmployeeTable = ({ employees, deleteEmployeeMutation, isPending }) => {
  return (
    <div>
      <table className="w-full table-fixed bg-(--bg-surface) border-separate border-spacing-0">
        
        <colgroup>
          <col className="w-[35%]" />
          <col className="w-[20%]" />
          <col className="w-[12%]" />
          <col className="w-[15%]" />
          <col className="w-[8%]" />
          <col className="w-[10%]" />
        </colgroup>

        <EmployeeTableHeader />

        <tbody>
          {isPending ? (
            <EmployeeTableSkeleton />
          ) : employees?.length > 0 ? (
            employees.map((employee) => (
              <EmployeeRow
                key={employee._id}
                employee={employee}
                deleteEmployee={deleteEmployeeMutation.mutate}
                isDeleting={deleteEmployeeMutation.isPending}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-20 text-center">
                <h3 className="text-lg font-semibold text-(--text-primary)">
                  No employees found
                </h3>
                <p className="mt-2 text-sm text-(--text-secondary)">
                  Try changing your search or filters.
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
