import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getEmployeeById } from "../../api/getEmployeeById";
import { updateEmployee } from "../../api/updateEmployee";

import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
import FormActions from "../components/addEmployee/FormActions";

import useDepartments from "../../hooks/useDepartments";

const EditEmployee = () => {
  const { empId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { getDepartmentsData } = useDepartments();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch employee by ID
  const { data, isPending, error } = useQuery({
    queryKey: ["employee", empId],
    queryFn: () => getEmployeeById(empId),
    enabled: !!empId,
  });

  // Populate form when employee data arrives
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  // Update employee mutation
  const updateMutation = useMutation({
    mutationFn: updateEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      queryClient.invalidateQueries({ queryKey: ["employee", empId] });
      queryClient.invalidateQueries({ queryKey: ["total-employees"] });
      queryClient.invalidateQueries({ queryKey: ["active-employees"] }); 

      toast.success("Employee updated successfully!");
      navigate("/home/employee");
    },

    onError: () => {
      toast.error("Failed to update employee!");
    },
  });

  const onSubmit = (formData) => {
    const { name, email, department, role, status } = formData;

    const updatedData = {
      name,
      email,
      department,
      role,
      status,
    };

    updateMutation.mutate({
      empId,
      data: updatedData,
    });
  };

  if (isPending) {
    return <p className="p-5">Loading employee...</p>;
  }

  if (error) {
    return <p className="p-5">Failed to load employee.</p>;
  }

  return (
    <div className="w-full space-y-6">
      <AddEmployeeHeader isEdit />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <PersonalInfoForm register={register} errors={errors} isEdit />

        <EmploymentDetailsForm
          register={register}
          errors={errors}
          departments={getDepartmentsData?.data}
          isEdit
        />

        <FormActions
          onCancel={() => navigate("/home/employee")}
          postPending={updateMutation.isPending}
          isEdit
        />
      </form>
    </div>
  );
};

export default EditEmployee;
