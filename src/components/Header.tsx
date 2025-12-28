import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-foreground tracking-tight">
            SOLE<span className="text-gradient">CRAFT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
              New Arrivals
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
              Collections
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
                New Arrivals
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
                Collections
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide uppercase">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
