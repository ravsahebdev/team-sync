import { axiosInstance } from "../../../../config/axiosInstance";

export const updateEmployee = async ({ empId, data }) => {
  try {
    const res = await axiosInstance.patch(`/employee/update/${empId}`, data);
    return res.data.data;
  } catch (error) {
    console.log("error in updateEmployee:", error);
    throw error;
  }
};
