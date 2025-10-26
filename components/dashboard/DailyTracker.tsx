import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const DailyTracker = () => {
  const [consumed, setConsumed] = useState(15);
  const recommended = 30;
  const percentage = (consumed / recommended) * 100;

  const [mealType, setMealType] = useState("");
  const [oilAmount, setOilAmount] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddEntry = () => {
    if (!mealType || !oilAmount) {
      toast.error("Please fill all fields");
      return;
    }
    const newConsumed = consumed + parseFloat(oilAmount);
    setConsumed(newConsumed);
    toast.success("Entry added successfully!");
    setOpen(false);
    setMealType("");
    setOilAmount("");
  };

  const getProgressColor = () => {
    if (percentage <= 50) return "bg-success";
    if (percentage <= 80) return "bg-warning";
    return "bg-danger";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Today&apos;s Oil Consumption</CardTitle>
            <CardDescription>Track your daily intake</CardDescription>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Entry
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Oil Consumption</DialogTitle>
                <DialogDescription>
                  Log your meal and oil consumption
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meal-type">Meal Type</Label>
                  <Select value={mealType} onValueChange={setMealType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select meal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oil-amount">Oil Amount (grams)</Label>
                  <Input
                    id="oil-amount"
                    type="number"
                    placeholder="Enter amount in grams"
                    value={oilAmount}
                    onChange={(e) => setOilAmount(e.target.value)}
                  />
                </div>
                <Button onClick={handleAddEntry} className="w-full">
                  Add Entry
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{consumed}g consumed</span>
            <span className="text-muted-foreground">
              {recommended}g recommended
            </span>
          </div>
          <Progress
            value={percentage}
            className={`h-4 ${getProgressColor()}`}
          />
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-2xl font-bold">
            {Math.max(0, recommended - consumed)}g
          </p>
          <p className="text-sm text-muted-foreground">
            {consumed <= recommended
              ? "remaining for today"
              : "over your limit"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyTracker;
