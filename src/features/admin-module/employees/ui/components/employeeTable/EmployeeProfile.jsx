const EmployeeProfile = ({ employee, randomColor }) => {
  return (
    <td className="border-b border-(--row-border) py-5 pl-6 pr-3">
      <div className="flex gap-3 items-center min-w-0">
        <div
          className={`w-12 h-12 shrink-0 rounded-full flex justify-center items-center text-gray-900 font-semibold ${randomColor}`}
        >
          {employee.name?.slice(0, 2)?.toUpperCase() ?? "U"}
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="font-semibold truncate">{employee.name}</h3>

          <p
            className="text-sm text-(--text-gray) truncate"
            title={employee.email}
          >
            {employee.email}
          </p>
        </div>
      </div>
    </td>
  );
};

export default EmployeeProfile;
