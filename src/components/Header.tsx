
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Syraa
          </span>
        </div>
        
        <Button onClick={scrollToDemo} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Try Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
