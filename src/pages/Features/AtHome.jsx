import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AtHome() {
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="text-emerald-800">At-Home Guide (Mock)</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        Follow doctor instructions and log daily check-ins. Video consultations
        to be integrated.
      </CardContent>
    </Card>
  );
}
