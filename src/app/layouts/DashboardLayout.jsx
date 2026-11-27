import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AsideNav from "../../features/dashboard/ui/components/AsideNav";
import TopNav from "../../features/dashboard/ui/components/TopNav";

const DashboardLayout = () => {
  const { mode } = useSelector((store) => store.mode);
  const [topSearch, setTopSearch] = useState("");
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => setIsAsideOpen((prev) => !prev);
  const closeAside = () => setIsAsideOpen(false);

  // Light mode body class
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [mode]);

  return (
    <div className="min-h-screen">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_7fr]">
        <aside className="self-start sticky top-0 h-screen border-r border-gray-500 pt-2 px-0.75">
          <AsideNav />
        </aside>
        <main className="flex flex-col gap-4 px-6 pb-4">
          <TopNav topSearch={topSearch} setTopSearch={setTopSearch} toggleAside={toggleAside} />
          <Outlet />
        </main>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <TopNav topSearch={topSearch} setTopSearch={setTopSearch} toggleAside={toggleAside} />
        <AsideNav isOpen={isAsideOpen} closeAside={closeAside} />
      </div>
    </div>
  );
};

export default DashboardLayout;
