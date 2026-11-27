const AddEmployeeHeader = ({ isEdit = false }) => {
  return (
    <div className="mb-6">
      {/* Heading */}
      <h1 className="mt-5 text-[2.1rem] font-semibold text-(--text-primary)">
        {isEdit ? "Update Employee" : "Add Employee"}
      </h1>

      {/* Description */}
      <p className="mt-1 text-(--text-secondary)">
        {isEdit
          ? "Update employee information and manage their organizational details."
          : "Add a new member to your organization and configure their profile."}
      </p>
    </div>
  );
};

export default AddEmployeeHeader;
