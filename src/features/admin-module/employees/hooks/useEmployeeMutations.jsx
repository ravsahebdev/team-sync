import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { EmployeeDataDelete } from "../api/EmployeeDataDelete";
import { getAllEmployees } from "../api/getAllEmployees";
import { exportEmployeesCSV } from "../utils/exportEmployeesCSV";

const useEmployeeMutations = () => {
  const queryClient = useQueryClient();

  // Delete Employee
  const deleteEmployeeMutation = useMutation({
    mutationKey: ["deleteEmployee"],
    mutationFn: EmployeeDataDelete,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      queryClient.invalidateQueries({ queryKey: ["total-employees"] });
      queryClient.invalidateQueries({ queryKey: ["active-employees"] });
    },

    onError: (error) => {
      console.log("Employee deletion failed:", error);
    },
  });

  // CSV Export
  const [exportPending, setExportPending] = useState(false);

  const handleExport = async ({
    search = "",
    role = "",
    department = "",
    status = "",
    total = 0,
  } = {}) => {
    try {
      if (!total) {
        toast.info("No employees available to export.");
        return;
      }

      setExportPending(true);

      const response = await getAllEmployees({
        params: {
          page: 1,
          limit: total,
          search,
          role,
          department,
          status,
        },
      });

      if (!response.employees?.length) {
        toast.info("No employees available to export.");
        return;
      }

      exportEmployeesCSV(response.employees);

      toast.success("Employees exported successfully.");
    } catch (error) {
      toast.error("Failed to export employees. Please try again.");
      console.error("Employee export failed:", error);
    } finally {
      setExportPending(false);
    }
  };

  return {
    deleteEmployeeMutation,
    handleExport,
    exportPending,
  };
};

export default useEmployeeMutations;
