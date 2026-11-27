import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
import FormActions from "../components/addEmployee/FormActions";
import useCreateEmployee from "../../hooks/useCreateEmployee";
import useDepartments from "../../hooks/useDepartments";

const AddEmployee = () => {
  const navigation = useNavigate();

  const { mutate, postPending } = useCreateEmployee();
  const { getDepartmentsData } = useDepartments();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      department: "",
      role: "",
      status: "active",
    },
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        toast.success("Employee created successfully!");
      },

      onError: () => {
        toast.error("Failed to create employee!");
      },
    });
  };
 

  return (
    <div className="w-full space-y-6">
      <AddEmployeeHeader />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <PersonalInfoForm register={register} errors={errors} />

        <EmploymentDetailsForm
          register={register}
          errors={errors}
          departments={getDepartmentsData?.data}
        />

        <FormActions
          onCancel={() => navigation("/home/employee")}
          postPending={postPending}
        />
      </form>
    </div>
  );
};

export default AddEmployee;
