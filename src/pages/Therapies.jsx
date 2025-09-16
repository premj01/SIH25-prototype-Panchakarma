import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listTherapies, addTherapy } from "@/lib/storage";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Therapies() {
  const [q, setQ] = useState("");
  const [form, setForm] = useState({
    name: "",
    key: "",
    durationMins: 60,
    phase: "Purvakarma",
  });
  const therapies = listTherapies();
  const filtered = useMemo(
    () =>
      therapies.filter((t) =>
        (t.name + t.phase).toLowerCase().includes(q.toLowerCase())
      ),
    [therapies, q]
  );

  useEffect(() => {}, []);

  function createTherapy() {
    if (!form.name || !form.key) return;
    addTherapy({
      key: form.key,
      name: form.name,
      durationMins: Number(form.durationMins) || 60,
      phase: form.phase,
      resources: [],
      precautionsPre: [],
      precautionsPost: [],
    });
    location.reload();
  }

  return (
    <div className="grid gap-6">
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
        <CardHeader>
          <CardTitle className="text-emerald-800">Therapies</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm mb-1 block text-emerald-800">
                Search
              </label>
              <Input
                placeholder="Search therapies..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="bg-white"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <label className="text-sm mb-1 block text-emerald-800">
                  Key
                </label>
                <Input
                  value={form.key}
                  onChange={(e) => setForm({ ...form, key: e.target.value })}
                  className="bg-white"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-emerald-800">
                  Name
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-emerald-800">
                  Duration (mins)
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
                <label className="text-sm mb-1 block text-emerald-800">
                  Phase
                </label>
                <Input
                  value={form.phase}
                  onChange={(e) => setForm({ ...form, phase: e.target.value })}
                  className="bg-white"
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto"
              onClick={createTherapy}
            >
              Add Therapy
            </Button>
            <div className="text-xs text-slate-500 mt-1">
              Tip: use keys like "abhyanga", "basti", "virechana".
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((t) => (
          <Card key={t.key} className="border-emerald-100">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-3">
                <span className="text-emerald-800">{t.name}</span>
                <Badge className="bg-emerald-600 hover:bg-emerald-700">
                  {t.phase}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="mb-2 text-slate-600">
                <span className="font-medium text-slate-700">Duration:</span>{" "}
                {t.durationMins} mins
              </div>
              <div className="mb-4 text-slate-600">
                <span className="font-medium text-slate-700">Resources:</span>{" "}
                {t.resources.join(", ")}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border bg-emerald-50/50 p-3">
                  <div className="font-medium text-emerald-800 mb-1">
                    Pre-precautions
                  </div>
                  <ul className="list-disc pl-5 text-slate-700">
                    {t.precautionsPre.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border bg-lime-50/50 p-3">
                  <div className="font-medium text-emerald-800 mb-1">
                    Post-precautions
                  </div>
                  <ul className="list-disc pl-5 text-slate-700">
                    {t.precautionsPost.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
