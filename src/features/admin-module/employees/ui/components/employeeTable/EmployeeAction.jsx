import { useEffect, useRef, useState } from "react";
import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";

import EmployeeDetailsModal from "./EmployeeDetailsModal";
import DeleteEmployeeData from "./DeleteEmployeeData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const EmployeeAction = ({ employee, deleteEmployee, isDeleting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("down");

  const actionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (actionRef.current && !actionRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleDelete = () => {
    deleteEmployee(employee._id, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        toast.success("Employee deleted successfully!");
      },
      onError: () => {
        toast.error("Failed to delete employee!");
      },
    });
  };

  return (
    <td className="border-b border-(--row-border)">
      <div className="relative flex justify-center" ref={actionRef}>
        {/* Action Button */}
        <button
          type="button"
          title="Employee actions"
          onClick={() => {
            const rect = actionRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;

            setDropdownDirection(spaceBelow < 180 ? "up" : "down");
            setIsOpen((prev) => !prev);
          }}
          className="rounded-full p-3 transition-colors hover:bg-(--action-hover-bg) cursor-pointer"
        >
          <MoreVertical size={20} />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            className={`absolute right-11 z-50 w-48 overflow-hidden rounded-xl border border-(--border-color) bg-(--bg-surface) py-1 shadow-xl ${
              dropdownDirection === "up"
                ? "bottom-full -mb-2"
                : "top-full -mt-2"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setIsViewModalOpen(true);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-(--text-primary) hover:bg-(--bg-hover)"
            >
              <Eye size={17} />
              View Employee
            </button>

            <button
              type="button"
              onClick={() => {
                navigate(`/home/edit-employee/${employee._id}`);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-(--text-primary) hover:bg-(--bg-hover)"
            >
              <Pencil size={17} />
              Edit Employee
            </button>

            <div className="my-1 border-t border-(--border-color)" />

            <button
              type="button"
              onClick={() => {
                setIsDeleteModalOpen(true);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10"
            >
              <Trash2 size={17} />
              Delete Employee
            </button>
          </div>
        )}
      </div>

      {/* View Employee Modal */}
      {isViewModalOpen && (
        <EmployeeDetailsModal
          employee={employee}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteEmployeeData
          isDeleting={isDeleting}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          handleDelete={handleDelete}
          employee={employee}
        />
      )}
    </td>
  );
};

export default EmployeeAction;
