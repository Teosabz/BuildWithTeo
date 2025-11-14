import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Filter, Home } from "lucide-react";
import gpuImage from "@/assets/product-gpu.jpg";
import cpuImage from "@/assets/product-cpu.jpg";
import ramImage from "@/assets/product-ram.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import headsetImage from "@/assets/product-headset.jpg";
import monitorImage from "@/assets/product-monitor.jpg";
import pcGamingElite from "@/assets/pc-gaming-elite.jpg";
import pcGamingMid from "@/assets/pc-gaming-mid.jpg";
import pcGamingBudget from "@/assets/pc-gaming-budget.jpg";
import pcWorkstation from "@/assets/pc-workstation.jpg";
import pcWorkstationPro from "@/assets/pc-workstation-pro.jpg";
import pcOffice from "@/assets/pc-office.jpg";
import pcOfficePro from "@/assets/pc-office-pro.jpg";
import pcMini from "@/assets/pc-mini.jpg";
import pcMiniGaming from "@/assets/pc-mini-gaming.jpg";
import laptopGaming from "@/assets/laptop-gaming.jpg";
import laptopUltrabook from "@/assets/laptop-ultrabook.jpg";
import mouseImage from "@/assets/product-mouse.jpg";
import microphoneImage from "@/assets/product-microphone.jpg";
import keyboardRgb from "@/assets/keyboard-rgb.jpg";
import keyboardCompact from "@/assets/keyboard-compact.jpg";
import headsetWireless from "@/assets/headset-wireless.jpg";
import headsetStudio from "@/assets/headset-studio.jpg";

