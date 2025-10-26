import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flame, Trophy } from "lucide-react";

const Gamification = () => {
  const streak = 5;
  const points = 1250;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
        <CardDescription>Keep up the momentum!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Flame className="h-8 w-8 text-secondary" />
          </div>
          <div>
            <p className="text-3xl font-bold">{streak} Days</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold">{points.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Points</p>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-4">
          <p className="text-sm font-semibold">Next Milestone</p>
          <p className="text-xs text-muted-foreground">
            Reach 7-day streak for a special badge!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Gamification;
