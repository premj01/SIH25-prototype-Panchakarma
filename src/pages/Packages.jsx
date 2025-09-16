import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listPackages, addPackage, listTherapies } from "@/lib/storage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Packages() {
  const [name, setName] = useState("");
  const [includes, setIncludes] = useState("");
  const pkgs = listPackages();
  const therapyKeys = listTherapies()
    .map((t) => t.key)
    .join(", ");
  return (
    <div className="grid gap-6">
      <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-lime-50/70">
        <CardHeader>
          <CardTitle className="text-emerald-800">Create Package</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-2">
          <div>
            <label className="text-sm mb-1 block text-emerald-800">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-emerald-800">
              Includes
            </label>
            <Input
              placeholder="keys comma-separated"
              value={includes}
              onChange={(e) => setIncludes(e.target.value)}
              className="bg-white"
            />
          </div>
          <div className="md:col-span-1">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                if (!name) return;
                addPackage({
                  name,
                  includes: includes
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                });
                location.reload();
              }}
            >
              Add Package
            </Button>
          </div>
          <div className="md:col-span-3 text-xs text-slate-500">
            Available therapy keys: {therapyKeys}
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {pkgs.map((pkg) => (
          <Card key={pkg.id} className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800">{pkg.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Includes: {pkg.includes.join(", ")}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