const CategoryListing = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Mock category data
  const categories: Record<string, any> = {
    "gaming-pcs": {
      name: "Gaming PCs",
      description: "High-performance prebuilt gaming systems ready to dominate any game",
      products: [
        { id: "pc-1", name: "Teo's Elite Gaming Beast - RTX 4090", price: 3499.99, image: pcGamingElite, category: "Gaming PCs", rating: 5.0, inStock: true, specs: { cpu: "Intel i9-14900K", gpu: "RTX 4090", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "pc-2", name: "Ultimate Gaming Rig - RTX 4080", price: 2799.99, image: pcGamingElite, category: "Gaming PCs", rating: 4.9, inStock: true, specs: { cpu: "Intel i7-14700K", gpu: "RTX 4080", ram: "32GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "pc-3", name: "Pro Gamer Build - RTX 4070 Ti", price: 2199.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.8, inStock: true, specs: { cpu: "AMD Ryzen 9 7900X", gpu: "RTX 4070 Ti", ram: "32GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "pc-4", name: "High-End Gaming PC - RTX 4070", price: 1899.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.8, inStock: true, specs: { cpu: "Intel i5-14600K", gpu: "RTX 4070", ram: "32GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "pc-5", name: "Enthusiast Gaming Build - RX 7900 XTX", price: 2299.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.7, inStock: true, specs: { cpu: "AMD Ryzen 7 7800X3D", gpu: "RX 7900 XTX", ram: "32GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "pc-6", name: "Performance Gaming Rig - RTX 4060 Ti", price: 1499.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.6, inStock: true, specs: { cpu: "Intel i5-13600K", gpu: "RTX 4060 Ti", ram: "16GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "pc-7", name: "Budget Gaming Beast - RX 7800 XT", price: 1299.99, image: pcGamingBudget, category: "Gaming PCs", rating: 4.7, inStock: true, specs: { cpu: "AMD Ryzen 5 7600X", gpu: "RX 7800 XT", ram: "16GB DDR5", storage: "500GB NVMe SSD" } },
        { id: "pc-8", name: "Entry Gaming PC - RTX 4060", price: 1099.99, image: pcGamingBudget, category: "Gaming PCs", rating: 4.5, inStock: true, specs: { cpu: "Intel i5-12400F", gpu: "RTX 4060", ram: "16GB DDR4", storage: "500GB NVMe SSD" } },
        { id: "pc-9", name: "RGB Gaming Showpiece - RTX 4080", price: 2999.99, image: pcGamingElite, category: "Gaming PCs", rating: 4.9, inStock: true, specs: { cpu: "Intel i9-13900K", gpu: "RTX 4080", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "pc-10", name: "Compact Gaming PC - RTX 4070", price: 1799.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.6, inStock: true, specs: { cpu: "AMD Ryzen 7 7700X", gpu: "RTX 4070", ram: "32GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "pc-11", name: "Silent Gaming Build - RTX 4070 Ti", price: 2399.99, image: pcGamingMid, category: "Gaming PCs", rating: 4.8, inStock: false, specs: { cpu: "Intel i7-14700K", gpu: "RTX 4070 Ti", ram: "32GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "pc-12", name: "Extreme Gaming Workstation - RTX 4090", price: 3899.99, image: pcGamingElite, category: "Gaming PCs", rating: 5.0, inStock: true, specs: { cpu: "AMD Ryzen 9 7950X", gpu: "RTX 4090", ram: "128GB DDR5", storage: "4TB NVMe SSD" } },
      ],
    },
    "workstation-pcs": {
      name: "Workstation PCs",
      description: "Professional workstations for content creation, 3D rendering, and demanding workflows",
      products: [
        { id: "ws-1", name: "Pro Creator Station - RTX 4090", price: 4299.99, image: pcWorkstationPro, category: "Workstations", rating: 5.0, inStock: true, specs: { cpu: "AMD Threadripper 7960X", gpu: "RTX 4090", ram: "128GB DDR5", storage: "4TB NVMe SSD" } },
        { id: "ws-2", name: "Content Creator Pro - RTX 4080", price: 3499.99, image: pcWorkstation, category: "Workstations", rating: 4.9, inStock: true, specs: { cpu: "Intel i9-14900K", gpu: "RTX 4080", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "ws-3", name: "3D Rendering Beast", price: 3999.99, image: pcWorkstationPro, category: "Workstations", rating: 4.9, inStock: true, specs: { cpu: "AMD Ryzen 9 7950X", gpu: "RTX 4090", ram: "128GB DDR5", storage: "4TB NVMe SSD" } },
        { id: "ws-4", name: "Video Editing Station", price: 2799.99, image: pcWorkstation, category: "Workstations", rating: 4.8, inStock: true, specs: { cpu: "Intel i9-13900K", gpu: "RTX 4070 Ti", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "ws-5", name: "CAD Workstation Pro", price: 3299.99, image: pcWorkstationPro, category: "Workstations", rating: 4.8, inStock: true, specs: { cpu: "AMD Ryzen 9 7900X", gpu: "RTX A5000", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
        { id: "ws-6", name: "Music Production Station", price: 2299.99, image: pcWorkstation, category: "Workstations", rating: 4.7, inStock: true, specs: { cpu: "Intel i7-14700K", gpu: "RTX 4060", ram: "64GB DDR5", storage: "2TB NVMe SSD" } },
      ],
    },
    "office-pcs": {
      name: "Office PCs",
      description: "Reliable and efficient systems for business and productivity tasks",
      products: [
        { id: "off-1", name: "Business Pro Desktop", price: 899.99, image: pcOfficePro, category: "Office PCs", rating: 4.7, inStock: true, specs: { cpu: "Intel i5-13400", gpu: "Integrated", ram: "16GB DDR4", storage: "512GB NVMe SSD" } },
        { id: "off-2", name: "Executive Workstation", price: 1299.99, image: pcOffice, category: "Office PCs", rating: 4.8, inStock: true, specs: { cpu: "Intel i7-13700", gpu: "Integrated", ram: "32GB DDR4", storage: "1TB NVMe SSD" } },
        { id: "off-3", name: "Budget Office PC", price: 599.99, image: pcOfficePro, category: "Office PCs", rating: 4.5, inStock: true, specs: { cpu: "Intel i3-12100", gpu: "Integrated", ram: "8GB DDR4", storage: "256GB SSD" } },
        { id: "off-4", name: "Multi-Monitor Office Build", price: 1099.99, image: pcOffice, category: "Office PCs", rating: 4.7, inStock: true, specs: { cpu: "AMD Ryzen 5 7600", gpu: "Integrated", ram: "16GB DDR5", storage: "512GB NVMe SSD" } },
        { id: "off-5", name: "Small Business Server", price: 1799.99, image: pcOfficePro, category: "Office PCs", rating: 4.8, inStock: true, specs: { cpu: "Intel Xeon E-2314", gpu: "Integrated", ram: "32GB ECC", storage: "2TB SSD RAID" } },
      ],
    },
    "mini-pcs": {
      name: "Mini PCs & HTPCs",
      description: "Compact powerhouses and home theater PCs for any space",
      products: [
        { id: "mini-1", name: "Ultra Compact Gaming Mini - RTX 4060", price: 1399.99, image: pcMiniGaming, category: "Mini PCs", rating: 4.7, inStock: true, specs: { cpu: "Intel i5-13600K", gpu: "RTX 4060", ram: "16GB DDR5", storage: "512GB NVMe SSD" } },
        { id: "mini-2", name: "Home Theater PC 4K", price: 799.99, image: pcMini, category: "Mini PCs", rating: 4.6, inStock: true, specs: { cpu: "AMD Ryzen 5 5600G", gpu: "Integrated", ram: "16GB DDR4", storage: "1TB SSD" } },
        { id: "mini-3", name: "Living Room Gaming PC", price: 1699.99, image: pcMiniGaming, category: "Mini PCs", rating: 4.8, inStock: true, specs: { cpu: "AMD Ryzen 7 7700X", gpu: "RX 7600", ram: "32GB DDR5", storage: "1TB NVMe SSD" } },
        { id: "mini-4", name: "Office Mini Desktop", price: 649.99, image: pcMini, category: "Mini PCs", rating: 4.5, inStock: true, specs: { cpu: "Intel i5-12400", gpu: "Integrated", ram: "16GB DDR4", storage: "512GB SSD" } },
      ],
    },
    "laptops": {
      name: "Laptops",
      description: "Gaming laptops, ultrabooks, and business notebooks for every need",
      products: [
        { id: "lap-1", name: "Gaming Laptop RTX 4090 - 17.3\"", price: 3299.99, image: laptopGaming, category: "Laptops", rating: 4.9, inStock: true, specs: { cpu: "Intel i9-13980HX", gpu: "RTX 4090", ram: "32GB DDR5", storage: "2TB NVMe SSD", display: "17.3\" 240Hz QHD" } },
        { id: "lap-2", name: "Gaming Laptop RTX 4080 - 16\"", price: 2699.99, image: laptopGaming, category: "Laptops", rating: 4.8, inStock: true, specs: { cpu: "Intel i7-13700HX", gpu: "RTX 4080", ram: "32GB DDR5", storage: "1TB NVMe SSD", display: "16\" 240Hz QHD" } },
        { id: "lap-3", name: "Gaming Laptop RTX 4070 - 15.6\"", price: 1999.99, image: laptopGaming, category: "Laptops", rating: 4.7, inStock: true, specs: { cpu: "AMD Ryzen 9 7940HS", gpu: "RTX 4070", ram: "16GB DDR5", storage: "1TB NVMe SSD", display: "15.6\" 165Hz FHD" } },
        { id: "lap-4", name: "Ultrabook Pro - 14\"", price: 1499.99, image: laptopUltrabook, category: "Laptops", rating: 4.8, inStock: true, specs: { cpu: "Intel i7-1360P", gpu: "Iris Xe", ram: "16GB DDR5", storage: "512GB NVMe SSD", display: "14\" 2.8K OLED" } },
        { id: "lap-5", name: "Business Laptop - 15.6\"", price: 1099.99, image: laptopUltrabook, category: "Laptops", rating: 4.6, inStock: true, specs: { cpu: "Intel i5-1335U", gpu: "Integrated", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6\" FHD IPS" } },
        { id: "lap-6", name: "Budget Gaming Laptop RTX 4050", price: 1299.99, image: laptopGaming, category: "Laptops", rating: 4.5, inStock: true, specs: { cpu: "Intel i5-12500H", gpu: "RTX 4050", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: "15.6\" 144Hz FHD" } },
        { id: "lap-7", name: "Creator Laptop RTX 4060 - 16\"", price: 1899.99, image: laptopGaming, category: "Laptops", rating: 4.7, inStock: true, specs: { cpu: "AMD Ryzen 7 7840HS", gpu: "RTX 4060", ram: "32GB DDR5", storage: "1TB NVMe SSD", display: "16\" 2.5K 165Hz" } },
      ],
    },
    "graphics-cards": {
      name: "Graphics Cards",
      description: "High-performance GPUs for gaming, content creation, and professional workloads",
      products: [
        { id: "1", name: "NVIDIA GeForce RTX 4090 Gaming Graphics Card", price: 1599.99, image: gpuImage, category: "Graphics Cards", rating: 4.8, inStock: true },
        { id: "4", name: "NVIDIA GeForce RTX 4080 Gaming Graphics Card", price: 1199.99, image: gpuImage, category: "Graphics Cards", rating: 4.7, inStock: false },
        { id: "10", name: "NVIDIA GeForce RTX 4070 Ti Graphics Card", price: 799.99, image: gpuImage, category: "Graphics Cards", rating: 4.6, inStock: true },
        { id: "11", name: "AMD Radeon RX 7900 XTX Graphics Card", price: 999.99, image: gpuImage, category: "Graphics Cards", rating: 4.7, inStock: true },
        { id: "12", name: "NVIDIA GeForce RTX 4060 Ti Graphics Card", price: 499.99, image: gpuImage, category: "Graphics Cards", rating: 4.5, inStock: true },
        { id: "13", name: "AMD Radeon RX 7800 XT Graphics Card", price: 649.99, image: gpuImage, category: "Graphics Cards", rating: 4.6, inStock: true },
      ],
    },
    "processors": {
      name: "Processors",
      description: "Latest CPUs from Intel and AMD for maximum performance",
      products: [
        { id: "2", name: "Intel Core i9-14900K Processor", price: 589.99, image: cpuImage, category: "Processors", rating: 4.9, inStock: true },
        { id: "14", name: "AMD Ryzen 9 7950X Processor", price: 569.99, image: cpuImage, category: "Processors", rating: 4.8, inStock: true },
        { id: "15", name: "Intel Core i7-14700K Processor", price: 409.99, image: cpuImage, category: "Processors", rating: 4.7, inStock: true },
        { id: "16", name: "AMD Ryzen 7 7800X3D Processor", price: 449.99, image: cpuImage, category: "Processors", rating: 4.9, inStock: true },
        { id: "17", name: "Intel Core i5-14600K Processor", price: 319.99, image: cpuImage, category: "Processors", rating: 4.6, inStock: true },
        { id: "18", name: "AMD Ryzen 5 7600X Processor", price: 249.99, image: cpuImage, category: "Processors", rating: 4.5, inStock: true },
      ],
    },
    "memory": {
      name: "Memory (RAM)",
      description: "DDR4 and DDR5 memory modules for optimal system performance",
      products: [
        { id: "3", name: "Corsair Vengeance RGB DDR5 32GB (2x16GB)", price: 149.99, image: ramImage, category: "Memory", rating: 4.7, inStock: true },
        { id: "19", name: "G.Skill Trident Z5 RGB DDR5 64GB (2x32GB)", price: 279.99, image: ramImage, category: "Memory", rating: 4.8, inStock: true },
        { id: "20", name: "Kingston Fury Beast DDR5 32GB (2x16GB)", price: 139.99, image: ramImage, category: "Memory", rating: 4.6, inStock: true },
        { id: "21", name: "Corsair Dominator Platinum DDR5 64GB (2x32GB)", price: 349.99, image: ramImage, category: "Memory", rating: 4.9, inStock: true },
        { id: "22", name: "TeamGroup T-Force Delta RGB DDR4 32GB (2x16GB)", price: 99.99, image: ramImage, category: "Memory", rating: 4.5, inStock: true },
        { id: "23", name: "Crucial Pro DDR5 48GB (2x24GB)", price: 189.99, image: ramImage, category: "Memory", rating: 4.6, inStock: true },
      ],
    },
    "keyboards": {
      name: "Keyboards",
      description: "Mechanical and gaming keyboards for the ultimate typing experience",
      products: [
        { id: "5", name: "Mechanical RGB Gaming Keyboard - Blue Switches", price: 129.99, image: keyboardRgb, category: "Keyboards", rating: 4.6, inStock: true },
        { id: "24", name: "Wireless Mechanical Keyboard - Brown Switches", price: 149.99, image: keyboardImage, category: "Keyboards", rating: 4.7, inStock: true },
        { id: "25", name: "Compact 60% Mechanical Keyboard - Red Switches", price: 89.99, image: keyboardCompact, category: "Keyboards", rating: 4.5, inStock: true },
        { id: "26", name: "Full-Size RGB Mechanical Keyboard - Silent Switches", price: 159.99, image: keyboardRgb, category: "Keyboards", rating: 4.8, inStock: true },
        { id: "8", name: "Wireless Gaming Mouse - 16000 DPI", price: 79.99, image: mouseImage, category: "Mice", rating: 4.7, inStock: true },
      ],
    },
    "audio": {
      name: "Audio Equipment",
      description: "Premium headsets, microphones, and speakers for immersive sound",
      products: [
        { id: "6", name: "Premium Gaming Headset with 7.1 Surround Sound", price: 89.99, image: headsetImage, category: "Audio", rating: 4.8, inStock: true },
        { id: "27", name: "Wireless Gaming Headset - Low Latency", price: 149.99, image: headsetWireless, category: "Audio", rating: 4.7, inStock: true },
        { id: "28", name: "USB Condenser Microphone for Streaming", price: 119.99, image: microphoneImage, category: "Audio", rating: 4.9, inStock: true },
        { id: "29", name: "Studio Monitor Headphones - Audiophile", price: 299.99, image: headsetStudio, category: "Audio", rating: 4.8, inStock: true },
        { id: "30a", name: "Pro Gaming Headset RGB - 7.1 Surround", price: 159.99, image: headsetWireless, category: "Audio", rating: 4.9, inStock: true },
      ],
    },
    "monitors": {
      name: "Monitors",
      description: "High-refresh gaming monitors and professional displays",
      products: [
        { id: "7", name: "34\" Curved Ultrawide Gaming Monitor - 144Hz", price: 499.99, image: monitorImage, category: "Monitors", rating: 4.9, inStock: true },
        { id: "30", name: "27\" 4K Gaming Monitor - 165Hz", price: 599.99, image: monitorImage, category: "Monitors", rating: 4.8, inStock: true },
        { id: "31", name: "24\" 1080p Gaming Monitor - 240Hz", price: 299.99, image: monitorImage, category: "Monitors", rating: 4.7, inStock: true },
        { id: "32", name: "32\" 4K Professional Monitor - IPS Panel", price: 699.99, image: monitorImage, category: "Monitors", rating: 4.9, inStock: true },
      ],
    },
  };

  const category = categories[categorySlug || "graphics-cards"] || categories["graphics-cards"];

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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">{category.name}</h1>
          <p className="text-lg text-muted-foreground">{category.description}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Showing {category.products.length} products
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select defaultValue="featured">
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="md:ml-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {category.products.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryListing;
