import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

const HealthRisk = () => {
  const weeklyAverage = 25; // grams per day
  const recommended = 30;

  const getRiskLevel = () => {
    if (weeklyAverage <= recommended) return "low";
    if (weeklyAverage <= recommended * 1.3) return "medium";
    return "high";
  };

  const riskLevel = getRiskLevel();

  const riskConfig = {
    low: {
      color: "text-success",
      bgColor: "bg-success/10",
      icon: CheckCircle,
      label: "Low Risk",
      message: "You're doing great! Keep it up.",
    },
    medium: {
      color: "text-warning",
      bgColor: "bg-warning/10",
      icon: AlertTriangle,
      label: "Moderate Risk",
      message: "Consider reducing oil intake slightly.",
    },
    high: {
      color: "text-danger",
      bgColor: "bg-danger/10",
      icon: AlertCircle,
      label: "High Risk",
      message: "Your oil intake is above recommendations.",
    },
  };

  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Weekly Risk</CardTitle>
        <CardDescription>Based on last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div
          className={`flex h-32 w-32 items-center justify-center rounded-full ${config.bgColor}`}
        >
          <Icon className={`h-16 w-16 ${config.color}`} />
        </div>
        <div className="text-center">
          <p className={`text-2xl font-bold ${config.color}`}>{config.label}</p>
          <p className="mt-2 text-sm text-muted-foreground">{config.message}</p>
        </div>
        <div className="w-full rounded-lg bg-muted p-3 text-center">
          <p className="text-sm text-muted-foreground">Weekly Average</p>
          <p className="text-lg font-semibold">{weeklyAverage}g/day</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthRisk;
