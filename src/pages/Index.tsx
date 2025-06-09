
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";
import { ShoppingCart, Star, Truck, Shield, Headphones, Award } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      name: "Professional Carbon Fiber Racket",
      price: 149.99,
      originalPrice: 199.99,
      image: "photo-1618160702438-9b02ab6515c9",
      rating: 5,
      reviews: 127,
      category: "Rackets"
    },
    {
      name: "Tournament Grade Shuttlecocks (12 pack)",
      price: 24.99,
      originalPrice: 34.99,
      image: "photo-1721322800607-8c38375eef04",
      rating: 4,
      reviews: 89,
      category: "Shuttlecocks"
    },
    {
      name: "Pro Court Shoes - Non Marking",
      price: 89.99,
      image: "photo-1618160702438-9b02ab6515c9",
      rating: 5,
      reviews: 203,
      category: "Shoes"
    },
    {
      name: "Deluxe Racket Bag - Thermal",
      price: 45.99,
      originalPrice: 59.99,
      image: "photo-1721322800607-8c38375eef04",
      rating: 4,
      reviews: 156,
      category: "Bags"
    }
  ];

  const categories = [
    {
      name: "Badminton Rackets",
      image: "photo-1618160702438-9b02ab6515c9",
      itemCount: 45,
      description: "Professional and recreational rackets from top brands"
    },
    {
      name: "Shuttlecocks",
      image: "photo-1721322800607-8c38375eef04",
      itemCount: 28,
      description: "Feather and synthetic shuttlecocks for all skill levels"
    },
    {
      name: "Court Shoes",
      image: "photo-1618160702438-9b02ab6515c9",
      itemCount: 32,
      description: "Non-marking shoes designed for optimal court performance"
    },
    {
      name: "Bags & Accessories",
      image: "photo-1721322800607-8c38375eef04",
      itemCount: 67,
      description: "Racket bags, grips, strings, and essential accessories"
    },
    {
      name: "Apparel",
      image: "photo-1618160702438-9b02ab6515c9",
      itemCount: 89,
      description: "Comfortable and breathable clothing for peak performance"
    },
    {
      name: "Training Equipment",
      image: "photo-1721322800607-8c38375eef04",
      itemCount: 23,
      description: "Nets, posts, and training aids for skill development"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free USA Shipping",
      description: "Free shipping on orders over $75 across all 50 states"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "30-day money back guarantee on all products"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Professional advice from badminton enthusiasts"
    },
    {
      icon: Award,
      title: "Authentic Products",
      description: "100% genuine products from authorized dealers"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BadmintonUSA</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shop</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brands</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </nav>
            <Button className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">Trusted by 10,000+ Players</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elevate Your <br />
              <span className="text-yellow-400">Badminton Game</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover premium badminton accessories, equipment, and gear. 
              Fast shipping across the USA with expert customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 bg-white text-primary hover:bg-white/90 text-lg font-medium">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white text-white hover:bg-white hover:text-primary text-lg font-medium">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection categories={categories} />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked accessories and equipment for serious badminton players
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="h-12 px-8">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose BadmintonUSA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">🇺🇸 Made for American Players</h3>
                  <p className="text-muted-foreground">
                    We understand the unique needs of badminton players across the USA, 
                    from recreational enthusiasts to tournament competitors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🏆 Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Every product is carefully selected and tested by our team of 
                    badminton professionals to ensure top performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🚚 Fast Nationwide Shipping</h3>
                  <p className="text-muted-foreground">
                    Get your gear fast with our reliable shipping network covering 
                    all 50 states, with most orders arriving within 3-5 business days.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Badminton equipment"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold">BadmintonUSA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for badminton excellence across America.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rackets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shuttlecocks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BadmintonUSA. All rights reserved. Proudly serving badminton players across America.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
