import Skeleton from "../../../../../../shared/ui/components/skeleton/Skeleton";

const EmployeeTableSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
        <tr key={row}>
          {/* Profile */}
          <td className="border-b border-(--row-border) py-5 pl-6">
            <div className="flex gap-3 items-center">
              <Skeleton className="w-12 h-12 rounded-full shrink-0" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-36" />
              </div>
            </div>
          </td>

          {/* Status */}
          <td className="border-b border-(--row-border)">
            <div className="flex justify-center">
              <Skeleton className="h-7 w-20 rounded-full" />
            </div>
          </td>

          {/* Role */}
          <td className="border-b border-(--row-border)">
            <Skeleton className="h-4 w-24" />
          </td>

          {/* Department */}
          <td className="border-b border-(--row-border)">
            <Skeleton className="h-4 w-28" />
          </td>

          {/* Join Date */}
          <td className="border-b border-(--row-border)">
            <Skeleton className="h-4 w-24" />
          </td>

          {/* Action */}
          <td className="border-b border-(--row-border)">
            <Skeleton className="h-8 w-20 rounded-lg" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default EmployeeTableSkeleton;
