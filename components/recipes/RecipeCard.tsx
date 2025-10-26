import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface RecipeCardProps {
  title: string;
  image: string;
  region: string;
  oilSavings: string;
}

const RecipeCard = ({ title, image, region, oilSavings }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <Badge variant="secondary" className="ml-2 flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            Low Oil
          </Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{region}</span>
          <span className="font-medium text-success">-{oilSavings}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
