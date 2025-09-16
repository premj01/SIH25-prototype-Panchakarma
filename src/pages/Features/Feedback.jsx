import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Feedback() {
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="text-emerald-800">
          Session Feedback (Mock)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-600">
        <Input placeholder="Symptoms or improvements" />
        <Button className="bg-emerald-600 hover:bg-emerald-700">Submit</Button>
        <div>
          Used to refine schedules and precautions based on patient inputs.
        </div>
      </CardContent>
    </Card>
  );
}
