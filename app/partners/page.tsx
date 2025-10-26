"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, TrendingUp, Award, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Partners = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName || !contactName || !email || !phone) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Application submitted! We'll contact you soon.");
    setRestaurantName("");
    setContactName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Join the &apos;Low Oil Certified&apos; Program
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Showcase your commitment to health. Attract conscious diners. Get
            blockchain-verified certification.
          </p>
          <Button size="lg" variant="secondary">
            Register Your Restaurant
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Partner with ArogyaOilSave?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  Attract Health-Conscious Diners
                </h3>
                <p className="text-muted-foreground">
                  Join a network trusted by 2M+ users actively seeking healthier
                  dining options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  Get Blockchain-Verified
                </h3>
                <p className="text-muted-foreground">
                  Display a tamper-proof certificate that customers can verify
                  via QR code.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Feature on Food Apps</h3>
                <p className="text-muted-foreground">
                  Get highlighted on Swiggy, Zomato, and other platforms with
                  our special badge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Apply & Get Onboarded
                </h3>
                <p className="text-muted-foreground">
                  Fill out the registration form. Our team will verify your
                  restaurant details and schedule a brief consultation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Declare Your Oil Usage
                </h3>
                <p className="text-muted-foreground">
                  Share your cooking methods and oil consumption metrics.
                  We&apos;ll help you optimize where possible.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Get Your Certified Badge
                </h3>
                <p className="text-muted-foreground">
                  Receive your blockchain-verified certificate, QR code, and
                  marketing materials to display proudly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="text-2xl font-bold">Register Your Restaurant</h2>
                <p className="text-muted-foreground">
                  Start your journey towards Low Oil Certification
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input
                    id="restaurant-name"
                    placeholder="Enter your restaurant name"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-name">Contact Person Name</Label>
                  <Input
                    id="contact-name"
                    placeholder="Enter contact person name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Partners;
