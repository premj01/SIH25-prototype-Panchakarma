import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { ensureDefaultTherapies } from "@/lib/storage";
import { DEFAULT_THERAPIES } from "@/data/therapies";
import { Leaf, CalendarDays, Activity, BellRing } from "lucide-react";
import RoleSwitcher from "@/components/RoleSwitcher";
import { ROLES, getCurrentRole } from "@/lib/roles";
import { ensureDefaultDataset } from "@/lib/storage";
import {
  DEFAULT_PATIENTS,
  DEFAULT_STAFF,
  DEFAULT_ROOMS,
  DEFAULT_PACKAGES,
} from "@/data/mock";
import Navbarrr from "./pages/Navbarrr";

function App() {
  const navLinks = {
    PATIENT: [
      { to: "/", label: "Home" },
      { to: "/progress", label: "Progress" },
    ],
    THERAPIST: [
      { to: "/", label: "Home" },
      { to: "/schedule", label: "Schedule" },
      { to: "/patients", label: "Patients" },
    ],
    DOCTOR: [
      { to: "/", label: "Home" },
      { to: "/therapies", label: "Therapies" },
      { to: "/schedule", label: "Schedule" },
    ],
    DEFAULT: [
      { to: "/", label: "Home" },
      { to: "/therapies", label: "Therapies" },
      { to: "/schedule", label: "Schedule" },
      { to: "/patients", label: "Patients" },
      { to: "/staff", label: "Staff" },
      { to: "/rooms", label: "Rooms" },
      { to: "/packages", label: "Packages" },
      { to: "/notifications", label: "Precautions" },
      { to: "/progress", label: "Progress" },
      { to: "/admin", label: "Admin" },
    ],
  };
  useEffect(() => {
    ensureDefaultTherapies(DEFAULT_THERAPIES);
    ensureDefaultDataset({
      patients: DEFAULT_PATIENTS,
      staff: DEFAULT_STAFF,
      rooms: DEFAULT_ROOMS,
      packages: DEFAULT_PACKAGES,
    });
  }, []);
  const role = getCurrentRole();
  return (
    <div className="min-h-screen bg-white text-slate-900 brand-gradient">
      <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-emerald-700"
          >
            <Leaf className="h-5 w-5" /> Panchakarma
          </Link>
          <div
            className="flex items-left justify-left gap-2"
            style={{ justifySelf: "left", width: "60%" }}
          >
            <Navbarrr></Navbarrr>
          </div>
          {/* <nav className="flex items-center gap-4 text-sm">
            <Link to="/" className="hover:text-emerald-700">
              Home
            </Link>
            <Link to="/therapies" className="hover:text-emerald-700">
              Therapies
            </Link>
            <Link to="/schedule" className="hover:text-emerald-700">
              Schedule
            </Link>
            <Link to="/patients" className="hover:text-emerald-700">
              Patients
            </Link>
            <Link to="/staff" className="hover:text-emerald-700">
              Staff
            </Link>
            <Link to="/rooms" className="hover:text-emerald-700">
              Rooms
            </Link>
            <Link to="/packages" className="hover:text-emerald-700">
              Packages
            </Link>
            <Link to="/notifications" className="hover:text-emerald-700">
              Precautions
            </Link>
            <Link to="/progress" className="hover:text-emerald-700">
              Progress
            </Link>
            <Link to="/admin" className="hover:text-emerald-700">
              Admin
            </Link>
          </nav> */}
          <div className="flex items-center gap-3">
            <RoleSwitcher />
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#" onClick={() => localStorage.clear()}>
                Reset Data
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-10">
        <div className="grid gap-6 md:grid-cols-[1.5fr,1fr] mb-8">
          <Card className="bg-gradient-to-tr from-emerald-50 to-lime-50 border-emerald-100">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Holistic Ayurveda Care
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Manage multi-stage Panchakarma therapies, schedules, and care
              journeys with a calm, nature-inspired UI.
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <CalendarDays className="h-4 w-4" />
                Scheduling
              </div>
              <div className="text-xs text-slate-600">
                Automated sessions respecting phases and resources.
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <BellRing className="h-4 w-4" />
                Precautions
              </div>
              <div className="text-xs text-slate-600">
                Pre / post guidance with reminders.
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <Activity className="h-4 w-4" />
                Tracking
              </div>
              <div className="text-xs text-slate-600">
                Progress charts and milestones.
              </div>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-1">
                <Leaf className="h-4 w-4" />
                Authenticity
              </div>
              <div className="text-xs text-slate-600">
                Rooted in clinical Panchakarma flows.
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 mb-6 sm:grid-cols-2">
          {role === ROLES.client && (
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">
                  Client Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Visit{" "}
                <Link className="text-emerald-700 underline" to="/dash/client">
                  your dashboard
                </Link>{" "}
                for quick actions.
              </CardContent>
            </Card>
          )}
          {role === ROLES.doctor && (
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">
                  Doctor Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Go to{" "}
                <Link className="text-emerald-700 underline" to="/dash/doctor">
                  patients & schedule
                </Link>
                .
              </CardContent>
            </Card>
          )}
          {role === ROLES.centerAdmin && (
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Center Admin</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Open{" "}
                <Link className="text-emerald-700 underline" to="/dash/center">
                  center dashboard
                </Link>
                .
              </CardContent>
            </Card>
          )}
          {role === ROLES.superAdmin && (
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-800">Super Admin</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Open{" "}
                <Link className="text-emerald-700 underline" to="/dash/super">
                  global controls
                </Link>
                .
              </CardContent>
            </Card>
          )}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Panchakarma Management (Prototype)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Use the navigation to explore the MVP. Data is stored in
            localStorage.
          </CardContent>
        </Card>
        <div className="py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t bg-white/70">
        <div className="container py-6 text-xs text-slate-500">Team Martin</div>
      </footer>
    </div>
  );
}

export default App;
