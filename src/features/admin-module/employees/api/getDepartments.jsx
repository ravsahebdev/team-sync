import { axiosInstance } from "../../../../config/axiosInstance";

export const getDepartments = async () => {
  try {
    let res = await axiosInstance.get("/departments");
    return res.data;
  } catch (error) {
    console.log("Error in getDepartments", error);
    throw error;
  }
};
