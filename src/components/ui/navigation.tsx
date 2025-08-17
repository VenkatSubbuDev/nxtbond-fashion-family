import { useState } from "react";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-foreground">
                <span className="text-gold">NXT</span>BOND
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/mens" className="text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Men's
              </Link>
              <Link to="/womens" className="text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Women's
              </Link>
              <Link to="/kids" className="text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Kids
              </Link>
              <Link to="/collections" className="text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Collections
              </Link>
              <a href="#" className="text-foreground hover:text-gold transition-colors duration-300 font-medium">
                About
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link to="/mens" className="block px-3 py-2 text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Men's
              </Link>
              <Link to="/womens" className="block px-3 py-2 text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Women's
              </Link>
              <Link to="/kids" className="block px-3 py-2 text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Kids
              </Link>
              <Link to="/collections" className="block px-3 py-2 text-foreground hover:text-gold transition-colors duration-300 font-medium">
                Collections
              </Link>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-gold transition-colors duration-300 font-medium">
                About
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-gold">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;