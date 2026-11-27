import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EmployeeDataPost } from "../api/EmployeeDataPost";

const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    data: postEmployeeData,
    isPending: postPending,
  } = useMutation({
    mutationKey: ["createEmployee"],
    mutationFn: EmployeeDataPost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });

      queryClient.invalidateQueries({
        queryKey: ["total-employees"],
      });

      queryClient.invalidateQueries({
        queryKey: ["active-employees"],
      }); 
    },

    onError: (error) => {
      console.log("Creation failed:", error);
    },
  });

  return {
    mutate,
    postEmployeeData,
    postPending,
  };
};

export default useCreateEmployee;
