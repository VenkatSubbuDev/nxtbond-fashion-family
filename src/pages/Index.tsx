import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import CategoryShowcase from "@/components/ui/category-showcase";
import FeaturedSection from "@/components/ui/featured-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  console.log("Index component rendering...");
  
  try {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <CategoryShowcase />
        <FeaturedSection />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error in Index component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Error Loading NxtBond</h1>
          <p className="text-xl text-muted-foreground">Please refresh the page</p>
        </div>
      </div>
    );
  }
};

export default Index;