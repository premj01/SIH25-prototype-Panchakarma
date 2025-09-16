import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ensureDefaultTherapies,
  addTherapy,
  listTherapies,
} from "@/lib/storage";
import { DEFAULT_THERAPIES } from "@/data/therapies";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const [form, setForm] = useState({
    key: "",
    name: "",
    durationMins: 60,
    phase: "Purvakarma",
  });
  useEffect(() => {
    ensureDefaultTherapies(DEFAULT_THERAPIES);
  }, []);

  function create() {
    if (!form.key || !form.name) return;
    addTherapy({
      ...form,
      durationMins: Number(form.durationMins) || 60,
      resources: [],
      precautionsPre: [],
      precautionsPost: [],
    });
    location.reload();
  }

  return (
    <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
      <CardHeader>
        <CardTitle className="text-emerald-800">Admin</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600 space-y-4">
        <div className="grid md:grid-cols-4 gap-2">
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Key</label>
            <Input
              value={form.key}
              onChange={(e) => setForm({ ...form, key: e.target.value })}
              className="bg-white"
            />
          </div>
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
              Duration
            </label>
            <Input
              type="number"
              value={form.durationMins}
              onChange={(e) =>
                setForm({ ...form, durationMins: e.target.value })
              }
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Phase</label>
            <Input
              value={form.phase}
              onChange={(e) => setForm({ ...form, phase: e.target.value })}
              className="bg-white"
            />
          </div>
          <div className="md:col-span-4">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={create}
            >
              Create Therapy
            </Button>
          </div>
        </div>
        <div className="text-xs text-slate-500">
          Total therapies: {listTherapies().length}
        </div>
      </CardContent>
    </Card>
  );
}
