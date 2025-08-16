import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import CategoryShowcase from "@/components/ui/category-showcase";
import FeaturedSection from "@/components/ui/featured-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CategoryShowcase />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;