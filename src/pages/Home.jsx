import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Automated Therapy Scheduling</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Plan and manage therapy sessions automatically with resource-aware
          constraints and phases.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Precautions & Notifications</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          View pre-/post-procedure instructions. In a real app, alerts would be
          sent via SMS/Email.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Tracking</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Track stages and milestones with beautiful charts and progress
          indicators.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Admin Configuration</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Define therapies, durations, costs, and center certifications (mocked
          in this prototype).
        </CardContent>
      </Card>
    </div>
  );
}
