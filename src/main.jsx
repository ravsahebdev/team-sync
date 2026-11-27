import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter.jsx";
import store from "./app/store.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000} />
      <AppRouter />
    </Provider>
  </QueryClientProvider>,
);
