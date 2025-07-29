
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Send, Sparkles, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    company: ''
  });

  const handleConnectWithFounder = () => {
    window.open('https://cal.com/shubhamarora/30min', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Our AI in{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a personalized demo and see how our AI solutions can transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Personalized Consultation</h3>
                  <p className="text-muted-foreground">
                    Syra understand specific needs of the workspace and talk relevant solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Live Implementation</h3>
                  <p className="text-muted-foreground">
                    Watch our AI process your actual data and see real-time results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Custom Integration Plan</h3>
                  <p className="text-muted-foreground">
                    Receive a tailored roadmap for implementing AI in your workspace.
                  </p>
                </div>
              </div>
            </div>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                        Mobile Number *
                      </label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="button"
                    size="lg"
                    onClick={handleConnectWithFounder}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                  >
                    Connect with Founder
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
