import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Syraa
              </span>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses with intelligent AI solutions that drive innovation and growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Predictive Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@neuralai.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Syraa. All rights reserved. Built with cutting-edge AI technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
