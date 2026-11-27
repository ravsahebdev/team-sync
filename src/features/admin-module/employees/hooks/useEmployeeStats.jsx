import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../api/getAllEmployees";

const useEmployeeStats = () => {
  // Total Employees
  const { data: totalEmployees, isPending: totalPending } = useQuery({
    queryKey: ["total-employees"],
    queryFn: () =>
      getAllEmployees({
        params: {
          page: 1,
          limit: 1,
          role: "employee",
          status: "",
          department: "",
          search: "",
        },
      }),
    staleTime: 10 * 60 * 1000,
  });

  const total = totalEmployees?.pagination?.total ?? 0;

  // Active Employees
  const { data: activeEmployees, isPending: activePending } = useQuery({
    queryKey: ["active-employees"],
    queryFn: () =>
      getAllEmployees({
        params: {
          page: 1,
          limit: 1,
          role: "employee",
          status: "active",
          department: "",
          search: "",
        },
      }),
    staleTime: 10 * 60 * 1000,
  });

  const inActiveEmployees = {
    pagination: {
      total: total - (activeEmployees?.pagination?.total ?? 0),
    },
  };

  return {
    totalEmployees,
    activeEmployees,
    inActiveEmployees,
    isStatsPending: totalPending || activePending,
  };
};

export default useEmployeeStats;
