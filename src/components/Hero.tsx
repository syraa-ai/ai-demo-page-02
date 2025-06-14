
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Brain } from "lucide-react";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="hero-gradient absolute inset-0" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Cpu className="h-8 w-8 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <Brain className="h-7 w-7 text-purple-400 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Next-Generation AI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Clinic with{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge artificial intelligence to automate processes, 
            gain insights, and drive innovation across your clinic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-8 py-6 text-lg font-semibold text-primary">
              Experience Our Demo
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              080-35738480
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50x</div>
              <div className="text-muted-foreground">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
