import { ChartArea } from "lucide-react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, onClick }) => (
  <div>
    <NavLink
      className={({ isActive }) =>
        `flex gap-3 pl-4 py-3 ${
          isActive ? "border-r-3 border-(--bg-primary) bg-(--row-hover-bg)" : ""
        }`
      }
      end="/"
      to={path}
      onClick={onClick} 
    >
      <ChartArea size={23} />
      {title}
    </NavLink>
  </div>
);

export default NavigationTab;
