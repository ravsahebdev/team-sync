import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigations";
import { useDispatch, useSelector } from "react-redux";
import NavigationTab from "./NavigationTab";
import { toggleTheme } from "../../../../shared/state/themeSlice";
import { MoonStar, SunIcon } from "lucide-react";
import TeamSyncLogo from "../../../../assets/TeamSync_Logo.png";

/**
 * Aside navigation component.
 * - Desktop (md and up): static sidebar.
 * - Mobile (<md): sliding drawer with overlay.
 */
const AsideNav = ({ isOpen = false, closeAside = () => {} }) => {
  const { employee } = useSelector((store) => store.auth);
  const { mode } = useSelector((store) => store.mode);
  const dispatch = useDispatch();

  const navigation =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  const handleLinkClick = () => {
    if (closeAside) closeAside();
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  // Desktop sidebar (visible on md+)
  const desktopSidebar = (
    <nav className="hidden md:flex w-64 flex-col p-2 h-full bg-[--bg-surface]">
      <div className="pl-2">
        <img
          src={TeamSyncLogo}
          alt="Team-Sync"
          className="h-15 w-auto max-w-40"
        />
      </div>
      <div className="flex flex-col">
        {navigation?.map((route, index) => (
          <NavigationTab
            key={index}
            path={route.path}
            Icon={route.icon}
            title={route.title}
            onClick={handleLinkClick}
          />
        ))}
      </div>
    </nav>
  );

  // Mobile drawer with overlay
  const mobileDrawer = (
    <div
      className={`w-60 fixed inset-0 bg-opacity-30 z-40 transition-opacity duration-400 md:hidden ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeAside}
    >
      <nav
        className={`h-full w-60 bg-(--bg-surface) border-r border-(--border-color) overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col mt-18">
          {navigation?.map((route, index) => (
            <NavigationTab
              key={index}
              path={route.path}
              Icon={route.icon}
              title={route.title}
              onClick={handleLinkClick}
            />
          ))}

          {/* Theme  */}
          <div className="mt-6 border-t border-(--border-color) pt-10">
            <div className="flex items-center justify-between px-5">
              <span className="text-base font-medium text-(--text-primary)">
                Theme
              </span>

              <div className="flex items-center gap-3">
                <SunIcon
                  size={21}
                  className={
                    mode === "light" ? "text-blue-500" : "text-gray-400"
                  }
                />

                <button
                  type="button"
                  onClick={handleTheme}
                  aria-label="Toggle theme"
                  aria-pressed={mode === "dark"}
                  className={`relative h-7 w-14 rounded-full transition-colors duration-300 ${
                    mode === "dark" ? "bg-blue-600" : "bg-gray-400"
                  }`}
                >
                  <span
                    className={`absolute top-1 size-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                      mode === "dark" ? "left-8" : "left-1"
                    }`}
                  />
                </button>

                <MoonStar
                  size={21}
                  className={
                    mode === "dark" ? "text-blue-400" : "text-gray-400"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileDrawer}
    </>
  );
};

export default AsideNav;
