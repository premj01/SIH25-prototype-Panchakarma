import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  listTherapies,
  upsertSession,
  listSessions,
  listRooms,
  listStaff,
  listPatients,
} from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  hasRoomConflict,
  isStaffAvailable,
  enforceStageDependency,
} from "@/lib/constraints";

export default function Schedule() {
  const { toast } = useToast();
  const therapies = listTherapies();
  const rooms = listRooms();
  const staff = listStaff();
  const patients = listPatients();
  const [selectedKey, setSelectedKey] = useState(therapies[0]?.key ?? "");
  const [roomId, setRoomId] = useState(rooms[0]?.id ?? "");
  const [staffId, setStaffId] = useState(staff[0]?.id ?? "");
  const [patientId, setPatientId] = useState(patients[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const allSessions = useMemo(() => listSessions(), []);

  function submit() {
    if (!selectedKey || !roomId || !staffId || !patientId || !date || !time) {
      toast({ title: "Missing fields", description: "Select all fields." });
      return;
    }
    const therapy = therapies.find((t) => t.key === selectedKey);
    const patient = patients.find((p) => p.id === patientId);
    if (!enforceStageDependency(patient?.stage, selectedKey)) {
      toast({
        title: "Stage dependency",
        description: "Complete pre-procedures before main therapies.",
      });
      return;
    }
    const datetime = `${date}T${time}`;
    if (hasRoomConflict(roomId, datetime, therapy?.durationMins || 60)) {
      toast({
        title: "Room busy",
        description: "Selected room is not available around that time.",
      });
      return;
    }
    if (!isStaffAvailable(staffId, datetime)) {
      toast({
        title: "Staff unavailable",
        description: "Choose a time within staff shift.",
      });
      return;
    }
    const session = {
      therapyKey: selectedKey,
      therapyName: therapy?.name ?? selectedKey,
      datetime,
      roomId,
      staffId,
      patientId,
      notes,
    };
    const updated = upsertSession(session);
    toast({
      title: "Session scheduled",
      description: `${therapy?.name} on ${date} ${time}`,
    });
    setNotes("");
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Book a Session</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-1 block">Therapy</Label>
            <Select value={selectedKey} onValueChange={setSelectedKey}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select therapy" />
              </SelectTrigger>
              <SelectContent>
                {therapies.map((t) => (
                  <SelectItem key={t.key} value={t.key}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="mb-1 block">Room</Label>
              <Select value={roomId} onValueChange={setRoomId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-1 block">Staff</Label>
              <Select value={staffId} onValueChange={setStaffId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Staff" />
                </SelectTrigger>
                <SelectContent>
                  {staff.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-1 block">Patient</Label>
              <Select value={patientId} onValueChange={setPatientId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Patient" />
                </SelectTrigger>
                <SelectContent>
                  {patients.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="mb-1 block">Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-1 block">Time</Label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label className="mb-1 block">Notes</Label>
            <Input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Optional"
            />
          </div>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={submit}
          >
            Schedule
          </Button>
        </CardContent>
      </Card>

      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {listSessions().length === 0 && (
              <div className="text-sm text-slate-500">No sessions yet</div>
            )}
            {listSessions().map((s) => (
              <div key={s.id} className="rounded-md border p-3 bg-white/70">
                <div className="font-medium text-emerald-800">
                  {s.therapyName}
                </div>
                <div className="text-xs text-slate-500">
                  {new Date(s.datetime).toLocaleString()}
                </div>
                {s.notes && <div className="text-sm mt-1">{s.notes}</div>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
