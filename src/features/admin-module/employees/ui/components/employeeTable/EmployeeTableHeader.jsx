const EmployeeTableHeader = () => {
  return (
    <thead>
      <tr className="bg-(--table-header-bg)">
        <th className="text-left py-5 pl-6">Profile</th>
        <th className="text-center">Status</th>
        <th className="text-left">Role</th>
        <th className="text-left">Department</th>
        <th className="text-left">Join Date</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
  );
};

export default EmployeeTableHeader;
