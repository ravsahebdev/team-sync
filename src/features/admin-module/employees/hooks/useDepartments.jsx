import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../api/getDepartments";

const useDepartments = () => {
  const { data: getDepartmentsData, isPending: departmentsPending } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
    staleTime: 10 * 60 * 1000,
  });

  return {
    getDepartmentsData,
    departmentsPending,
  };
};

export default useDepartments;
