import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Patients Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Review patient sessions and adjust therapy stages (mock data).
        </CardContent>
      </Card>
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Today’s Schedule</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          A compact view of today’s therapies across rooms (prototype).
        </CardContent>
      </Card>
    </div>
  );
}
