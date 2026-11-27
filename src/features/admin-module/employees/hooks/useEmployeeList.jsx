import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getAllEmployees } from "../api/getAllEmployees";
import useDebounce from "../../../../shared/hooks/useDebounce";

const useEmployeeList = () => {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const debouncedSearch = useDebounce(search, 600);
  const normalizedSearch = debouncedSearch.trim();

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [role, department, status, normalizedSearch]);

  // Employee Table Query
  const { data, isPending, isFetching, error, refetch } = useQuery({
    queryKey: ["employees", page, normalizedSearch, role, department, status],
    queryFn: () =>
      getAllEmployees({
        params: {
          page,
          limit: 10,
          status,
          role,
          department,
          search: normalizedSearch,
        },
      }),
    staleTime: 10 * 60 * 1000,
    placeholderData: (prev) => prev,
  });

  // Pagination Handler
  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

  return {
    data,
    isPending,
    isFetching,
    error,
    refetch,

    page,
    handlePageChange,

    search,
    setSearch,
    normalizedSearch,

    role,
    setRole,

    department,
    setDepartment,

    status,
    setStatus,
  };
};

export default useEmployeeList;
