import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Share2, TrendingUp, CheckCircle2, XCircle, ArrowLeft, Home } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import gpuImage from "@/assets/product-gpu.jpg";
import cpuImage from "@/assets/product-cpu.jpg";
import ramImage from "@/assets/product-ram.jpg";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Mock product data with detailed specs
  const products: Record<string, any> = {
    "1": {
      id: "1",
      name: "NVIDIA GeForce RTX 4090 Gaming Graphics Card",
      price: 1599.99,
      image: gpuImage,
      category: "Graphics Cards",
      rating: 4.8,
      reviews: 234,
      inStock: true,
      description: "The ultimate gaming GPU with unprecedented performance. Features 24GB GDDR6X memory, advanced ray tracing, and DLSS 3 technology for the most demanding games and creative applications.",
      specs: {
        "GPU Architecture": "Ada Lovelace",
        "CUDA Cores": "16384",
        "Memory": "24GB GDDR6X",
        "Memory Bus": "384-bit",
        "Base Clock": "2.23 GHz",
        "Boost Clock": "2.52 GHz",
        "TDP": "450W",
        "Outputs": "3x DisplayPort 1.4a, 1x HDMI 2.1",
        "Recommended PSU": "850W",
        "Dimensions": "304 x 137 x 61 mm",
      },
      features: [
        "Ray Tracing Cores (3rd Gen)",
        "Tensor Cores (4th Gen)",
        "NVIDIA DLSS 3",
        "NVIDIA Reflex",
        "Resizable BAR Support",
        "PCIe 4.0 Support",
        "RGB Lighting",
        "Triple Fan Cooling System",
      ],
      compatibility: [
        "Intel 12th Gen or newer / AMD Ryzen 5000 series or newer",
        "Minimum 16GB RAM recommended",
        "850W PSU minimum",
        "2x 8-pin PCIe power connectors",
        "Windows 10/11 64-bit",
      ],
    },
    "2": {
      id: "2",
      name: "Intel Core i9-14900K Processor",
      price: 589.99,
      image: cpuImage,
      category: "Processors",
      rating: 4.9,
      reviews: 189,
      inStock: true,
      description: "Flagship desktop processor with hybrid architecture. Features 24 cores (8 P-cores + 16 E-cores) delivering exceptional gaming and content creation performance.",
      specs: {
        "Cores": "24 (8P + 16E)",
        "Threads": "32",
        "Base Clock": "3.2 GHz",
        "Max Turbo": "6.0 GHz",
        "Cache": "36MB Intel Smart Cache",
        "TDP": "125W (Base) / 253W (Turbo)",
        "Socket": "LGA 1700",
        "Memory Support": "DDR5-5600, DDR4-3200",
        "Max Memory": "192GB",
        "PCIe": "Gen 5.0 x16, Gen 4.0 x4",
      },
      features: [
        "Intel Thread Director",
        "Intel Turbo Boost Max 3.0",
        "Overclocking Support",
        "Integrated UHD Graphics 770",
        "Intel Deep Learning Boost",
        "Thunderbolt 4 Support",
        "Wi-Fi 6E Support",
        "AVX-512 Instructions",
      ],
      compatibility: [
        "Requires Z790 or B760 chipset motherboard",
        "DDR5 or DDR4 memory support",
        "Cooler not included - 240mm AIO or high-end air cooler recommended",
        "Windows 10/11 64-bit",
      ],
    },
    "3": {
      id: "3",
      name: "Corsair Vengeance RGB DDR5 32GB (2x16GB)",
      price: 149.99,
      image: ramImage,
      category: "Memory",
      rating: 4.7,
      reviews: 412,
      inStock: true,
      description: "High-performance DDR5 memory with stunning RGB lighting. Push your system to its limits with exceptional speeds and tight latencies optimized for Intel and AMD platforms.",
      specs: {
        "Capacity": "32GB (2x16GB)",
        "Type": "DDR5 SDRAM",
        "Speed": "6000 MHz",
        "Latency": "CL36-36-36-76",
        "Voltage": "1.35V",
        "Form Factor": "DIMM 288-pin",
        "Heat Spreader": "Aluminum",
        "RGB": "10-zone RGB lighting",
        "Intel XMP": "3.0 Support",
        "AMD EXPO": "Support",
      },
      features: [
        "On-die ECC for reliability",
        "Custom PCB for signal quality",
        "Tight response times",
        "iCUE software control",
        "Dynamic RGB lighting effects",
        "Lifetime warranty",
        "Tested for compatibility",
        "Low-profile heat spreader",
      ],
      compatibility: [
        "Intel Z790, Z690, B760, B660 motherboards",
        "AMD X670, B650 motherboards",
        "Requires DDR5-compatible CPU",
        "Compatible with Corsair iCUE software",
      ],
    },
  };

  const product = products[productId || "1"] || products["1"];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-3 mb-8 pt-20">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="border-primary/50 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            variant="outline"
            asChild
            className="border-primary/50 hover:bg-primary/10"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden border border-border">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-secondary text-secondary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {product.inStock ? (
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-semibold">In Stock - Ships within 24 hours</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-destructive mb-4">
                  <XCircle className="h-5 w-5" />
                  <span className="font-semibold">Out of Stock</span>
                </div>
              )}

              <p className="text-5xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="flex-1" 
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Bestseller in {product.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">30-day return policy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">Expert support from Teo's team</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <Tabs defaultValue="specs" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]: [string, string]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border">
                      <span className="font-semibold text-foreground">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {product.compatibility.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {[
                    { user: "TechEnthusiast42", rating: 5, comment: "Incredible performance! Exactly what I needed for my build.", date: "2 weeks ago" },
                    { user: "GamerPro", rating: 5, comment: "Worth every penny. Runs all my games at max settings flawlessly.", date: "1 month ago" },
                    { user: "ContentCreator", rating: 4, comment: "Great for video editing and 3D rendering. Highly recommended.", date: "1 month ago" },
                  ].map((review: { user: string; rating: number; comment: string; date: string }, index: number) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-secondary text-secondary" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-foreground">{review.user}</span>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
