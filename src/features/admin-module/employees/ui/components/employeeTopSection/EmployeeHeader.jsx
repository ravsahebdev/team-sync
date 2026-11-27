import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router";

const EmployeeHeader = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-between items-center">
      {/* Left */}
      <div>
        <h1 className="text-[2.1rem] font-semibold text-(--text-primary)">
          Workforce Directory
        </h1>
        <p className="mt-1 text-(--text-secondary)">
          Manage your global team and organizational structure
        </p>
      </div>

      {/* Right */}
      <button
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-(--primary-button-bg) text-white font-semibold cursor-pointer hover:brightness-110 active:scale-95 transition-all"
        onClick={() => navigation("/home/add-employee")}
      >
        <UserPlus size={20} />
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeHeader;
