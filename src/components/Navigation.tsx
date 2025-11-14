import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              BuildWithTeo
            </h1>
            <div className="hidden lg:flex items-center gap-6">
              {/* PC Systems Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  PC Systems <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border z-[100]">
                  <DropdownMenuLabel>Full Systems</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/gaming-pcs" className="cursor-pointer">Prebuilt Gaming PCs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/office-pcs" className="cursor-pointer">Office PCs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/workstation-pcs" className="cursor-pointer">Workstation PCs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/mini-pcs" className="cursor-pointer">Mini PCs & HTPCs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/categories/laptops" className="cursor-pointer">Gaming Laptops</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/laptops" className="cursor-pointer">Business Laptops</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/laptops" className="cursor-pointer">Ultrabooks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-primary font-semibold cursor-pointer">Custom Build Service</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Components Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  Components <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border z-[100]">
                  <DropdownMenuLabel>Core Components</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/processors" className="cursor-pointer">Processors (CPUs)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/graphics-cards" className="cursor-pointer">Graphics Cards (GPUs)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Motherboards</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/memory" className="cursor-pointer">Memory (RAM)</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Storage (SSD/HDD)</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Power Supplies</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">PC Cases</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Cooling Systems</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Sound Cards</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Network Cards</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Capture Cards</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Peripherals Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  Peripherals <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border z-[100]">
                  <DropdownMenuLabel>Input & Audio</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/keyboards" className="cursor-pointer">Keyboards</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Mice & Mousepads</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Controllers & Joysticks</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/categories/audio" className="cursor-pointer">Headsets & Headphones</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Microphones</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Speakers</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Display</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/monitors" className="cursor-pointer">Gaming Monitors</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/categories/monitors" className="cursor-pointer">4K & Ultrawide Monitors</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Monitor Arms & Stands</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Accessories Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  Accessories <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border z-[100]">
                  <DropdownMenuItem>Cables & Adapters</DropdownMenuItem>
                  <DropdownMenuItem>Build Tools & Kits</DropdownMenuItem>
                  <DropdownMenuItem>Cable Management</DropdownMenuItem>
                  <DropdownMenuItem>RGB Controllers</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Laptop Upgrades</DropdownMenuItem>
                  <DropdownMenuItem>Cooling Pads</DropdownMenuItem>
                  <DropdownMenuItem>Docking Stations</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Software & OS</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#deals" className="text-muted-foreground hover:text-foreground transition-colors">
                Deals
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
