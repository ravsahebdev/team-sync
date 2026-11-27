import { CheckCircle2, XCircle } from "lucide-react";

const RadioStatus = ({ register, errors }) => {
  const options = [
    {
      label: "Active",
      value: "active",
      Icon: CheckCircle2,
      color: "emerald",
    },
    {
      label: "Inactive",
      value: "inactive",
      Icon: XCircle,
      color: "red",
    },
  ];

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-(--text-primary)">
        Account Status
        <span className="ml-1 text-red-500">*</span>
      </label>

      <div className="grid grid-cols-2 gap-3">
        {options.map(({ label, value, Icon, color }) => {
          const isActive = color === "emerald";

          return (
            <label key={value} className="group cursor-pointer">
              <input
                type="radio"
                value={value}
                {...register("status", {
                  required: "Please select account status",
                })}
                className="peer sr-only"
              />

              <div
                className={`flex h-11 items-center gap-2 rounded-lg border border-(--border-color) px-3 transition
                  hover:bg-(--bg-hover)
                  peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500
                  ${
                    isActive
                      ? "group-has-[:checked]:border-emerald-500 group-has-[:checked]:bg-emerald-500/10"
                      : "group-has-[:checked]:border-red-500 group-has-[:checked]:bg-red-500/10"
                  }`}
              >
                <Icon
                  size={19}
                  className={isActive ? "text-emerald-500" : "text-red-500"}
                />

                <span className="flex-1 text-sm font-semibold text-(--text-primary)">
                  {label}
                </span>

                <span
                  className={`flex size-4 items-center justify-center rounded-full border
                    ${
                      isActive
                        ? "group-has-[:checked]:border-emerald-500"
                        : "group-has-[:checked]:border-red-500"
                    } border-(--border-color)`}
                >
                  <span
                    className={`size-2 rounded-full opacity-0 transition-opacity
                      group-has-[:checked]:opacity-100
                      ${isActive ? "bg-emerald-500" : "bg-red-500"}`}
                  />
                </span>
              </div>
            </label>
          );
        })}
      </div>

      {errors?.status && (
        <p className="mt-2 text-xs text-red-500">{errors.status.message}</p>
      )}
    </div>
  );
};

export default RadioStatus;
