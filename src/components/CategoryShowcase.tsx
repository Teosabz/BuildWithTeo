import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryShowcaseProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  slug?: string;
}

const CategoryShowcase = ({ title, description, icon: Icon, image, slug }: CategoryShowcaseProps) => {
  const content = (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-card cursor-pointer">
      <CardContent className="p-0">
        {image && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (slug) {
    return <Link to={`/categories/${slug}`}>{content}</Link>;
  }

  return content;
};

export default CategoryShowcase;
