import Hero from "@/components/homepage/Hero";
import CredentialStrip from "@/components/homepage/CredentialStrip";
import WorkSection from "@/components/homepage/WorkSection";
import AboutSection from "@/components/homepage/AboutSection";
import ContactCTA from "@/components/homepage/ContactCTA";
import Footer from "@/components/homepage/Footer";

function HomePage() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <CredentialStrip />
        <WorkSection />
        <AboutSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
