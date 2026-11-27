import { memo, useCallback, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import CustomDropdown from "./CustomDropdown";

const Filters = ({
  role,
  setRole,
  department,
  setDepartment,
  status,
  setStatus,
  getDepartmentsData,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const filterSelectWrapperClass =
    "rounded-lg border border-(--border-color) px-3 py-[.55rem]";

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const departmentData = (getDepartmentsData ?? []).map(({ name }) => ({
    label: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    value: name,
  }));

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Filters Button */}
        <div
          className={`flex items-center gap-2 ${filterSelectWrapperClass} text-(--text-secondary)`}
        >
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </div>

        {/* Role Filter */}
        <CustomDropdown
          value={role}
          onChange={setRole}
          options={[
            { label: "All Roles", value: "" },
            { label: "Admin", value: "admin" },
            { label: "Employee", value: "employee" },
          ]}
          isOpen={openDropdown === "role"}
          onToggle={() => toggleDropdown("role")}
          onClose={closeDropdown}
        />

        {/* Department Filter */}
        <CustomDropdown
          value={department}
          onChange={setDepartment}
          options={[{ label: "All Departments", value: "" }, ...departmentData]}
          isOpen={openDropdown === "department"}
          onToggle={() => toggleDropdown("department")}
          onClose={closeDropdown}
        />

        {/* Status Filter */}
        <CustomDropdown
          value={status}
          onChange={setStatus}
          options={[
            { label: "All Status", value: "" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          isOpen={openDropdown === "status"}
          onToggle={() => toggleDropdown("status")}
          onClose={closeDropdown}
        />
      </div>
    </div>
  );
};

export default memo(Filters);
