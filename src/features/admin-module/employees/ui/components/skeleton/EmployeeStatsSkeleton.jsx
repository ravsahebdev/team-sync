import Skeleton from "../../../../../../shared/ui/components/skeleton/Skeleton";

const EmployeeStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="p-5 rounded-xl border border-(--border-color) bg-(--bg-surface)"
        >
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-28" />

            <Skeleton className="h-10 w-10 rounded-lg" />
          </div>

          <Skeleton className="mt-4 h-9 w-16 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default EmployeeStatsSkeleton;
