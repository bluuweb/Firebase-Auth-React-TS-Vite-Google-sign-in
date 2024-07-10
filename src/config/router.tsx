import PrivateLayout from "@/pages/layouts/private-layout";
import RootLayout from "@/pages/layouts/root-layout";
import DashboarPage from "@/pages/private/dashboard-page";
import HomePage from "@/pages/public/home-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "dashboard",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <DashboarPage />,
          },
          {
            path: "settings",
            element: <div>Settings</div>,
          },
        ],
      },
    ],
  },
]);
