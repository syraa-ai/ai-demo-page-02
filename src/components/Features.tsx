
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Sparkles,
  Clock,
  Target,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "State-of-the-art neural networks that learn and adapt to your specific business needs."
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process massive datasets in seconds with our optimized AI infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your sensitive data."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights and actionable intelligence from your data streams."
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Seamlessly scale from startup to enterprise with our cloud-native platform."
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "Industry-leading accuracy rates that you can rely on for critical decisions."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and optimization to ensure peak performance."
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy across multiple regions with automatic failover and redundancy."
    },
    {
      icon: Sparkles,
      title: "Easy Integration",
      description: "Simple APIs and SDKs that integrate with your existing technology stack."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI platform provides everything you need to implement intelligent solutions 
            that drive real business value and competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:bg-primary/5 transition-all duration-300 group border-primary/10"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
