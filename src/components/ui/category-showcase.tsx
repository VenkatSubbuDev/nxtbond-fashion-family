import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import mensImage from "@/assets/mens-collection.jpg";
import womensImage from "@/assets/womens-collection.jpg";
import kidsImage from "@/assets/kids-collection.jpg";

const CategoryShowcase = () => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Sophisticated styles for the modern gentleman",
      image: mensImage,
      color: "from-primary/90 to-primary/70"
    },
    {
      title: "Women's Collection",
      description: "Elegant fashion for every occasion",
      image: womensImage,
      color: "from-gold/90 to-gold/70"
    },
    {
      title: "Kids Collection",
      description: "Playful and comfortable wear for little ones",
      image: kidsImage,
      color: "from-accent/90 to-accent/70"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every member of your family
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card shadow-elegant hover:shadow-premium transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 w-fit group/btn"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              {/* Default Content (visible when not hovered) */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="outline" className="w-full group/btn">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;