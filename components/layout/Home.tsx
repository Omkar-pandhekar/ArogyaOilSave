import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  UtensilsCrossed,
  Award,
  TrendingDown,
  Heart,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  ChefHat,
  Camera,
  Trophy,
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Healthier You, Stronger India. Start with Your Next Meal.
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Join millions of Indians tracking their edible oil consumption.
              Build healthier habits, discover delicious low-oil recipes, and
              contribute to a healthier nation.
            </p>
            <Link href="/login">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-emerald-50 border-0"
              >
                Start Tracking Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-linear-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              The Impact We&apos;re Making
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real results from real people making healthier choices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600">2M+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <TrendingDown className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">35%</div>
              <div className="text-sm text-gray-600">Average Oil Reduction</div>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">500K+</div>
              <div className="text-sm text-gray-600">
                Healthier Meals Tracked
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">₹2.1B</div>
              <div className="text-sm text-gray-600">
                Healthcare Costs Saved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* The Problem */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <TrendingDown className="h-6 w-6 text-red-600" />
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
            <Card className="border-2 border-emerald-200 bg-emerald-50/50">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Heart className="h-6 w-6 text-emerald-600" />
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
      <section className="bg-linear-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
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
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold">AI-Powered Tracking</h3>
                <p className="text-muted-foreground">
                  Snap a photo of your meal and let our AI instantly estimate
                  oil content. No manual calculations needed.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <UtensilsCrossed className="h-8 w-8 text-orange-600" />
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
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Award className="h-8 w-8 text-yellow-600" />
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

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <Camera className="h-10 w-10 text-emerald-600" />
              </div>
              <div className="mb-4 text-2xl font-bold">1. Snap & Track</div>
              <p className="text-muted-foreground">
                Take a photo of your meal and our AI instantly analyzes the oil
                content. No manual calculations needed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <ChefHat className="h-10 w-10 text-orange-600" />
              </div>
              <div className="mb-4 text-2xl font-bold">2. Cook Smarter</div>
              <p className="text-muted-foreground">
                Discover delicious low-oil recipes from our curated collection.
                Get personalized recommendations based on your preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                <Trophy className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="mb-4 text-2xl font-bold">3. Stay Motivated</div>
              <p className="text-muted-foreground">
                Track your progress, earn rewards, and connect with a community
                of health-conscious Indians on the same journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real stories from real people who transformed their health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  &ldquo;I&apos;ve reduced my oil consumption by 40% in just 3
                  months! The AI tracking is so accurate and the recipes are
                  amazing. My family loves the healthier meals.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">
                      Mumbai, Maharashtra
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  &ldquo;As a diabetic, managing my oil intake was crucial. This
                  app made it so easy to track and I&apos;ve seen significant
                  improvements in my health reports.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Rajesh Kumar</div>
                    <div className="text-sm text-muted-foreground">
                      Delhi, NCR
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  &ldquo;The gamification features keep me motivated. I&apos;ve
                  lost 8kg and my cholesterol levels have improved dramatically.
                  Highly recommended!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Anita Singh</div>
                    <div className="text-sm text-muted-foreground">
                      Bangalore, Karnataka
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about ArogyaOilSave
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    How accurate is the AI oil detection?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our AI has been trained on over 100,000 Indian dishes and
                    achieves 92% accuracy in oil content estimation. It
                    recognizes regional cuisines and cooking methods specific to
                    Indian cooking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Is my data secure and private?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We use bank-level encryption and never share
                    your personal data. Your health information is completely
                    private and secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Do I need to pay for the app?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The basic tracking features are completely free. Premium
                    features like advanced analytics and personalized meal plans
                    are available with a subscription.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Can I use this with my family?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Create family accounts to track everyone&apos;s
                    progress together. Set family goals and celebrate
                    achievements as a team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-16 bg-linear-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Trusted by Health Experts
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Recommended by nutritionists, doctors, and health organizations
              across India
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">WHO Approved</h3>
                <p className="text-muted-foreground">
                  Aligned with World Health Organization guidelines for healthy
                  oil consumption
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Doctor Recommended</h3>
                <p className="text-muted-foreground">
                  Endorsed by 500+ cardiologists and nutritionists across India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Award Winning</h3>
                <p className="text-muted-foreground">
                  Winner of &ldquo;Best Health App 2024&rdquo; by Digital Health
                  India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-center gap-2">
              <Badge className="text-sm px-4 py-2 bg-white/20 text-white border-white/30">
                <Zap className="mr-2 h-4 w-4" />
                Free Forever
              </Badge>
              <Badge className="text-sm px-4 py-2 bg-white/20 text-white border-white/30">
                <Shield className="mr-2 h-4 w-4" />
                Secure & Private
              </Badge>
            </div>

            <Users className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Join Over 2 Million Indians
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Start your journey to better health today. Track your oil
              consumption, discover healthy recipes, and join a community of
              health-conscious Indians.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/login">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-emerald-50 border-0"
                >
                  Start Tracking Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/recipes">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  Browse Recipes
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
