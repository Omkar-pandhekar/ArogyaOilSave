import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";

const WeeklyChart = () => {
  const data = [
    { day: "Mon", intake: 28, limit: 30 },
    { day: "Tue", intake: 32, limit: 30 },
    { day: "Wed", intake: 25, limit: 30 },
    { day: "Thu", intake: 29, limit: 30 },
    { day: "Fri", intake: 35, limit: 30 },
    { day: "Sat", intake: 22, limit: 30 },
    { day: "Sun", intake: 24, limit: 30 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Consumption Trends</CardTitle>
        <CardDescription>Your oil intake over the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis
              label={{ value: "Grams", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <ReferenceLine
              y={30}
              stroke="hsl(var(--primary))"
              strokeDasharray="3 3"
              label="Recommended"
            />
            <Bar
              dataKey="intake"
              fill="hsl(var(--accent))"
              name="Daily Intake (g)"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyChart;
