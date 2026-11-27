import { ChevronDown } from "lucide-react";

const FormSelect = ({
  label,
  name,
  options = [],
  placeholder = "Select option",
  register,
  errors,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-(--text-primary)"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <select
          id={name}
          defaultValue=""
          aria-invalid={!!errors?.[name]}
          aria-describedby={errors?.[name] ? `${name}-error` : undefined}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className="w-full appearance-none rounded-lg border border-(--border-color) bg-(--bg-surface) px-4 py-3 pr-10 text-sm text-(--text-primary) outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
        />
      </div>

      {errors?.[name] && (
        <p
          id={`${name}-error`}
          className="text-xs leading-5 text-red-500"
          role="alert"
        >
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
