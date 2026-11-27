import Attendance from "../features/employee-module/attendance/ui/pages/Attendance";
import MyTasks from "../features/employee-module/myTasks/ui/pages/MyTasks";
import Profile from "../features/employee-module/profile/ui/pages/Profile";

export const employeeRoutes = [
  { path: "attendance", element: <Attendance /> },
  { path: "myTask", element: <MyTasks /> },
  { path: "profile", element: <Profile /> },
];
