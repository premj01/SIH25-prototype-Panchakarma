import { Link } from "react-router-dom";

export default function Navbarrr() {
  const role = localStorage.getItem("pk_role");

  // Define navigation links for each role
  const navLinks = {
    PATIENT: [
      { to: "/", label: "Home" },
      { to: "/progress", label: "Progress" },
      { to: "/schedule", label: "Schedule" },
      { to: "/notifications", label: "Precautions" },
    ],
    THERAPIST: [
      { to: "/", label: "Home" },
      { to: "/patients", label: "Patients" },
      { to: "/schedule", label: "Schedule" },
      { to: "/rooms", label: "Rooms" },
    ],
    DOCTOR: [
      { to: "/", label: "Home" },
      { to: "/patients", label: "Patients" },
      { to: "/therapies", label: "Therapies" },
      { to: "/schedule", label: "Schedule" },
      { to: "/rooms", label: "Rooms" },
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

  // Pick the correct links (fallback to DEFAULT if no role match)
  const linksToRender = navLinks[role] || navLinks.DEFAULT;

  return (
    <nav className="flex justify-left gap-4 text-sm">
      {linksToRender.map((link, index) => (
        <Link key={index} to={link.to} className="hover:text-emerald-700">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
