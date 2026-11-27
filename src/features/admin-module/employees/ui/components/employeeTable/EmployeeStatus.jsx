import { Circle } from "lucide-react";

const EmployeeStatus = ({ status }) => {
  return (
    <td className="text-center border-b border-(--row-border)">
      <span
        className={`mx-auto w-fit shrink-0 flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 ${
          status === "active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-400"
        }`}
      >
        <Circle size={9} fill="currentColor" />
        {status === "active" ? "Active" : "Inactive"}
      </span>
    </td>
  );
};

export default EmployeeStatus;
