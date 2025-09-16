import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listPatients, listPackages, addPatient } from "@/lib/storage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Patients() {
  const [form, setForm] = useState({
    name: "",
    program: "7-day detox",
    stage: "Purvakarma",
  });
  const patients = listPatients();
  const packages = Object.fromEntries(listPackages().map((p) => [p.id, p]));
  return (
    <div className="grid gap-6">
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
        <CardHeader>
          <CardTitle className="text-emerald-800">Add Patient</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-2">
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">
              Program
            </label>
            <Input
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Stage</label>
            <Input
              value={form.stage}
              onChange={(e) => setForm({ ...form, stage: e.target.value })}
              className="bg-white"
            />
          </div>
          <div className="md:col-span-3">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                if (!form.name) return;
                addPatient(form);
                location.reload();
              }}
            >
              Add Patient
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {patients.map((p) => (
          <Card key={p.id} className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800">{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-1">
              <div>
                <span className="font-medium">Program:</span> {p.program}
              </div>
              <div>
                <span className="font-medium">Stage:</span> {p.stage}
              </div>
              <div>
                <span className="font-medium">Package Therapies:</span>{" "}
                {packages[p.programId]?.includes?.join(", ") || "See program"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
