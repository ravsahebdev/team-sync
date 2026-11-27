import { axiosInstance } from "../../../../config/axiosInstance";

export const getAllEmployees = async ({
  params: { limit = 10, page = 1, status, role, department, search },
}) => {
  try {
    const res = await axiosInstance.get("/employee", {
      params: {
        page,
        limit,
        status,
        role,
        department,
        search,
      },
    });

    return res.data.data;
  } catch (error) {
    console.log("error in getAllEmployees:", error);
    throw error;
  }
};
