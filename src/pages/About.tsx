
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card rounded-lg shadow-sm border p-8 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                About Syra
              </h1>
              <p className="text-lg text-muted-foreground">
                Transforming businesses with intelligent AI solutions
              </p>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  At Syra, we believe artificial intelligence is not just a future possibility—it's a present-day catalyst for transformation. In a world where time is scarce, customer expectations are rising, and operational complexity is increasing, businesses need intelligent systems that can adapt, learn, and assist autonomously. Syra is built to be that bridge—between cutting-edge AI research and practical, business-ready deployment.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Vision</h2>
                <p className="text-foreground leading-relaxed">
                  We envision a world where AI becomes as essential and intuitive—powering workflows, decisions, and customer experiences without friction. At Syra, our mission is to democratize this future by making advanced AI tools accessible, affordable, and seamlessly integrable across industries. Whether you're a solo businessman, practitioner or a multi-location enterprise, we empower you to harness the full potential of artificial intelligence without needing a data science team.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Who We Are</h2>
                <p className="text-foreground leading-relaxed">
                  Syra was founded by a passionate team of researchers, ML engineers, product thinkers, and industry veterans—individuals who have spent over a decade immersed in the science of deep learning, neural networks, and real-time automation. Our roots lie in the labs of top research institutions and the floors of fast-scaling startups, giving us a rare blend of scientific rigor and market empathy.
                </p>
                <p className="text-foreground leading-relaxed">
                  Our team's background spans across natural language processing, computer vision, voice AI, and generative AI—allowing us to build systems that understand, interact, and evolve like a human, but with the speed and scale of a machine.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">What We Do</h2>
                <p className="text-foreground leading-relaxed">
                  At its core, Syra is building an intelligent front-desk assistant—a 24/7 AI receptionist that never misses a call, appointment, or an inquiry. But behind that simple interface lies a powerful, ever-evolving AI engine capable of handling complex conversations, automating repetitive workflows, and delivering real-time analytics to help businesses grow faster and operate smarter.
                </p>
                <p className="text-foreground leading-relaxed">
                  We're not stopping at small businesses. Our platform is designed to be modular, industry-agnostic, and future-ready—allowing us to expand into logistics, finance, education, and more. Whether it's streamlining customer service, automating onboarding, or providing voice-based task assistance, Syra adapts to your unique context with minimal setup.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
