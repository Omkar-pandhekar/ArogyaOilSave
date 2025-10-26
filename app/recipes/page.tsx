"use client";

import { useState } from "react";
import RecipeCard from "@/components/recipes/RecipeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCuisine, setSelectedCuisine] = useState("all");

  const recipes = [
    {
      id: 1,
      title: "Baked Aloo Tikki",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
      region: "North Indian",
      oilSavings: "15g",
    },
    {
      id: 2,
      title: "Steamed Idli with Sambar",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
      region: "South Indian",
      oilSavings: "12g",
    },
    {
      id: 3,
      title: "Grilled Paneer Tikka",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
      region: "North Indian",
      oilSavings: "18g",
    },
    {
      id: 4,
      title: "Dhokla (Steamed)",
      image:
        "https://images.unsplash.com/photo-1626074353765-517a65edd30b?w=800&q=80",
      region: "Gujarati",
      oilSavings: "10g",
    },
    {
      id: 5,
      title: "Tandoori Roti with Dal",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
      region: "North Indian",
      oilSavings: "8g",
    },
    {
      id: 6,
      title: "Moong Dal Cheela",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
      region: "North Indian",
      oilSavings: "14g",
    },
  ];

  const regions = [
    "All",
    "North Indian",
    "South Indian",
    "Gujarati",
    "Bengali",
    "Punjabi",
  ];
  const cuisines = [
    "All",
    "Low-Oil",
    "Oil-Free",
    "Baked",
    "Steamed",
    "Grilled",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Healthy Indian Recipes</h1>
          <p className="text-muted-foreground">
            Discover delicious low-oil recipes from across India
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <p className="mb-2 text-sm font-semibold">Region:</p>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={
                    selectedRegion === region.toLowerCase()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedRegion(region.toLowerCase())}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">Cuisine Type:</p>
            <div className="flex flex-wrap gap-2">
              {cuisines.map((cuisine) => (
                <Button
                  key={cuisine}
                  variant={
                    selectedCuisine === cuisine.toLowerCase()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCuisine(cuisine.toLowerCase())}
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
