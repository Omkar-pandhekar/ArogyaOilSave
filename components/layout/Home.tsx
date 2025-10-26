import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  UtensilsCrossed,
  Award,
  TrendingDown,
  Heart,
  Users,
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-end))] py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Healthier You, Stronger India. Start with Your Next Meal.
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Join millions of Indians tracking their edible oil consumption.
              Build healthier habits, discover delicious low-oil recipes, and
              contribute to a healthier nation.
            </p>
            <Link href="/login">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Start Tracking Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* The Problem */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      40% of Indian adults
                    </strong>{" "}
                    are at risk of cardiovascular disease due to excessive oil
                    consumption.
                  </p>
                  <p>
                    Indians consume{" "}
                    <strong className="text-foreground">
                      12kg+ of edible oil per capita annually
                    </strong>{" "}
                    – well above WHO recommendations.
                  </p>
                  <p>
                    Healthcare costs from diet-related diseases cost India{" "}
                    <strong className="text-foreground">
                      ₹5.8 trillion annually
                    </strong>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* The Solution */}
            <Card className="border-2 border-primary/50 bg-primary/5">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">Our Solution</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Track effortlessly
                    </strong>{" "}
                    – Log your daily oil intake in seconds with AI-powered meal
                    recognition.
                  </p>
                  <p>
                    <strong className="text-foreground">Cook smarter</strong> –
                    Access 1000+ authentic Indian recipes optimized for low-oil
                    cooking.
                  </p>
                  <p>
                    <strong className="text-foreground">Stay motivated</strong>{" "}
                    – Earn rewards, compete with friends, and join a community
                    of health-conscious Indians.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why ArogyaOilSave?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful features designed to make healthy eating simple and
              sustainable
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold">AI-Powered Tracking</h3>
                <p className="text-muted-foreground">
                  Snap a photo of your meal and let our AI instantly estimate
                  oil content. No manual calculations needed.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <UtensilsCrossed className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  Healthy Indian Recipes
                </h3>
                <p className="text-muted-foreground">
                  Discover delicious regional recipes from every corner of India
                  – all optimized for minimal oil without compromising taste.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Rewards & Community</h3>
                <p className="text-muted-foreground">
                  Build streaks, earn points, unlock badges, and connect with
                  thousands of Indians on the same health journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Users className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Join Over 2 Million Indians
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Take the first step towards a healthier lifestyle. Register now and
            start your journey to better health today.
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Register for Free
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
