import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

const AIFeature = () => {
  return (
    <Card className="border-accent/50 bg-linear-gradient(to bottom, #f0f0f0, #e0e0e0)">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <CardTitle>AI-Powered Suggestion</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Based on your consumption pattern, we recommend trying{" "}
          <strong className="text-foreground">Baked Aloo Tikki</strong> instead
          of fried snacks. This can save you up to{" "}
          <strong className="text-primary">15g of oil</strong> per serving while
          maintaining authentic taste!
        </p>
        <Link href="/recipes">
          <Button variant="outline" className="w-full">
            View Recipe
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AIFeature;
