
import { Zap, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-green-500 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-sm mb-2">SLAMDUNK SERVICES PVT LTD</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Flat no 15 3rd Floor, Block A7 Pkt-8 Sec-23(B),<br/>
                    Raj Nagar - II, New Delhi, South West Delhi- 110077
                  </p>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Email:-</p>
                    <p className="text-sm font-medium">shubham@syraa.live</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Contact No:-</p>
                    <p className="text-sm font-medium">+919711712737</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Syraa (brand name of Slamdunk Services Pvt Ltd). All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
