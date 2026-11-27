import {
  ChartArea,
  File,
  LayoutDashboard,
  List,
  Presentation,
  Settings,
  User,
  UserCircleIcon,
} from "lucide-react";

export let employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "/home/myTask",
    title: "My-Task",
    icon: <List />,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: <ChartArea />,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: <Presentation />,
  },
  {
    path: "/home/profile",
    title: "Profile",
    icon: <User />,
  },
  {
    path: "/home/setting",
    title: "Settings",
    icon: <Settings />,
  },
];

export let adminNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "/home/tasks",
    title: "Task",
    icon: <List />,
  },
  {
    path: "/home/department",
    title: "Department",
    icon: <UserCircleIcon />,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: <ChartArea />,
  },
  {
    path: "/home/employee",
    title: "Employee",
    icon: <User />,
  },
  {
    path: "/home/document",
    title: "Documents",
    icon: <File />,
  },
  {
    path: "/home/setting",
    title: "Settings",
    icon: <Settings />,
  },
];
