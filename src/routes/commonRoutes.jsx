import Chats from "../features/chats/ui/pages/Chats";
import HomePage from "../features/dashboard/ui/pages/HomePage";
import Setting from "../features/settings/ui/pages/Setting";

export let commonRoutes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "chat",
    element: <Chats />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
