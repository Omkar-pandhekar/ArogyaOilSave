"use client";

import DailyTracker from "@/components/dashboard/DailyTracker";
import HealthRisk from "@/components/dashboard/HealthRisk";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import Gamification from "@/components/dashboard/Gamification";
import AIFeature from "@/components/dashboard/AIFeature";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress and stay healthy
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DailyTracker />
        </div>
        <div>
          <HealthRisk />
        </div>
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>
        <div>
          <Gamification />
        </div>
        <div className="lg:col-span-3">
          <AIFeature />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
