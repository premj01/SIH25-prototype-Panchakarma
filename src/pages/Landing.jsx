import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Stethoscope,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="py-10 space-y-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-emerald-700 text-sm font-medium mb-3">
          <Leaf className="h-4 w-4" /> Panchakarma Management Platform
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-emerald-900">
          Modern Ayurveda Care, Managed Beautifully
        </h1>
        <p className="text-slate-600 mt-2">
          Scheduling, precautions, and progress tracking for OPD and IPD
          programs.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="/therapies">Explore Therapies</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/schedule">Book a Session</a>
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <Stethoscope className="h-4 w-4" />
              For Patients
            </div>
            <div className="text-sm text-slate-600">
              Guided therapies, notifications, at-home instructions, and
              progress charts.
            </div>
          </CardContent>
        </Card>
        <Card className="border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <Building2 className="h-4 w-4" />
              For Centers
            </div>
            <div className="text-sm text-slate-600">
              Manage multi-theatre scheduling, staff, rooms, and resource
              availability.
            </div>
          </CardContent>
        </Card>
        <Card className="border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <ShieldCheck className="h-4 w-4" />
              Compliance
            </div>
            <div className="text-sm text-slate-600">
              Records, certificates, and center-level oversight (mocked in this
              prototype).
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 text-center">
        <a
          href="/admin"
          className="inline-flex items-center gap-2 text-emerald-700 text-sm"
        >
          Visit Admin <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Image gallery (Panchakarma placeholders) */}
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-emerald-900 mb-4">
          Panchakarma Glimpses
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "https://www.motherhoodayurveda.edu.in/wp-content/uploads/2021/10/shirodhara.png",
            "https://emap.ay.amrita.edu/wp-content/uploads/2023/02/Kashaya-dhara-1536x1086.jpg",
            "https://www.planetayurveda.com/wp-content/uploads/2023/09/nasya-therapy-healing-nasal-panchakarma-treatment-2.jpg",
            "https://i.ytimg.com/vi/w56oHHXJM3s/sddefault.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border bg-emerald-50"
            >
              <img
                src={src}
                alt="Ayurveda"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Timeline section */}
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-emerald-900 mb-6">
          Panchakarma Journey
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: "Consult",
              desc: "Prakriti & dosha assessment; eligibility checks.",
            },
            {
              title: "Purvakarma",
              desc: "Snehana, Swedana, dietary prep to ready the body.",
            },
            {
              title: "Pradhana",
              desc: "Vamana, Virechana, Basti, Nasya, Raktamokshana.",
            },
            {
              title: "Paschat",
              desc: "Post care, diet (pathya), rest, follow-ups.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white/80 backdrop-blur p-5"
            >
              <div className="text-emerald-800 font-semibold mb-1">
                {s.title}
              </div>
              <div className="text-sm text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
