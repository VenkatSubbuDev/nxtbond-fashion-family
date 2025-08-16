import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, ArrowLeft, Shield, Truck, RefreshCw } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: parseInt(id || "1"),
    name: "Premium Cotton Shirt",
    category: "Men's",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
    description: "Experience ultimate comfort with our premium cotton shirt. Crafted from 100% organic cotton, this versatile piece features a modern fit that's perfect for both casual and business settings.",
    features: [
      "100% Organic Cotton",
      "Machine Washable",
      "Wrinkle Resistant",
      "Breathable Fabric",
      "Modern Fit",
      "Pre-shrunk"
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#1a365d" },
      { name: "Gray", value: "#4a5568" }
    ],
    inStock: true,
    stockCount: 15
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Product Detail</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-card">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground">
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-md border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-gold' 
                      : 'border-border hover:border-gold/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground uppercase tracking-wide">
                  {product.category}
                </span>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <Badge variant="outline" className="text-gold border-gold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Product Options */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Size: {selectedSize && <span className="text-gold">{selectedSize}</span>}
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className="w-full"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Color: {selectedColor && <span className="text-gold">{selectedColor}</span>}
                </h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-gold scale-110' 
                          : 'border-border hover:border-gold/50'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">
                  Quantity
                </h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.stockCount} items left
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!selectedSize || !selectedColor}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${product.price * quantity}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                disabled={!selectedSize || !selectedColor}
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-gold" />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-gold" />
                <span className="text-xs text-muted-foreground">Easy Returns</span>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-gold" />
                <span className="text-xs text-muted-foreground">1 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <Card className="p-6">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card className="p-6">
                <div className="text-center text-muted-foreground">
                  <Star className="h-8 w-8 mx-auto mb-2 text-gold" />
                  <p>Reviews section coming soon</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;