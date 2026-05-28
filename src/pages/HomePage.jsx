import Hero from "@/components/homepage/Hero";
import WorkSection from "@/components/homepage/WorkSection";
import Footer from "@/components/homepage/Footer";

function HomePage() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
