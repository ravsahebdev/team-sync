import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoutes = ({ allowedRoles }) => { // admin
  let { employee } = useSelector((store) => store.auth); // admin

  if (!allowedRoles.includes(employee?.role)) { // admin
    return <Navigate to={"/unauthorized"} />;
  }

  return <Outlet />;
};

export default RoleBaseRoutes;
