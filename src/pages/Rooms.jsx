import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listRooms, addRoom } from "@/lib/storage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Rooms() {
  const [form, setForm] = useState({ name: "", type: "Theatre", gender: "" });
  const rooms = listRooms();
  return (
    <div className="grid gap-6">
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
        <CardHeader>
          <CardTitle className="text-emerald-800">Add Room</CardTitle>
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
            <label className="text-sm mb-1 block text-emerald-800">Type</label>
            <Input
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">
              Gender (optional)
            </label>
            <Input
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className="bg-white"
            />
          </div>
          <div className="md:col-span-1">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                if (!form.name) return;
                addRoom(form);
                location.reload();
              }}
            >
              Add Room
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {rooms.map((r) => (
          <Card key={r.id} className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800">{r.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <div>Type: {r.type}</div>
              {r.gender && <div>Gender: {r.gender}</div>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
