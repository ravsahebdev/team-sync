import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-(--border-color) bg-(--bg-surface) px-4 py-3 text-sm text-(--text-primary) outline-0 placeholder:text-(--text-secondary) focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  required = false,
  minLength,
  pattern,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
        <input
          id={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          aria-invalid={!!errors?.[name]}
          aria-describedby={errors?.[name] ? `${name}-error` : undefined}
          {...register(name, {
            required: required ? `${name} is required.` : false,
            ...(minLength && { minLength }),
            ...(pattern && { pattern }),
          })}
          className={`${inputClass} ${type === "password" ? "pr-12" : ""}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-(--text-secondary) hover:text-(--text-primary)"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {errors?.[name] && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-xs leading-5 text-red-500"
        >
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
