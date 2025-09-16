import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Centers() {
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="text-emerald-800">
          Nearby Centers (Mock)
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        This is a placeholder for maps and center listings with certifications.
      </CardContent>
    </Card>
  );
}
