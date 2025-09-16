import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Reports() {
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="text-emerald-800">
          Upload Reports (Mock)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-600">
        <Input type="file" />
        <Button className="bg-emerald-600 hover:bg-emerald-700">Upload</Button>
        <div>In a real app, files would be encrypted and stored securely.</div>
      </CardContent>
    </Card>
  );
}
