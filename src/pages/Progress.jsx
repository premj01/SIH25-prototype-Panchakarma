import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addProgressEntry, listProgress } from "@/lib/storage";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useState } from "react";

const sample = [
  { day: "D1", score: 20 },
  { day: "D3", score: 35 },
  { day: "D5", score: 50 },
  { day: "D7", score: 65 },
  { day: "D10", score: 78 },
];

export default function Progress() {
  const [score, setScore] = useState(70);
  const [note, setNote] = useState("");
  const entries = listProgress();
  function submit() {
    addProgressEntry({
      score: Number(score) || 0,
      note,
      at: new Date().toISOString(),
    });
    location.reload();
  }
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="text-emerald-800">Recovery Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 grid md:grid-cols-3 gap-2 text-sm">
          <Input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Score (0-100)"
          />
          <Input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note"
          />
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={submit}
          >
            Add Entry
          </Button>
        </div>
        <div className="h-64 bg-emerald-50/40 rounded-md p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={
                entries.length
                  ? entries.map((e, i) => ({
                      day: `E${i + 1}`,
                      score: e.score,
                    }))
                  : sample
              }
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#059669"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="h-56 bg-emerald-50/40 rounded-md p-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={
                  entries.length
                    ? entries.map((e, i) => ({ idx: i + 1, score: e.score }))
                    : sample.map((s, i) => ({ idx: i + 1, score: s.score }))
                }
                margin={{ left: 12, right: 12 }}
              >
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="idx" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="h-56 bg-emerald-50/40 rounded-md p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={(entries.length ? entries : sample)
                  .slice(-6)
                  .map((e, i, arr) => ({
                    label: `E${
                      (entries.length ? entries.length : sample.length) -
                      arr.length +
                      i +
                      1
                    }`,
                    score: e.score,
                  }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="text-sm text-slate-600 mt-4">
          Visual example of tracking improvements based on patient feedback and
          responses.
        </div>
      </CardContent>
    </Card>
  );
}
