import { axiosInstance } from "../../../../config/axiosInstance";

export const getEmployeeById = async (empId) => {
  try {
    const res = await axiosInstance.get(`/employee/${empId}`);
    return res.data.data;
  } catch (error) {
    console.log("error in getEmployeeById", error);
    throw error;
  }
};
