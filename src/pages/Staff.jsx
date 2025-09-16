import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listStaff, addStaff, updateStaff } from "@/lib/storage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Staff() {
  const [form, setForm] = useState({
    name: "",
    role: "Therapist",
    gender: "",
    from: "09:00",
    to: "13:00",
  });
  const staff = listStaff();
  return (
    <div className="grid gap-6">
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
        <CardHeader>
          <CardTitle className="text-emerald-800">Add Staff</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-2">
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Role</label>
            <Input
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">
              Gender
            </label>
            <Input
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className="bg-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm mb-1 block text-emerald-800">
                From
              </label>
              <Input
                type="time"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="bg-white"
              />
            </div>
            <div>
              <label className="text-sm mb-1 block text-emerald-800">To</label>
              <Input
                type="time"
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="bg-white"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                if (!form.name) return;
                addStaff({
                  name: form.name,
                  role: form.role,
                  gender: form.gender,
                  shifts: [`${form.from}-${form.to}`],
                });
                location.reload();
              }}
            >
              Add Staff
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {staff.map((s) => (
          <Card key={s.id} className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800">{s.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>Role: {s.role}</div>
              {s.gender && <div>Gender: {s.gender}</div>}
              <div>Shifts: {s.shifts?.join(", ")}</div>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="time"
                  defaultValue={s.shifts?.[0]?.split("-")[0] || ""}
                  onBlur={(e) => {
                    const from = e.target.value;
                    const to =
                      e.currentTarget.parentElement?.parentElement?.querySelector(
                        `#to-${s.id}`
                      )?.value ||
                      s.shifts?.[0]?.split("-")[1] ||
                      "";
                    if (from && to)
                      updateStaff(s.id, { shifts: [`${from}-${to}`] });
                  }}
                />
                <Input
                  id={`to-${s.id}`}
                  type="time"
                  defaultValue={s.shifts?.[0]?.split("-")[1] || ""}
                  onBlur={(e) => {
                    const to = e.target.value;
                    const from =
                      e.currentTarget.parentElement?.parentElement?.querySelector(
                        'input[type="time"]'
                      )?.value ||
                      s.shifts?.[0]?.split("-")[0] ||
                      "";
                    if (from && to)
                      updateStaff(s.id, { shifts: [`${from}-${to}`] });
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
