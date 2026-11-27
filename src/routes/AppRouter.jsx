import { useEffect } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import AuthProtected from "./protectedRoutes/AuthProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import DashboardLayout from "../app/layouts/DashboardLayout";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../features/auth/state/authAction";
import { commonRoutes } from "./commonRoutes";
import RoleBaseRoutes from "./protectedRoutes/RoleBaseRoutes";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

import DashboardError from "../app/components/DashboardError";
import NotFound from "../app/components/NotFound";

const AppRouter = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          element: <AuthProtected />,
          children: [
            {
              element: <AuthLayout />,
              children: [
                { index: true, element: <LoginPage /> },
                { path: "register", element: <RegisterPage /> },
              ],
            },
          ],
        },
        {
          path: "home",
          element: <ProtectedRoutes />,
          errorElement: <DashboardError />,
          children: [
            {
              element: <DashboardLayout />,
              children: [
                ...commonRoutes,
                {
                  element: <RoleBaseRoutes allowedRoles={["admin"]} />,
                  children: adminRoutes,
                },
                {
                  element: <RoleBaseRoutes allowedRoles={["employee"]} />,
                  children: employeeRoutes,
                },
                { path: "*", element: <NotFound /> },
              ],
            },
          ],
        }, 
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
