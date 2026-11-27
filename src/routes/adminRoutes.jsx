import Department from "../features/admin-module/departments/ui/pages/Department";
import Document from "../features/admin-module/documents/ui/pages/Document";
import Employee from "../features/admin-module/employees/ui/pages/Employee";
import Tasks from "../features/admin-module/tasks/ui/pages/Tasks";
import AddEmployee from "../features/admin-module/employees/ui/pages/AddEmployee";
import EditEmployee from "../features/admin-module/employees/ui/pages/EditEmployee";

export const adminRoutes = [
  { path: "employee", element: <Employee /> },
  { path: "add-employee", element: <AddEmployee /> },
  { path: "edit-employee/:empId", element: <EditEmployee /> },
  { path: "tasks", element: <Tasks /> },
  { path: "department", element: <Department /> },
  { path: "document", element: <Document /> },
];
