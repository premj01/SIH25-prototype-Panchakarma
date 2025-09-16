import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuperAdminDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Centers Management</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Add/remove centers and assign permissions (prototype view).
        </CardContent>
      </Card>
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">System Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          High-level stats and compliance checks (mock).
        </CardContent>
      </Card>
    </div>
  );
}
