import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import Therapies from "@/pages/Therapies";
import Schedule from "@/pages/Schedule";
import Notifications from "@/pages/Notifications";
import Progress from "@/pages/Progress";
import Admin from "@/pages/Admin";
import ClientDashboard from "@/pages/dashboards/ClientDashboard";
import DoctorDashboard from "@/pages/dashboards/DoctorDashboard";
import CenterAdminDashboard from "@/pages/dashboards/CenterAdminDashboard";
import SuperAdminDashboard from "@/pages/dashboards/SuperAdminDashboard";
import Centers from "@/pages/Features/Centers";
import Reports from "@/pages/Features/Reports";
import Feedback from "@/pages/Features/Feedback";
import AtHome from "@/pages/Features/AtHome";
import Patients from "@/pages/Patients";
import Staff from "@/pages/Staff";
import Rooms from "@/pages/Rooms";
import Packages from "@/pages/Packages";
import { Toaster } from "@/components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "therapies", element: <Therapies /> },
      { path: "schedule", element: <Schedule /> },
      { path: "notifications", element: <Notifications /> },
      { path: "progress", element: <Progress /> },
      { path: "admin", element: <Admin /> },
      { path: "dash/client", element: <ClientDashboard /> },
      { path: "dash/doctor", element: <DoctorDashboard /> },
      { path: "dash/center", element: <CenterAdminDashboard /> },
      { path: "dash/super", element: <SuperAdminDashboard /> },
      { path: "centers", element: <Centers /> },
      { path: "reports", element: <Reports /> },
      { path: "feedback", element: <Feedback /> },
      { path: "athome", element: <AtHome /> },
      { path: "patients", element: <Patients /> },
      { path: "staff", element: <Staff /> },
      { path: "rooms", element: <Rooms /> },
      { path: "packages", element: <Packages /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
