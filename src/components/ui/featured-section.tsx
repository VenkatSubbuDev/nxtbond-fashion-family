import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "Men's",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 234,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Elegant Evening Dress",
      category: "Women's",
      price: 159,
      originalPrice: 220,
      rating: 4.9,
      reviews: 189,
      badge: "New Arrival",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Casual Denim Jacket",
      category: "Unisex",
      price: 125,
      originalPrice: 175,
      rating: 4.7,
      reviews: 156,
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Kids Fun T-Shirt",
      category: "Kids",
      price: 35,
      originalPrice: 50,
      rating: 4.6,
      reviews: 98,
      badge: "Sale",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold/10 text-gold hover:bg-gold/20">
            Featured Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trending This Season
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that our customers can't stop talking about
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card 
                className="group relative overflow-hidden bg-card shadow-elegant hover:shadow-premium transition-all duration-500 transform hover:-translate-y-1"
              >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.badge === 'Sale' ? 'bg-destructive text-destructive-foreground' :
                    product.badge === 'New Arrival' ? 'bg-gold text-gold-foreground' :
                    'bg-primary text-primary-foreground'
                  }`}
                >
                  {product.badge}
                </Badge>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white shadow-lg">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white shadow-lg">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-foreground">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="outline" className="text-xs text-gold border-gold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group/btn"
                >
                  Add to Cart
                </Button>
              </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;