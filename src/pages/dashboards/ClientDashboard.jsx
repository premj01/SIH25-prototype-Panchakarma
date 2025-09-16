import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Your Journey</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          View assigned therapies and upcoming sessions. Submit feedback after
          each session.
        </CardContent>
      </Card>
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="/schedule">Book Session</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/notifications">View Precautions</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
