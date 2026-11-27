import { axiosInstance } from "../../../../config/axiosInstance";

export const EmployeeDataPost = async (credential) => {
  try {
    const res = await axiosInstance.post("/employee/create", credential);
    return res;
  } catch (error) {
    console.log("error in employeeDataPost", error);
    throw error;
  }
};
