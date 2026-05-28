import Hero from "@/components/homepage/Hero";
import WorkSection from "@/components/homepage/WorkSection";
import ContactCTA from "@/components/homepage/ContactCTA";
import Footer from "@/components/homepage/Footer";

function HomePage() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <WorkSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
