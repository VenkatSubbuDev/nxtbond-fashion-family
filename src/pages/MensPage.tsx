import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import mensImage from '@/assets/mens-collection.jpg';

const mensProducts = [
  {
    id: 'mens-1',
    name: 'Classic Formal Shirt',
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.5,
    reviews: 156,
    image: mensImage,
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Black'],
    isNew: false,
    isSale: true
  },
  {
    id: 'mens-2',
    name: 'Premium Casual Jeans',
    price: 129.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: mensImage,
    category: 'Jeans',
    sizes: ['30', '32', '34', '36'],
    colors: ['Dark Blue', 'Light Blue', 'Black'],
    isNew: true,
    isSale: false
  },
  {
    id: 'mens-3',
    name: 'Executive Blazer',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 67,
    image: mensImage,
    category: 'Blazers',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    isNew: false,
    isSale: true
  },
  {
    id: 'mens-4',
    name: 'Luxury Polo Shirt',
    price: 79.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 134,
    image: mensImage,
    category: 'Polo',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Green'],
    isNew: false,
    isSale: false
  },
  {
    id: 'mens-5',
    name: 'Casual Cotton Shorts',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 78,
    image: mensImage,
    category: 'Shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'Navy', 'Olive'],
    isNew: false,
    isSale: true
  },
  {
    id: 'mens-6',
    name: 'Designer Dress Pants',
    price: 149.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 45,
    image: mensImage,
    category: 'Pants',
    sizes: ['30', '32', '34', '36'],
    colors: ['Black', 'Charcoal', 'Navy'],
    isNew: true,
    isSale: false
  },
  {
    id: 'mens-7',
    name: 'Casual Henley Shirt',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 92,
    image: mensImage,
    category: 'Casual',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'White', 'Black'],
    isNew: false,
    isSale: true
  },
  {
    id: 'mens-8',
    name: 'Premium Wool Sweater',
    price: 189.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 56,
    image: mensImage,
    category: 'Sweaters',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Navy'],
    isNew: true,
    isSale: false
  }
];

const categories = ['All', 'Shirts', 'Jeans', 'Blazers', 'Polo', 'Shorts', 'Pants', 'Casual', 'Sweaters'];
const priceRanges = ['All Prices', '$0 - $50', '$50 - $100', '$100 - $200', '$200+'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rating'];

export default function MensPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filterProducts = (products: typeof mensProducts) => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedPriceRange !== 'All Prices') {
      filtered = filtered.filter(product => {
        const price = product.price;
        switch (selectedPriceRange) {
          case '$0 - $50': return price <= 50;
          case '$50 - $100': return price > 50 && price <= 100;
          case '$100 - $200': return price > 100 && price <= 200;
          case '$200+': return price > 200;
          default: return true;
        }
      });
    }

    // Sort products
    switch (sortBy) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
        filtered.sort((a, b) => b.isNew ? 1 : -1);
        break;
      case 'Best Rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts(mensProducts);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Men's Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of men's clothing designed for the modern gentleman
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 p-4 bg-card rounded-lg shadow-subtle">
          <div className="flex flex-wrap gap-4 flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range} value={range}>{range}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {mensProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover-scale">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-primary-foreground">NEW</Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-destructive text-destructive-foreground">SALE</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-primary fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-muted-foreground">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs text-muted-foreground">Sizes:</span>
                      {product.sizes.slice(0, 3).map(size => (
                        <Badge key={size} variant="outline" className="text-xs">{size}</Badge>
                      ))}
                      {product.sizes.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{product.sizes.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more products</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}