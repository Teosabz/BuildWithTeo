import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import CategoryShowcase from "@/components/CategoryShowcase";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Monitor, HardDrive, Zap, Laptop, Keyboard, Headphones, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-pc-setup.jpg";
import gpuImage from "@/assets/product-gpu.jpg";
import cpuImage from "@/assets/product-cpu.jpg";
import ramImage from "@/assets/product-ram.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import headsetImage from "@/assets/product-headset.jpg";
import monitorImage from "@/assets/product-monitor.jpg";
import mouseImage from "@/assets/product-mouse.jpg";
import microphoneImage from "@/assets/product-microphone.jpg";
import keyboardRgb from "@/assets/keyboard-rgb.jpg";
import headsetWireless from "@/assets/headset-wireless.jpg";
import laptopCategoryImage from "@/assets/category-laptops.jpg";
import prebuiltCategoryImage from "@/assets/category-prebuilt.jpg";
import peripheralsCategoryImage from "@/assets/category-peripherals.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "NVIDIA GeForce RTX 4090 Gaming Graphics Card",
      price: 1599.99,
      image: gpuImage,
      category: "Graphics Cards",
      rating: 4.8,
      inStock: true,
    },
    {
      id: "2",
      name: "Intel Core i9-14900K Processor",
      price: 589.99,
      image: cpuImage,
      category: "Processors",
      rating: 4.9,
      inStock: true,
    },
    {
      id: "3",
      name: "Corsair Vengeance RGB DDR5 32GB (2x16GB)",
      price: 149.99,
      image: ramImage,
      category: "Memory",
      rating: 4.7,
      inStock: true,
    },
    {
      id: "4",
      name: "NVIDIA GeForce RTX 4080 Gaming Graphics Card",
      price: 1199.99,
      image: gpuImage,
      category: "Graphics Cards",
      rating: 4.7,
      inStock: false,
    },
  ];

  const peripheralProducts = [
    {
      id: "5",
      name: "Mechanical RGB Gaming Keyboard - Blue Switches",
      price: 129.99,
      image: keyboardRgb,
      category: "Keyboards",
      rating: 4.6,
      inStock: true,
    },
    {
      id: "6",
      name: "Premium Gaming Headset with 7.1 Surround Sound",
      price: 89.99,
      image: headsetImage,
      category: "Audio",
      rating: 4.8,
      inStock: true,
    },
    {
      id: "7",
      name: "34\" Curved Ultrawide Gaming Monitor - 144Hz",
      price: 499.99,
      image: monitorImage,
      category: "Monitors",
      rating: 4.9,
      inStock: true,
    },
    {
      id: "8",
      name: "Wireless Gaming Mouse - 16000 DPI",
      price: 79.99,
      image: mouseImage,
      category: "Mice",
      rating: 4.7,
      inStock: true,
    },
  ];

  const categories = [
    { name: "Processors", icon: Cpu, count: 125 },
    { name: "Graphics Cards", icon: Monitor, count: 89 },
    { name: "Storage", icon: HardDrive, count: 210 },
    { name: "Power Supplies", icon: Zap, count: 156 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl pt-20 animate-slide-up">
            <Badge className="mb-4 bg-primary text-primary-foreground">Expert PC Building Since Day One</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your PC. <br />
              Your Build. <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                With Teo.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              From complete gaming rigs to individual components, laptops to peripherals. Everything you need to build, upgrade, or optimize your ultimate PC setup.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero">
                Start Building
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="heroOutline">
                Browse Systems
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-card transition-all cursor-pointer group"
              >
                <category.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PC Systems Showcase */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete PC Systems</h2>
            <p className="text-muted-foreground text-lg">
              Pre-built gaming rigs, workstations, and laptops ready to ship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CategoryShowcase
              title="Gaming PCs"
              description="High-performance prebuilt systems optimized for gaming"
              icon={Monitor}
              image={prebuiltCategoryImage}
              slug="gaming-pcs"
            />
            <CategoryShowcase
              title="Gaming Laptops"
              description="Powerful portable gaming with RGB and high refresh rates"
              icon={Laptop}
              image={laptopCategoryImage}
              slug="laptops"
            />
            <CategoryShowcase
              title="Workstations"
              description="Professional content creation and productivity systems"
              icon={Cpu}
              image={prebuiltCategoryImage}
              slug="workstation-pcs"
            />
          </div>

          <div className="text-center">
            <Button size="lg" variant="heroOutline">
              View All Systems
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20" id="components">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Core Components</h2>
            <p className="text-muted-foreground text-lg">
              Build your perfect PC with premium CPUs, GPUs, RAM, and more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="mt-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Motherboards</h4>
                  <p className="text-sm text-muted-foreground">Intel & AMD | ATX, mATX, ITX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cooling</h4>
                  <p className="text-sm text-muted-foreground">AIOs, Air Coolers, Thermal Paste</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">PC Cases</h4>
                  <p className="text-sm text-muted-foreground">All form factors & designs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">PSUs</h4>
                  <p className="text-sm text-muted-foreground">450W–1600W | 80+ Certified</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Browse All Components
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Peripherals Section */}
      <section className="py-20 bg-muted/50" id="peripherals">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gaming Peripherals</h2>
            <p className="text-muted-foreground text-lg">
              Keyboards, mice, headsets, monitors, and accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <CategoryShowcase
              title="Input & Audio"
              description="Mechanical keyboards, gaming mice, premium headsets & microphones"
              icon={Keyboard}
              image={peripheralsCategoryImage}
              slug="keyboards"
            />
            <CategoryShowcase
              title="Display & Output"
              description="High refresh rate monitors, 4K displays, ultrawide screens & cables"
              icon={Monitor}
              image={monitorImage}
              slug="monitors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {peripheralProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Shop All Peripherals
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-muted-foreground text-lg">
              Let Teo and the team handle the technical stuff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-8 hover:border-primary/50 hover:shadow-card transition-all">
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Build Service</h3>
              <p className="text-muted-foreground mb-4">
                Choose your parts and we'll build, test, and ship your dream PC
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary/50 hover:shadow-card transition-all">
              <Monitor className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Compatibility Check</h3>
              <p className="text-muted-foreground mb-4">
                Free verification that all your components work together perfectly
              </p>
              <Button variant="outline" className="w-full">Check Parts</Button>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary/50 hover:shadow-card transition-all">
              <Cpu className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Upgrade Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Get expert advice on the best upgrades for your existing system
              </p>
              <Button variant="outline" className="w-full">Get Advice</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Laptop Components Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Laptop Upgrades & Accessories</h2>
            <p className="text-muted-foreground text-lg">
              Upgrade RAM, storage, cooling, and more for your laptop
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
              <h4 className="font-semibold text-foreground mb-2">Laptop RAM</h4>
              <p className="text-sm text-muted-foreground">DDR4 & DDR5 SO-DIMMs</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
              <h4 className="font-semibold text-foreground mb-2">Laptop SSDs</h4>
              <p className="text-sm text-muted-foreground">NVMe M.2 upgrades</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
              <h4 className="font-semibold text-foreground mb-2">Cooling Pads</h4>
              <p className="text-sm text-muted-foreground">Keep temps down</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all">
              <h4 className="font-semibold text-foreground mb-2">Docking Stations</h4>
              <p className="text-sm text-muted-foreground">USB-C hubs & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-glow-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream PC?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Over 1000+ products in stock. Expert guidance. Fast shipping. Unbeatable support.
          </p>
          <Button size="lg" variant="hero">
            Start Shopping Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}
