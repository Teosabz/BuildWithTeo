import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id?: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  inStock?: boolean;
}

const ProductCard = ({ id = "1", name, price, image, category, rating = 4.5, inStock = true }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image, category });
  };
  return (
    <Link to={`/products/${id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-card hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!inStock && (
          <Badge className="absolute top-2 right-2 bg-destructive">
            Out of Stock
          </Badge>
        )}
        {inStock && (
          <Badge className="absolute top-2 right-2 bg-secondary">
            In Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          <span className="text-sm text-muted-foreground">{rating}</span>
        </div>
        <p className="text-2xl font-bold text-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          variant="default"
          disabled={!inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
