import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import kidsImage from '@/assets/kids-collection.jpg';

const kidsProducts = [
  {
    id: 'kids-1',
    name: 'Rainbow Unicorn Dress',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.8,
    reviews: 189,
    image: kidsImage,
    category: 'Dresses',
    sizes: ['2T', '3T', '4T', '5T', '6'],
    colors: ['Rainbow', 'Pink', 'Purple'],
    isNew: false,
    isSale: true,
    ageGroup: 'Girls'
  },
  {
    id: 'kids-2',
    name: 'Adventure Explorer Shirt',
    price: 24.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 145,
    image: kidsImage,
    category: 'Shirts',
    sizes: ['2T', '3T', '4T', '5T', '6', '7'],
    colors: ['Khaki', 'Navy', 'Green'],
    isNew: true,
    isSale: false,
    ageGroup: 'Boys'
  },
  {
    id: 'kids-3',
    name: 'Comfortable Play Jeans',
    price: 34.99,
    originalPrice: 45.00,
    rating: 4.7,
    reviews: 267,
    image: kidsImage,
    category: 'Jeans',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['Dark Blue', 'Light Blue'],
    isNew: false,
    isSale: true,
    ageGroup: 'Unisex'
  },
  {
    id: 'kids-4',
    name: 'Princess Party Tutu',
    price: 29.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image: kidsImage,
    category: 'Skirts',
    sizes: ['2T', '3T', '4T', '5T'],
    colors: ['Pink', 'Purple', 'Gold'],
    isNew: true,
    isSale: false,
    ageGroup: 'Girls'
  },
  {
    id: 'kids-5',
    name: 'Superhero Cape Hoodie',
    price: 42.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 156,
    image: kidsImage,
    category: 'Hoodies',
    sizes: ['3T', '4T', '5T', '6', '7'],
    colors: ['Red', 'Blue', 'Black'],
    isNew: false,
    isSale: true,
    ageGroup: 'Boys'
  },
  {
    id: 'kids-6',
    name: 'Cozy Pajama Set',
    price: 32.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 134,
    image: kidsImage,
    category: 'Sleepwear',
    sizes: ['2T', '3T', '4T', '5T', '6'],
    colors: ['Stars', 'Hearts', 'Animals'],
    isNew: false,
    isSale: false,
    ageGroup: 'Unisex'
  },
  {
    id: 'kids-7',
    name: 'Summer Shorts Set',
    price: 26.99,
    originalPrice: 35.00,
    rating: 4.4,
    reviews: 89,
    image: kidsImage,
    category: 'Shorts',
    sizes: ['2T', '3T', '4T', '5T', '6', '7'],
    colors: ['Blue', 'Green', 'Orange'],
    isNew: false,
    isSale: true,
    ageGroup: 'Unisex'
  },
  {
    id: 'kids-8',
    name: 'Warm Winter Jacket',
    price: 69.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 78,
    image: kidsImage,
    category: 'Jackets',
    sizes: ['3T', '4T', '5T', '6', '7', '8'],
    colors: ['Navy', 'Pink', 'Gray'],
    isNew: true,
    isSale: false,
    ageGroup: 'Unisex'
  }
];

const categories = ['All', 'Dresses', 'Shirts', 'Jeans', 'Skirts', 'Hoodies', 'Sleepwear', 'Shorts', 'Jackets'];
const ageGroups = ['All', 'Boys', 'Girls', 'Unisex'];
const priceRanges = ['All Prices', '$0 - $25', '$25 - $40', '$40 - $60', '$60+'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rating'];

export default function KidsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filterProducts = (products: typeof kidsProducts) => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedAgeGroup !== 'All') {
      filtered = filtered.filter(product => product.ageGroup === selectedAgeGroup || product.ageGroup === 'Unisex');
    }

    if (selectedPriceRange !== 'All Prices') {
      filtered = filtered.filter(product => {
        const price = product.price;
        switch (selectedPriceRange) {
          case '$0 - $25': return price <= 25;
          case '$25 - $40': return price > 25 && price <= 40;
          case '$40 - $60': return price > 40 && price <= 60;
          case '$60+': return price > 60;
          default: return true;
        }
      });
    }

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

  const filteredProducts = filterProducts(kidsProducts);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Kids Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fun, comfortable, and stylish clothing for your little ones
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
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

            <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="For" />
              </SelectTrigger>
              <SelectContent>
                {ageGroups.map(group => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
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

        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {kidsProducts.length} products
          </p>
        </div>

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
                    <Badge className="bg-secondary text-secondary-foreground">{product.ageGroup}</Badge>
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
                      {product.sizes.slice(0, 4).map(size => (
                        <Badge key={size} variant="outline" className="text-xs">{size}</Badge>
                      ))}
                      {product.sizes.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{product.sizes.length - 4}</Badge>
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