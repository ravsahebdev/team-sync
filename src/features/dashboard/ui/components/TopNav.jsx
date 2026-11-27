import { Bell, Menu, MoonStar, Search, SunIcon } from "lucide-react";
import SearchInput from "../../../../shared/ui/components/SearchInput";

import TeamSyncLogo from "../../../../assets/TeamSync_Logo.png";

const TopNav = ({ topSearch, setTopSearch, toggleAside }) => {
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 py-4 bg-(--bg-surface)/70 backdrop-blur-xl border-b border-(--border-color)/40 z-50">
      <div className="md:hidden flex shrink-0 items-center">
        <img
          src={TeamSyncLogo}
          alt="Team-Sync"
          className="h-10 w-auto max-w-37.5 object-contain"
        />
      </div>

      {/* Search Input from shared component */}
      <SearchInput
        Inputplaceholder="Search workspace..."
        searchValue={topSearch}
        onChangeHandler={setTopSearch}
      />

      <div className="flex gap-8">
        <Bell size={23} className="cursor-pointer" />
        {/* Menu icon already used as hamburger; keep for possible other usage */}

        {/* Hamburger for mobile */}
        <Menu
          size={23}
          className="cursor-pointer md:hidden"
          onClick={toggleAside}
        />
      </div>
    </div>
  );
};

export default TopNav;
