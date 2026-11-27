import { UserRound } from "lucide-react";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";

const PersonalInfoForm = ({ register, errors, isEdit = false }) => {
  return (
    <section className="rounded-xl border border-(--border-color) bg-(--bg-surface) p-5 md:p-6">
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
          <UserRound size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-(--text-primary)">
            Personal Information
          </h2>

          <p className="mt-1 text-xs text-(--text-secondary)">
            Basic details about the employee
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <FormInput
          label="Full Name"
          name="name"
          placeholder="Enter full name"
          register={register}
          errors={errors}
          required
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="example@company.com"
          register={register}
          errors={errors}
          pattern={{
            value: /^\S+@\S+\.\S+$/,
            message: "Please enter a valid email address.",
          }}
          required
        />
        {!isEdit && (
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            register={register}
            errors={errors}
            required
            minLength={{
              value: 6,
              message: "Minimum 6 characters.",
            }}
            pattern={{
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message: "Use upper, lower, number & symbol.",
            }}
          />
        )}
      </div>
    </section>
  );
};

export default PersonalInfoForm;
