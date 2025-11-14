import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              BuildWithTeo
            </h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in building the ultimate PC. Expert guidance, quality components, unbeatable service.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">PC Systems</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Gaming PCs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Workstations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming Laptops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Builds</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Components</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">CPUs & Motherboards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Graphics Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Memory & Storage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cooling & PSUs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Peripherals</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Keyboards & Mice</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Headsets & Audio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Monitors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Build Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Part Compatibility</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BuildWithTeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
