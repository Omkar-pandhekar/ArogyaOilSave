"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const Onboarding = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Step 1: Profile
  const [userType, setUserType] = useState("");

  // Step 2: Health Details
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [bmi, setBmi] = useState("");
  const [healthGoal, setHealthGoal] = useState("");

  // Step 3: Dietary Habits
  const [eatingOutFrequency, setEatingOutFrequency] = useState("");

  const handleNext = () => {
    if (step === 1 && !userType) {
      toast.error("Please select your user type");
      return;
    }
    if (step === 2 && (!age || !region || !bmi || !healthGoal)) {
      toast.error("Please fill all health details");
      return;
    }
    if (step === 3 && !eatingOutFrequency) {
      toast.error("Please select eating out frequency");
      return;
    }

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      toast.success("Profile setup complete!");
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      {" "}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/50 px-4 py-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Help us personalize your experience (Step {step} of {totalSteps})
            </CardDescription>
            <Progress value={(step / totalSteps) * 100} className="mt-4" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Your Profile */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-lg font-semibold">
                    What best describes you?
                  </Label>
                  <RadioGroup value={userType} onValueChange={setUserType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="household" id="household" />
                      <Label
                        htmlFor="household"
                        className="font-normal cursor-pointer"
                      >
                        Household (Individual/Family)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label
                        htmlFor="student"
                        className="font-normal cursor-pointer"
                      >
                        Student
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="working" id="working" />
                      <Label
                        htmlFor="working"
                        className="font-normal cursor-pointer"
                      >
                        Working Professional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="senior" id="senior" />
                      <Label
                        htmlFor="senior"
                        className="font-normal cursor-pointer"
                      >
                        Senior Citizen
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 2: Health Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North India</SelectItem>
                      <SelectItem value="south">South India</SelectItem>
                      <SelectItem value="east">East India</SelectItem>
                      <SelectItem value="west">West India</SelectItem>
                      <SelectItem value="central">Central India</SelectItem>
                      <SelectItem value="northeast">Northeast India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bmi">BMI (Optional)</Label>
                  <Input
                    id="bmi"
                    type="number"
                    step="0.1"
                    placeholder="Enter your BMI"
                    value={bmi}
                    onChange={(e) => setBmi(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="health-goal">Primary Health Goal</Label>
                  <Select value={healthGoal} onValueChange={setHealthGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your health goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="heart-health">Heart Health</SelectItem>
                      <SelectItem value="diabetes">
                        Diabetes Management
                      </SelectItem>
                      <SelectItem value="general">General Wellness</SelectItem>
                      <SelectItem value="fitness">Fitness & Energy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Dietary Habits */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-lg font-semibold">
                    How often do you eat out or order food?
                  </Label>
                  <RadioGroup
                    value={eatingOutFrequency}
                    onValueChange={setEatingOutFrequency}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="rarely" />
                      <Label
                        htmlFor="rarely"
                        className="font-normal cursor-pointer"
                      >
                        Rarely (Less than once a week)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-2" id="1-2" />
                      <Label
                        htmlFor="1-2"
                        className="font-normal cursor-pointer"
                      >
                        1-2 times a week
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-4" id="3-4" />
                      <Label
                        htmlFor="3-4"
                        className="font-normal cursor-pointer"
                      >
                        3-4 times a week
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label
                        htmlFor="daily"
                        className="font-normal cursor-pointer"
                      >
                        Almost Daily
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>
              <Button onClick={handleNext}>
                {step === totalSteps ? "Complete" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Onboarding;
