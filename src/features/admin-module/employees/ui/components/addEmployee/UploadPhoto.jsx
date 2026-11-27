import { useState } from "react";
import { UserRound, Upload, X } from "lucide-react";

const UploadPhoto = () => {
  const [preview, setPreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    URL.revokeObjectURL(preview);
    setPreview("");
  };

  return (
    <div className="mb-7">
      <label className="mb-3 block text-sm font-semibold text-(--text-primary)">
        Employee Photo
      </label>

      <div className="flex flex-col gap-5 rounded-xl border border-(--border-color) bg-(--bg-hover)/30 p-5 sm:flex-row sm:items-center">
        {/* Avatar Preview */}
        <div className="relative flex size-25 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-(--border-color) bg-(--bg-surface)">
          {preview ? (
            <img
              src={preview}
              alt="Employee"
              className="h-full w-full object-cover"
            />
          ) : (
            <UserRound size={38} className="text-(--text-secondary)" />
          )}

          {preview && (
            <button
              type="button"
              onClick={removeImage}
              title="Remove image"
              className="absolute right-px top-1 rounded-full cursor-pointer bg-red-500 p-1.75 text-white hover:bg-red-600"
            >
              <X size={10} />
            </button>
          )}
        </div>

        {/* Upload Area */}
        <div className="flex-1" title="Upload Employee Photo">
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-(--border-color) px-4 py-5 text-center transition hover:border-blue-500 hover:bg-blue-500/5">
            <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
              <Upload size={20} />
            </div>

            <p className="text-sm font-semibold text-(--text-primary)">
              Click to upload employee photo
            </p>

            <p className="text-xs text-(--text-secondary)">PNG, JPG or WEBP</p>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <p className="mt-2 text-xs text-(--text-secondary)">
            Upload a clear profile picture for the employee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
