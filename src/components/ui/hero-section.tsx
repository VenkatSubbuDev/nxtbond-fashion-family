import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/fashion-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pr-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-gold fill-current" />
              <span className="text-sm font-medium text-gold">Premium Fashion Brand</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your
              <span className="block bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent">
                Style Statement
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg mx-auto lg:mx-0">
              Discover premium fashion for men, women, and kids. Where style meets sophistication in every thread.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Shop Collections
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">10K+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">500+</div>
                <div className="text-sm text-white/70">Premium Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gold">5★</div>
                <div className="text-sm text-white/70">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;