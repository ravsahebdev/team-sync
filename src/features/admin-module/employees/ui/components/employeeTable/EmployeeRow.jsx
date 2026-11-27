import { Building2, Users } from "lucide-react";
import EmployeeProfile from "./EmployeeProfile";
import EmployeeAction from "./EmployeeAction";
import EmployeeStatus from "./EmployeeStatus";
import { memo } from "react";

const EmployeeRow = ({ employee, deleteEmployee, isDeleting }) => {
  let { _id, status, role, department, createdAt } = employee;

  const colors = [
    "bg-purple-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-pink-200",
    "bg-orange-200",
  ];

  const numberID = Array.from(_id, (ch) => ch.charCodeAt(0)).reduce(
    (acc, curr) => acc * 31 + curr,
    0,
  );

  const randomColor = colors[Math.abs(numberID) % colors.length];

  return (
    <tr className="hover:bg-(--row-hover-bg) transition-colors duration-200">
      <EmployeeProfile employee={employee} randomColor={randomColor} />

      <EmployeeStatus status={status} />

      <td className="border-b border-(--row-border)">
        <div className="flex gap-2 items-center">
          <Users size={20} /> {role}
        </div>
      </td>
      <td className="border-b border-(--row-border)">
        <div className="flex gap-2 items-center">
          <Building2 size={20} /> {department}
        </div>
      </td>
      <td className="border-b border-(--row-border)">
        {new Date(createdAt).toLocaleDateString("en-IN")}
      </td>

      <EmployeeAction
        employee={employee}
        deleteEmployee={deleteEmployee}
        isDeleting={isDeleting}
      />
    </tr>
  );
};

export default memo(EmployeeRow);
