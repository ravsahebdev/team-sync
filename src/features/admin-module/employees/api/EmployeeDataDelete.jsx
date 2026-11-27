import { axiosInstance } from "../../../../config/axiosInstance";

export const EmployeeDataDelete = async (empId) => {
  try {
    const res = await axiosInstance.delete(`/employee/delete/${empId}`);

    return res.data;
  } catch (error) {
    console.log("error in EmployeeDataDelete:", error);
    throw error;
  }
};
