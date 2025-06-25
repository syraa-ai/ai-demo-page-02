
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Syraa's AI services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily use Syraa's AI services for personal and commercial use. 
                This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
              <p>
                We strive to provide 24/7 availability of our AI services, but we do not guarantee 
                uninterrupted access. Services may be temporarily unavailable for maintenance or updates.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
              <p>
                In no event shall Syraa or its suppliers be liable for any damages arising out of the 
                use or inability to use our AI services.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of India and you irrevocably submit to the exclusive jurisdiction of the courts.
              </p>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at Shubham@syraa.live or 
                call 080-3573-8480.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
