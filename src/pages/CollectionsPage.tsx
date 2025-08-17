import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, Sparkles, Crown, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import fashionHero from '@/assets/fashion-hero.jpg';
import mensImage from '@/assets/mens-collection.jpg';
import womensImage from '@/assets/womens-collection.jpg';
import kidsImage from '@/assets/kids-collection.jpg';

const featuredCollections = [
  {
    id: 'premium-luxury',
    name: 'Premium Luxury',
    description: 'Exquisite pieces crafted with the finest materials for the discerning individual',
    image: fashionHero,
    productCount: 45,
    priceRange: '$200 - $800',
    badge: 'Exclusive',
    icon: Crown,
    color: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    description: 'Fresh styles and trending pieces just added to our collection',
    image: womensImage,
    productCount: 32,
    priceRange: '$50 - $300',
    badge: 'New',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'bestsellers',
    name: 'Best Sellers',
    description: 'Customer favorites and most-loved items across all categories',
    image: mensImage,
    productCount: 28,
    priceRange: '$40 - $250',
    badge: 'Popular',
    icon: Flame,
    color: 'from-red-500 to-pink-600'
  }
];

const seasonalCollections = [
  {
    id: 'summer-essentials',
    name: 'Summer Essentials',
    description: 'Light, breathable fabrics perfect for warm weather',
    image: kidsImage,
    productCount: 56,
    season: 'Summer 2024'
  },
  {
    id: 'formal-elegance',
    name: 'Formal Elegance',
    description: 'Sophisticated attire for business and special occasions',
    image: mensImage,
    productCount: 34,
    season: 'All Season'
  },
  {
    id: 'casual-comfort',
    name: 'Casual Comfort',
    description: 'Relaxed fits and comfortable materials for everyday wear',
    image: womensImage,
    productCount: 67,
    season: 'All Season'
  }
];

const categoryCollections = [
  {
    id: 'mens-exclusive',
    name: "Men's Exclusive",
    description: 'Tailored specifically for the modern gentleman',
    image: mensImage,
    productCount: 89,
    category: 'Men',
    link: '/mens'
  },
  {
    id: 'womens-exclusive',
    name: "Women's Exclusive", 
    description: 'Elegant and contemporary styles for every woman',
    image: womensImage,
    productCount: 124,
    category: 'Women',
    link: '/womens'
  },
  {
    id: 'kids-exclusive',
    name: "Kids' Exclusive",
    description: 'Fun, durable, and comfortable clothing for children',
    image: kidsImage,
    productCount: 67,
    category: 'Kids',
    link: '/kids'
  }
];

export default function CollectionsPage() {
  const [selectedTab, setSelectedTab] = useState<'featured' | 'seasonal' | 'category'>('featured');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-foreground">Our Collections</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover curated collections that define style, comfort, and elegance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={selectedTab === 'featured' ? 'default' : 'ghost'}
              onClick={() => setSelectedTab('featured')}
              className="px-6"
            >
              Featured Collections
            </Button>
            <Button
              variant={selectedTab === 'seasonal' ? 'default' : 'ghost'}
              onClick={() => setSelectedTab('seasonal')}
              className="px-6"
            >
              Seasonal Collections
            </Button>
            <Button
              variant={selectedTab === 'category' ? 'default' : 'ghost'}
              onClick={() => setSelectedTab('category')}
              className="px-6"
            >
              By Category
            </Button>
          </div>
        </div>

        {/* Featured Collections */}
        {selectedTab === 'featured' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Collections</h2>
              <p className="text-lg text-muted-foreground">
                Handpicked collections showcasing our finest offerings
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredCollections.map((collection) => {
                const IconComponent = collection.icon;
                return (
                  <Card key={collection.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`} />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground">
                          <IconComponent className="h-3 w-3 mr-1" />
                          {collection.badge}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{collection.productCount} Items</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          {collection.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{collection.priceRange}</span>
                        <div className="flex items-center gap-1 text-primary">
                          <span>Explore</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Seasonal Collections */}
        {selectedTab === 'seasonal' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Seasonal Collections</h2>
              <p className="text-lg text-muted-foreground">
                Collections tailored for every season and occasion
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {seasonalCollections.map((collection) => (
                <Card key={collection.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{collection.season}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {collection.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {collection.productCount} products
                      </span>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        Shop Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Category Collections */}
        {selectedTab === 'category' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
              <p className="text-lg text-muted-foreground">
                Explore our complete range organized by who you're shopping for
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryCollections.map((collection) => (
                <Link key={collection.id} to={collection.link}>
                  <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 h-full">
                    <div className="relative h-80 overflow-hidden rounded-t-lg">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {collection.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                        <p className="text-white/90 mb-4">{collection.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            {collection.productCount} products
                          </span>
                          <div className="flex items-center gap-2 text-primary-foreground bg-primary px-3 py-1 rounded-full">
                            <span className="text-sm font-medium">Shop Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our complete catalog or get in touch with our style consultants for personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Browse All Products
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Contact Style Consultant
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}