import { BriefcaseBusiness } from "lucide-react";
import FormSelect from "./FormSelect";
import RadioStatus from "./RadioStatus";

const roleOptions = [
  { label: "Employee", value: "employee" },
  { label: "Admin", value: "admin" },
];

const EmploymentDetailsForm = ({ register, errors, departments = [] }) => {
  const departmentOptions = departments.map(({ name }) => ({
    label: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    value: name,
  })); 

  return (
    <section className="rounded-xl border border-(--border-color) bg-(--bg-surface) p-5 md:p-6">
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-purple-500/10 p-2 text-purple-500">
          <BriefcaseBusiness size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-(--text-primary)">
            Employment Details
          </h2>

          <p className="mt-1 text-xs text-(--text-secondary)">
            Employee role and organizational details
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <FormSelect
          label="Department"
          name="department"
          options={departmentOptions}
          placeholder="Select department"
          register={register}
          errors={errors}
          required
        />

        <FormSelect
          label="Employee Role"
          name="role"
          options={roleOptions}
          placeholder="Select role"
          register={register}
          errors={errors}
          required
        /> 

        <RadioStatus register={register} errors={errors} />
      </div>
    </section>
  );
};

export default EmploymentDetailsForm;
