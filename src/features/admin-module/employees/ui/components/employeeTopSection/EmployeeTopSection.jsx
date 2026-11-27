import EmployeeStats from "./EmployeeStats";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeStatsSkeleton from "../skeleton/EmployeeStatsSkeleton";

const EmployeeTopSection = ({
  totalEmployees,
  activeEmployees,
  inActiveEmployees,
  getDepartmentsData,
  isStatsPending,
}) => {
  return (
    <div className="py-5 px-1 flex flex-col gap-6">
      <EmployeeHeader />

      {isStatsPending ? (
        <EmployeeStatsSkeleton />
      ) : (
        <EmployeeStats
          totalEmployees={totalEmployees?.pagination?.total}
          activeEmployees={activeEmployees?.pagination?.total}
          inActiveEmployees={inActiveEmployees?.pagination?.total}
          getDepartmentsData={getDepartmentsData?.data?.length}
        />
      )}
    </div>
  );
};

export default EmployeeTopSection;
