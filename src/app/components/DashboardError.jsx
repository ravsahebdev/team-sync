import { isRouteErrorResponse, useRouteError } from "react-router";

const DashboardError = () => {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || "Something went wrong."
    : error?.message || "An unexpected error occurred.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-(--bg-primary) px-5 text-center">
      <h1 className="text-3xl font-bold text-(--text-primary)">
        Something went wrong!
      </h1>

      <p className="text-sm text-(--text-secondary)">{errorMessage}</p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Reload Application
      </button>
    </div>
  );
};

export default DashboardError;
