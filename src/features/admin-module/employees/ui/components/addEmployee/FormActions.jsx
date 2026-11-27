import { UserPlus, Save } from "lucide-react";

const FormActions = ({ onCancel, postPending = false, isEdit = false }) => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3 pt-2 pb-6">
      <button
        type="button"
        onClick={onCancel}
        className="rounded-lg cursor-pointer border border-(--border-color) px-5 py-2.5 text-sm font-medium text-(--text-secondary) transition hover:bg-(--bg-hover)"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={postPending}
        className="flex items-center gap-2.5 cursor-pointer rounded-xl px-6 py-3 bg-(--primary-button-bg) text-(--primary-button-text) font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isEdit ? <Save size={18} /> : <UserPlus size={18} />}

        {postPending
          ? isEdit
            ? "Updating..."
            : "Creating..."
          : isEdit
            ? "Update Employee"
            : "Create Employee"}
      </button>
    </div>
  );
};

export default FormActions;
