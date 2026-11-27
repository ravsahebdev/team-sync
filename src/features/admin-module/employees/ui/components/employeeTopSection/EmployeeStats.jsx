import { Users, UserCheck, Building2, UserRoundX } from "lucide-react";
import { memo } from "react";

const EmployeeStats = ({
  totalEmployees,
  activeEmployees,
  inActiveEmployees,
  getDepartmentsData,
}) => {
  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees ?? "--",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Active Employees",
      value: activeEmployees ?? "--",
      icon: UserCheck,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Departments",
      value: getDepartmentsData ?? "--",
      icon: Building2,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: "Inactive Employees",
      value: inActiveEmployees ?? "--",
      icon: UserRoundX,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="p-5 rounded-xl border border-(--border-color) bg-(--bg-surface)"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-(--text-secondary)">{card.title}</p>

              <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>
                <Icon size={20} />
              </div>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-(--text-primary)">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default memo(EmployeeStats);
