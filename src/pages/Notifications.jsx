import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listTherapies, getPrefs, setPrefs } from "@/lib/storage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Notifications() {
  const therapies = listTherapies();
  const prefs = getPrefs();
  function toggle(channel) {
    setPrefs({
      ...prefs,
      channels: { ...prefs.channels, [channel]: !prefs.channels[channel] },
    });
    location.reload();
  }
  return (
    <div className="space-y-6">
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="text-emerald-800">
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 text-sm">
          <button
            className={`px-3 py-1 rounded border ${
              prefs.channels.inapp ? "bg-emerald-600 text-white" : "bg-white"
            }`}
            onClick={() => toggle("inapp")}
          >
            In‑App
          </button>
          <button
            className={`px-3 py-1 rounded border ${
              prefs.channels.sms ? "bg-emerald-600 text-white" : "bg-white"
            }`}
            onClick={() => toggle("sms")}
          >
            SMS
          </button>
          <button
            className={`px-3 py-1 rounded border ${
              prefs.channels.email ? "bg-emerald-600 text-white" : "bg-white"
            }`}
            onClick={() => toggle("email")}
          >
            Email
          </button>
        </CardContent>
      </Card>
      {therapies.map((t) => (
        <Card key={t.key} className="border-emerald-100">
          <CardHeader>
            <CardTitle className="text-emerald-800">
              {t.name} Precautions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border bg-emerald-50/50 p-3">
                <div className="font-medium text-emerald-800 mb-2">
                  Pre-procedure
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                  {t.precautionsPre.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border bg-lime-50/50 p-3">
                <div className="font-medium text-emerald-800 mb-2">
                  Post-procedure
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                  {t.precautionsPost.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-4">
              In production, reminders would be sent via in-app, SMS, or email.
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
