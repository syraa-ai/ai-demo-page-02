
import { Zap, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/40">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Syraa
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transforming businesses with intelligent AI solutions that drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8 text-foreground">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Address */}
              <div className="group">
                <div className="bg-gradient-to-br from-card to-card/80 border border-border/60 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-2">Our Office</h4>
                      <p className="text-sm font-medium text-foreground mb-1">SLAMDUNK SERVICES PVT LTD</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Flat no 15 3rd Floor, Block A7 Pkt-8 Sec-23(B),<br/>
                        Raj Nagar - II, New Delhi,<br/>
                        South West Delhi - 110077
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="group">
                <div className="bg-gradient-to-br from-card to-card/80 border border-border/60 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:shubham@syraa.live" 
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          shubham@syraa.live
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+919711712737" 
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          +91 97117 12737
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Syraa (brand name of Slamdunk Services Pvt Ltd). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-and-conditions" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
