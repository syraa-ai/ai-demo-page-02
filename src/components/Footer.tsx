

import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Shubham@syraa.live</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-9810800850</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, IN</span>
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

