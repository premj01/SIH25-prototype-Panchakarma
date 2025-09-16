import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CenterAdminDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Center Resources</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Manage rooms/theatres and staff allocation (mocked).
        </CardContent>
      </Card>
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Certificates</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Upload and track certifications (prototype placeholder).
        </CardContent>
      </Card>
    </div>
  );
}
