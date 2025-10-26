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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const [loginPhone, setLoginPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [showLoginOtp, setShowLoginOtp] = useState(false);

  const [registerPhone, setRegisterPhone] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerOtp, setRegisterOtp] = useState("");
  const [showRegisterOtp, setShowRegisterOtp] = useState(false);

  const handleSendLoginOtp = () => {
    if (!loginPhone || loginPhone.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setShowLoginOtp(true);
    toast.success("OTP sent to your mobile number");
  };

  const handleLogin = () => {
    if (!loginOtp || loginOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    toast.success("Login successful!");
    router.push("/dashboard");
  };

  const handleSendRegisterOtp = () => {
    if (!registerPhone || registerPhone.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!registerName || registerName.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    setShowRegisterOtp(true);
    toast.success("OTP sent to your mobile number");
  };

  const handleRegister = () => {
    if (!registerOtp || registerOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    toast.success("Registration successful!");
    router.push("/onboarding");
  };

  return (
    <>
      {" "}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/50 px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Welcome to ArogyaOilSave
            </CardTitle>
            <CardDescription className="text-center">
              Login or create an account to start tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-phone">Mobile Number</Label>
                  <Input
                    id="login-phone"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    maxLength={10}
                  />
                </div>

                {!showLoginOtp ? (
                  <Button onClick={handleSendLoginOtp} className="w-full">
                    Send OTP
                  </Button>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="login-otp">Enter OTP</Label>
                      <Input
                        id="login-otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={loginOtp}
                        onChange={(e) => setLoginOtp(e.target.value)}
                        maxLength={6}
                      />
                    </div>
                    <Button onClick={handleLogin} className="w-full">
                      Verify & Login
                    </Button>
                  </>
                )}
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Mobile Number</Label>
                  <Input
                    id="register-phone"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={registerPhone}
                    onChange={(e) => setRegisterPhone(e.target.value)}
                    maxLength={10}
                  />
                </div>

                {!showRegisterOtp ? (
                  <Button onClick={handleSendRegisterOtp} className="w-full">
                    Send OTP
                  </Button>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="register-otp">Enter OTP</Label>
                      <Input
                        id="register-otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={registerOtp}
                        onChange={(e) => setRegisterOtp(e.target.value)}
                        maxLength={6}
                      />
                    </div>
                    <Button onClick={handleRegister} className="w-full">
                      Verify & Register
                    </Button>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
